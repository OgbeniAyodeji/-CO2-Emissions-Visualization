d3.csv("../../data/co-emissions-per-capita.csv").then(data => {
    data.forEach(d => {
        d.Year = +d.Year;
        d["Annual CO₂ emissions (per capita)"] = +d["Annual CO₂ emissions (per capita)"];
    });

    // Simple continent mapping (you may need to expand this)
    const continentMap = {
        "Africa": ["Africa"],
        "Asia": ["Asia"],
        "Europe": ["Europe"],
        "North America": ["North America"],
        "South America": ["South America"],
        "Oceania": ["Oceania"]
    };

    const data2023 = data.filter(d => d.Year === 2023 && Object.values(continentMap).flat().includes(d.Entity));
    const root = d3.hierarchy({
        children: data2023.map(d => ({ name: d.Entity, value: d["Annual CO₂ emissions (per capita)"] }))
    }).sum(d => d.value);

    const width = 960, height = 500;
    const svg = d3.select("#chart")
        .attr("width", width)
        .attr("height", height)
        .append("g");

    const treemap = d3.treemap().size([width, height]).padding(2);
    treemap(root);

    const color = d3.scaleOrdinal(d3.schemeCategory10).domain(data2023.map(d => d.Entity));

    const cell = svg.selectAll(".cell")
        .data(root.leaves())
        .enter().append("g")
        .attr("class", "cell")
        .attr("transform", d => `translate(${d.x0},${d.y0})`);

    cell.append("rect")
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("fill", d => color(d.data.name));

    cell.append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", "12px")
        .text(d => d.data.name);

    const tooltip = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
    cell.on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", .9);
        tooltip.html(`${d.data.name}: ${d.data.value.toFixed(2)} tonnes`)
            .style("left", (event.pageX + 5) + "px")
            .style("top", (event.pageY - 28) + "px");
    }).on("mouseout", () => tooltip.transition().duration(500).style("opacity", 0));
});