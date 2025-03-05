# Global Per Capita CO₂ Emissions Visualization

## Overview
This project explores per capita CO₂ emissions data from Our World in Data (downloaded March 05, 2025), covering 1750–2023. The analysis identifies trends, regional differences, and significant changes over time, visualized interactively using D3.js.

## Dataset
- **Source**: Our World in Data, "Per capita CO₂ emissions" (Global Carbon Budget 2024, Population data from various sources)
- **Columns**: Entity, Code, Year, Annual CO₂ emissions (per capita) in tonnes per person
- **Date Range**: 1750–2023
- **Notes**: Territorial emissions, excludes land-use change, international aviation/shipping not included in country totals.

## Analysis Goals
1. **Trend Analysis**: Examine global and regional CO₂ emissions trends over time.
2. **Comparative Analysis**: Compare emissions across countries/regions (e.g., Afghanistan, Africa, World).
3. **Significant Changes**: Identify years with notable increases or decreases.
4. **Modern Insights**: Focus on recent data (e.g., 2000–2023) for actionable insights.

## Visualization
- **Tool**: D3.js
- **Type**: Interactive line chart with tooltip
- **Features**:
  - Multi-line display for selected entities (e.g., World, Africa, Afghanistan, etc.)
  - Zoomable time axis
  - Hover tooltips showing emissions values
  - Color-coded lines for entities
---
