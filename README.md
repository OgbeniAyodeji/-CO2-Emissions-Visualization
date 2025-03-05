# Exploring Per Capita CO₂ Emissions: Ten Interactive Visualizations with D3.js

## Overview
This project analyzes and visualizes per capita CO₂ emissions data from Our World in Data (downloaded March 05, 2025), spanning 1750–2023. It features **10 distinct D3.js visualizations**, each exploring different aspects of the dataset, from global trends to complex regional comparisons. The goal is to showcase data analysis and visualization skills while uncovering insights into global CO₂ emissions patterns.

## Dataset
- **Source**: Our World in Data, "Per capita CO₂ emissions" (Global Carbon Budget 2024, Population from various sources)
- **Columns**: `Entity`, `Code`, `Year`, `Annual CO₂ emissions (per capita)` (tonnes/person)
- **Scope**: 1750–2023, territorial emissions (excludes land-use change, international aviation/shipping)
- **File**: `data/co2_emissions_per_capita.csv`

## Project Structure
├── data/
│   └── co2_emissions_per_capita.csv
├── src/
│   ├── viz1_line_global/        # Global trend line chart
│   ├── viz2_multi_line/         # Multi-entity comparison
│   ├── viz3_bar_top10/          # Top 10 emitters 2023
│   ├── viz4_area_africa/        # Africa emissions trend
│   ├── viz5_scatter/            # Scatter plot across entities
│   ├── viz6_stacked_bar/        # Stacked regional trends
│   ├── viz7_pie/                # Top 5 emitters pie chart
│   ├── viz8_heatmap/            # Heatmap by region/decade
│   ├── viz9_force_directed/     # Force-directed top emitters
│   ├── viz10_treemap/           # Continental treemap 2023
│   └── styles.css               # Shared styling
├── README.md
└── results/
    └── analysis_summary.md      # Optional analysis output


## Visualizations
1. **Line Chart**: Global CO₂ emissions trend (1750–2023).
2. **Multi-Line Chart**: Compares World, Africa, and USA emissions.
3. **Bar Chart**: Top 10 per capita emitters in 2023.
4. **Area Chart**: Africa’s emissions trend (1884–2023).
5. **Scatter Plot**: Emissions vs. Year for multiple entities.
6. **Stacked Bar Chart**: Regional emissions (2014–2023).
7. **Pie Chart**: Share of top 5 emitters in 2023.
8. **Heatmap**: Emissions by region and decade (1950–2023).
9. **Force-Directed Graph**: Top 20 emitters in 2023, sized by emissions.
10. **Treemap**: Continental emissions breakdown (2023).

## Analysis Report
### Key Insights

* **Global Rise:** Emissions increased from 0.012 tonnes/person (1750) to 4.67 (2023), peaking at 4.85 (2011), with a 2020 dip (4.45) due to COVID-19.

* **Regional Gap:** Africa remains below 1.2 tonnes/person, while developed regions historically reached 10–20 tonnes/person.

* **Small Nation Effect:** Top 2023 emitters (e.g., Anguilla: 10.01 tonnes/person) are small nations with low populations, not high total emissions.

* **Shifting Trends:** Post-2000, Asia’s emissions rise (e.g., Vietnam: 1.96 to 3.34), North America stabilizes, and Africa stays flat.

* **Decadal Peaks:** North America/Europe peaked in the 1950s–1980s; Asia grew post-2000.

## Visualization Highlights

### Global Line Chart
![Global Line Chart](<images/Screenshot 2025-03-05 at 23-07-47 Global CO₂ Emissions Trend.png>)
Shows a steep rise post-1950, plateauing after 2010.

### Top 10 Bar Chart
![Top 10 Bar Chart](<images/Screenshot 2025-03-05 at 23-14-15 Top 10 CO₂ Emitters 2023.png>)
Highlights small nations like Anguilla dominating per capita emissions.

### Heatmap
![Heatmap](<images/Screenshot 2025-03-05 at 23-30-00 CO₂ Emissions Heatmap by Region and Decade.png>)
Reveals North America/Europe’s mid-century peaks vs. Asia’s recent growth.

## Conclusion
The dataset reveals a world where CO₂ emissions per capita have grown dramatically since the Industrial Revolution, with stark regional disparities persisting into 2023. Small nations top per capita lists due to population effects, while developing regions like Africa lag, and Asia emerges as a growing contributor. The visualizations highlight these trends effectively, from simple trends (Line Chart) to complex relational views (Force-Directed Graph). Recommendations focus on balancing development with sustainability, leveraging technology, and enhancing data analysis for deeper insights.



