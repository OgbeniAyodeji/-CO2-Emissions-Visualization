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

### Step 1: Data Analysis

#### Tools
- **Python**: Use `pandas` for data manipulation and analysis.
- **Output**: A summary of insights saved as `results/analysis_summary.md`.

#### Analysis Script (`src/analysis.py`)
```python
import pandas as pd
import numpy as np

# Load the dataset
df = pd.read_csv('../data/co2_emissions_per_capita.csv')

# Basic exploration
print("Dataset Info:")
print(df.info())
print("\nMissing Values:")
print(df.isnull().sum())

# Convert 'Year' to integer (if not already)
df['Year'] = df['Year'].astype(int)

# 1. Global Trend Analysis
world_data = df[df['Entity'] == 'World']
global_trend = world_data.groupby('Year')['Annual CO₂ emissions (per capita)'].mean()

print("\nGlobal CO₂ Emissions Trend (1750–2023):")
print(global_trend.describe())

# 2. Regional Comparison (e.g., Africa vs. World)
africa_data = df[df['Entity'] == 'Africa']
comparison = pd.merge(world_data, africa_data, on='Year', suffixes=('_World', '_Africa'))
comparison['Difference'] = comparison['Annual CO₂ emissions (per_capita)_World'] - comparison['Annual CO₂ emissions (per_capita)_Africa']

print("\nAfrica vs. World (Average Difference):")
print(comparison['Difference'].mean())

# 3. Significant Changes (Year-over-Year % Change)
df['YoY_Change'] = df.groupby('Entity')['Annual CO₂ emissions (per capita)'].pct_change() * 100
significant_changes = df[df['YoY_Change'].abs() > 50]  # Threshold for "significant"
print("\nSignificant Year-over-Year Changes (>50%):")
print(significant_changes[['Entity', 'Year', 'Annual CO₂ emissions (per capita)', 'YoY_Change']].head())

# 4. Modern Insights (2000–2023)
modern_data = df[df['Year'] >= 2000]
top_emitters_2023 = modern_data[modern_data['Year'] == 2023].sort_values('Annual CO₂ emissions (per capita)', ascending=False).head(10)
print("\nTop 10 Emitters in 2023:")
print(top_emitters_2023[['Entity', 'Annual CO₂ emissions (per capita)']])

# Save analysis summary
with open('../results/analysis_summary.md', 'w') as f:
    f.write("# Analysis Summary\n\n")
    f.write("## Global Trend\n")
    f.write(f"- Mean global emissions (1750–2023): {global_trend.mean():.2f} tonnes/person\n")
    f.write(f"- Peak year: {global_trend.idxmax()} ({global_trend.max():.2f} tonnes/person)\n")
    f.write("\n## Africa vs. World\n")
    f.write(f"- Average difference: {comparison['Difference'].mean():.2f} tonnes/person\n")
    f.write("\n## Significant Changes\n")
    f.write(f"- Notable examples: {len(significant_changes)} instances of >50% change\n")
    f.write("\n## Top Emitters (2023)\n")
    f.write(top_emitters_2023[['Entity', 'Annual CO₂ emissions (per capita)']].to_markdown(index=False))

