function _1(md){return(
md`# IAT 355 Final Project
## by Abdul Aziz Hamoui`
)}

function _2(md){return(
md`## Overview
Plastic packaging has been heavily used in food industries for packaging since the 1960’s with the world seeing a huge jump in its plastic usage in the year 1970. This project will investigate the environmental impact of this plastic packaging used in the food industry in Metro-Vancouver. It sheds light on the distribution and recycling rates of single-use plastics and what the consumer behaviour is in the industry. It will also investigate the industry efforts to transition into the use of sustainable products. Analysis will follow the trail of city waste management reports, consumer surveys and food service providers. This analysis aims to shed light on the current state of plastic usage in the lower Mainland and how it can shape up the future of packaging industry.

&nbsp;
## Introduction
### Scope
This project is created to investigate the impact of plastic packaging in the food industry on the environment.

### Audiance
- General public: People who have an interest in sustainability. This audience can have varying level of literacy/experience but for the sake of this project will generalise them as laymen with moderate to low or non-academic understanding of sustainability. Requires simplicity and clarity in data presentation focusing on educational components.
- Environmental advocacy groups: Social activist groups that focus on raising awareness on sustainability and focus on plastic usage. They will have low to moderate understanding. Requires simplicity and clarity in data presentation focusing on educational components.

&nbsp;
## Domain Questions
- What is the relation between food industry business count and plastic waste disposal?
- What has been the trend of plastic wastage over the years in Metro Vancouver?
- Is there a correlation between co2 emissions and plastic wastage in the target area?
- Is the air quality in industrial areas affected by the functions of waste disposal facilities around them?

---

## Data
### Sources
- [CleanBC [2022]](https://www2.gov.bc.ca/assets/gov/environment/climate-change/action/cleanbc/2022-ccar/2022_climate_change_accountability_report.pdf)
- [QI Air [2024]](https://www.iqair.com/ca/air-quality-map/canada/british-columbia/vancouver-bc)
- [Metro-Van Reports and Documents Solid Waste [2015-2022]](https://metrovancouver.org/services/solid-waste/reports-resources)
- [Burnaby Recycling Reports [2022]](https://www.burnaby.ca/sites/default/files/acquiadam/2022-03/Solid-Waste-and-Recycling-Annual-Report.pdf)
- [Single-use plastic packaging in the Canadian food industry [2022]](https://www.nature.com/articles/s41599-021-00747-4)
- [Plastic Bags and Single-Use Items Bylaw [2021]](https://www.surrey.ca/services-payments/waste-collection/plastic-bags-and-single-use-items-bylaw#:~:text=A%20recent%20audit%20of%20waste,Takeout%20Containers%3A%2012.4%20million)

### Dimensions
**Merged Data** combines businesses and Environmental Impact data to create a new dataset that has all the combined fields, it also cleans the data to remove any "undefined" rows.

**Filtered Data** filters environmental impact data information based on the year selected in the checkbox

- **Environmental Impact Data**
  - Data before 2015 which was metro-van focused could not be found hence was estimated based on collected information from world plastic usage on [here](https://www.statista.com/statistics/282732/global-production-of-plastics-since-1950/)
  - Year (Nominal/Temporal)
  - Plastic Waste (Quantitative)
  - CO2 Emissions (Quantitative)
- **Location**
  - Area (Nominal)
  - Latitude (Quantitative)
  - Longitude (Quantitative)
- **Location Info**
  - Area (Nominal)
  - Info (Nominal)
  - QI Air (Quantitative)
- **Businesses**
  - Year (Year (Nominal/Temporal))
  - Business Number (Quantitative)`
)}

function _3(md){return(
md`---`
)}

function _4(md){return(
md`## Visualization Design
**Figure 1:** Line chart 
  - Target Question: What is the relation between food industry business count and plastic waste disposal?
  - Justification: hows how the relation between business numbers and plastic change over the years clearly showing how one increases the other does so, a positive relation. The exception will be 2019 which is where BC focused more on cleanBC initiative creating more sustainable method to dispose of wastage (from [BC Gov News](https://news.gov.bc.ca/releases/2019ENV0084-001516)).
  - Interaction: User can hover on points to view details of that line such as exact number and year.
    
**Figure 2:** Bar Chart with Checkboxes
  - Target Question: What has been the trend of plastic wastage since the year 2000 in Metro Vancouver?
  - Justification: Bar chart clearly shows the amount of plastic waste produce industrially each year in metro-van, which is 40% of total plastic usage in the world ([plasticOceans](https://plasticoceans.org/the-facts/#:~:text=Packaging%20is%20the%20largest%20end,working%20life”%20of%2015%20minutes.)). The use of colours also creates a differentiation between each year and allows for a simpler/quicker look understanding from the audience since the target is mostly laymen.
  - Interaction: Uses checkboxes to allow more complex analysis between a certain group of years depending on the user needs. The checked boxes are then used to filter the data that appears on the bar chart.

**Figure 3:** Scatter Plot & Bar Charts with Brushing
  - Target Question: Is there a correlation between co2 emissions and plastic wastage in the target area?
  - Justification: The Scatter plot is the go to when looking for correlation in a set of data as the points usual move in a certain direction if there is a relation. The bar charts are then used to show more focused information by dividing co2 emissions and plastic waste into different charts. This simplification is targeted to communicate more clearly with the audience.
  - Interaction: The brushing allows the user to select certain section for further analysis. Highlighting also allows for more details to be shown on demand allowing the user a more in depth view at each point.

**Figure 4:** Map and on Demand Details
  - Target Question: Is the air quality in industrial areas affected by the functions of waste disposal facilities around them?
  - Justification: Since the analysis is over a geographical area, it was necessary to provide at least one map for the user to be able to spatial understand the information provided. The circles allow for the Air quality index to be shown on a topographical surface allowing for a more accurate communication with the viewer.
  - Interaction: On demand details when clicked on circles. Shows the type of area that is and allows to create an analysis or at bare minimum an assumption between area types and air quality around them such as if they are industrial or residential.`
)}

function _5(md){return(
md`---`
)}

function _6(md){return(
md`## Food Industry Retailers`
)}

function _7(md){return(
md`#### Figure 1`
)}

function _8(VegaLite,mergedData){return(
VegaLite({
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {
    values: mergedData
  },
  title: {
    text: "Comparison of Plastic Waste and Business Numbers Over Years",
    subtitle: "Source: Metro-Vancouver Annual Waste Report",
    anchor: "start",
    subtitlePadding: 10,
    offset: 10
  },
  width: 700,
  height: 300,
  resolve: {
    scale: { y: "independent" }
  },
  encoding: {
    x: {
      field: "year",
      type: "ordinal",
      axis: { title: "Year" }
    }
  },
  layer: [
    {
      mark: { type: "line", point: true },
      encoding: {
        y: {
          field: "plasticWaste",
          type: "quantitative",
          axis: { title: "Plastic Waste (Tonnes)", orient: "left" },
          scale: { zero: false }
        },
        color: {
          value: "steelblue"
        },
        tooltip: [
          { field: "year", type: "ordinal", title: "Year" },
          { field: "plasticWaste", type: "quantitative", title: "Plastic Waste (Tonnes)" }
        ]
      }
    },
    {
      mark: { type: "line", point: true },
      encoding: {
        y: {
          field: "number",
          type: "quantitative",
          axis: { title: "Number of Businesses", orient: "right" },
          scale: { zero: false }
        },
        color: {
          value: "green"
        },
        tooltip: [
          { field: "year", type: "ordinal", title: "Year" },
          { field: "number", type: "quantitative", title: "Number of Businesses" }
        ]
      }
    }
  ]
})
)}

function _9(md){return(
md`
#### Figure 2`
)}

function _10(VegaLite,filteredData){return(
VegaLite({
  data: { values: filteredData },
  title: {
    text: "Plastic Waste Consumption 2000-2021",
    subtitle: "Source: Statista and BC Government Statistics",
    anchor: "start",
    subtitlePadding: 10,
    offset: 10
  },
  width: 725,
  height: 400,
  mark: "bar",
  encoding: {
    y: {
      field: "year",
      type: "nominal",
      axis: { title: "Year" },
      sort: "ascending"
    },
    x: {
      field: "plasticWaste",
      type: "quantitative",
      axis: { title: "Plastic Waste (Tonnes)" },
      scale: { domain: [0, 60000] } 
    },
    color: {
      field: "year",
      type: "nominal",
      scale: { scheme: "tableau20" },
      legend: null
    },
    tooltip: [
      { field: "year", type: "nominal", title: "Year" },
      { field: "plasticWaste", type: "quantitative", format: ",.2f", title: "Plastic Waste" }
    ]
  },
  layer: [
    {
      mark: { type: "bar" },
      encoding: {
        color: {
          field: "year",
          type: "nominal",
          scale: { scheme: "tableau20" }
        },
        tooltip: [
          { field: "year", type: "nominal", title: "Year" },
          { field: "plasticWaste", type: "quantitative", format: ",.2f", title: "Plastic Waste" }
        ]
      }
    },
    {
      mark: { type: "text", align: "left", dx: 10, dy: 0, baseline: "middle" },
    }
  ],
  config: {
    axis: { labelFontSize: 12, titleFontSize: 14 }
  }
})
)}

function _selectedYears(html,years,Event)
{
  const form = html`<form>
    <div><strong>Select Years:</strong></div>
    <div style="margin-bottom: 10px;">
      <label><input type="checkbox" name="all" value="all"> Select All </label>
      <label><input type="checkbox" name="none" value="none"> Select None</label>
    </div>
    <div style="column-count: 1; margin-top: 10px; margin-right: 520px">
      ${years.map(year => html`
        <label><input type="checkbox" name="year" value="${year}" checked>${year}</label>
      `)}
    </div>
   <div style="margin-top: 10px"><em>Select different years to view</em></div>
  </form>`
  
  const yearInputs = Array.from(form.querySelectorAll('input[name="year"]'));
  const allInput = form.querySelector('input[name="all"]');
  const noneInput = form.querySelector('input[name="none"]');
  allInput.checked = true;

  form.onchange = (event) => {
    if (event.target.name === "all") {
      yearInputs.forEach(input => input.checked = allInput.checked);
      noneInput.checked = false;
    } else if (event.target.name === "none") {
      yearInputs.forEach(input => input.checked = false);
      allInput.checked = false;
    } else if (event.target.name === "year") {
      allInput.checked = yearInputs.every(input => input.checked);
      noneInput.checked = yearInputs.every(input => !input.checked);
    }
    form.dispatchEvent(new Event('input'));
  };

  function getValues() {
    return yearInputs.filter(input => input.checked).map(input => input.value);
  }

  Object.defineProperty(form, 'value', {
    get: getValues,
    configurable: true
  });

  return form;
}


function _12(md){return(
md`&nbsp;
## Affect on Environment
&nbsp;
#### Figure 3`
)}

function _13(md){return(
md`*Highlight section to show further data in bar chart below*`
)}

function _14(createScatterPlotWithBrushing,environmentalImpactData){return(
createScatterPlotWithBrushing(environmentalImpactData)
)}

function _15(htl){return(
htl.html`<div style="display: flex; align-items: center;">
  <svg id="BarChartSvg1" width="450" height="250"></svg>
  <svg id="BarChartSvg2" width="450" height="250"></svg>
</div>\``
)}

function _16(md){return(
md`
#### Figure 4`
)}

function _17(md){return(
md`&nbsp;
Air Quality Based on Location`
)}

function* _map(htl,L,locations,infoLookup)
{
  const container = yield htl.html`<div style="height: 500px;"></div>`;
  const map = L.map(container).setView([49.1769405, -122.8285900], 12);
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Iterates over a location objects.
  locations.forEach(location => {
    //matches items using area as common id
    const info = infoLookup[location.area];
    if (info) {
      //draws circle for each location and binds popup
      L.circle([location.lat, location.lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.9,
        radius: 300
      }).addTo(map)
      .bindPopup(`${info.info} - Air Quality Index: ${info.QIAir}`);

      //draws marker for each location and binds popup
      L.marker([location.lat-0.002, location.lng], {
        icon: L.divIcon({
          html: `<div style="text-align: center; font-size: 12px; color: #FFF;">${info.QIAir}</div>`,
          className: 'transparent',
          iconSize: [100, 40]
        })
      }).addTo(map).bindPopup(`${info.info} - Air Quality Index: ${info.QIAir}`);
    }
  });

  return map;
}


function _19(md){return(
md`---`
)}

function _20(md){return(
md`## Further Work

### End Goal
The purpose of this was to show the relation between plastic packaging by food stores and its affect on the air quality through co2 emissions. However the lack of data regarding individual store plastic consumption and the waste disposal facilities they send their recycling to made it difficult to create such an analysis. For more accurate data and a scientific audience, I would also have liked to check if there were other factors affecting the air quality around recycling facilities.

### What didn't Work?
After testing the visualizations on a friend, two things popped up, the first being a legend would have been helpful in the figure 1 (line graph) to know which line represented plastic wastage and which represented business count instead of adding that as a tool tip. The other thing is not everyone understands tonnes or units of measurements used here, for a wider audience there could be an addition of a list to choose units. Finally my own realization is the map could have used more data points to more effectively and efficiently communicate the air pollution around waste facilities.

### Future Improvements
Future work could look at getting more data specific to the food industry plastic wastage, although there might seem to be very little information on this in BC at least so a field research might be more productive. A survey could also be conducted with residents who live around restaurants using plastic packaging and check how they feel that has impacted the cleanliness of that city (more plastic lying around?)

In terms of visualizations I would add more legends to indicate what that colours stand for instead of expecting the user to intuitively find out. More visualizations could also be used to find a more direct relation between food industry and plastic wastage through a new set of data.`
)}

function _21(md){return(
md`&nbsp;
## Conclusion
Following this analysis on the use of plastic packaging in food industry, we can see a correlation between the increase in food related shops and the increase in plastic waste, which was cited to total 40% of all plastic waste. This shows that the increasing number of plastic waste could have been as a result of the increasing food stores however the recent down turn since 2019 is as a result of the enforced regulation in bc against one time plastic usage. We also see that this results in an increase in CO2 emissions which affects air quality especially around areas of recycling facilities. Concluding that food industry plays a huge role in environment pollution and more effort could be put into regulating their practices to become more sustainable.`
)}

function _22(md){return(
md`&nbsp;
## References

- [CleanBC [2022]](https://www2.gov.bc.ca/assets/gov/environment/climate-change/action/cleanbc/2022-ccar/2022_climate_change_accountability_report.pdf)
- [QI Air [2024]](https://www.iqair.com/ca/air-quality-map/canada/british-columbia/vancouver-bc)
- [Metro-Van Reports and Documents Solid Waste [2015-2022]](https://metrovancouver.org/services/solid-waste/reports-resources)
- [Burnaby Recycling Reports [2022]](https://www.burnaby.ca/sites/default/files/acquiadam/2022-03/Solid-Waste-and-Recycling-Annual-Report.pdf)
- [Single-use plastic packaging in the Canadian food industry [2022]](https://www.nature.com/articles/s41599-021-00747-4)
- [Plastic Bags and Single-Use Items Bylaw [2021]](https://www.surrey.ca/services-payments/waste-collection/plastic-bags-and-single-use-items-bylaw#:~:text=A%20recent%20audit%20of%20waste,Takeout%20Containers%3A%2012.4%20million)
- [BC Gov News](https://news.gov.bc.ca/releases/2019ENV0084-001516)
- [plasticOceans](https://plasticoceans.org/the-facts/#:~:text=Packaging%20is%20the%20largest%20end,working%20life”%20of%2015%20minutes.)
- [Statista Annual Plastic Production](https://www.statista.com/statistics/282732/global-production-of-plastics-since-1950/)
- [Statista Annual Co2 Production](https://www.statista.com/statistics/276629/global-co2-emissions/#:~:text=Global%20carbon%20dioxide%20emissions%20from,by%20more%20than%2060%20percent.)`
)}

function _23(md){return(
md`---`
)}

function _24(md){return(
md`
### Code Blocks`
)}

function _25(md){return(
md`#### Imports`
)}

function _d3(require){return(
require("d3@6")
)}

function _VegaLite(require){return(
require("vega-embed@5")
)}

function _28(md){return(
md`&nbsp;
#### Data Sets`
)}

function _data(FileAttachment){return(
FileAttachment("file1@1.csv")
)}

function _dataFile(data){return(
data.text()
)}

async function _environmentalImpactData(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("file1@1.csv").text(), d3.autoType)
)}

function _years(){return(
[
  "2000", "2001", "2002", "2003", "2004",
  "2005", "2006", "2007", "2008", "2009",
  "2010", "2011", "2012", "2013", "2014",
  "2015", "2016", "2017", "2018", "2019",
  "2020", "2021"
]
)}

function _locations(){return(
[
    {area: 'Burnaby1', lat: 49.2194421, lng: -122.8958113},
    {area: 'Burnaby2', lat: 49.2131371, lng: -122.9021399}, 
    {area: 'Burnaby3', lat: 49.2091391, lng: -122.9041848}, 
    {area: 'Burnaby4', lat: 49.2273657, lng: -122.8788645},
    {area: 'Burnaby5', lat: 49.2289364, lng: -122.8702815}, 
    {area: 'Surrey1', lat: 49.1769405, lng: -122.8484900},  
    {area: 'Surrey2', lat: 49.1375120, lng: -122.7150910} 
  ]
)}

function _locationInfo(){return(
[
    {area: 'Burnaby1', info: 'residential/Shopping Area', QIAir: '5'},
    {area: 'Burnaby2', info: 'United Boulevard Recycling', QIAir: '26'}, 
    {area: 'Burnaby3', info: 'residential/Shopping Area', QIAir: '1'}, 
    {area: 'Burnaby4', info: 'Urban Impact Recycling', QIAir: '25'},
    {area: 'Burnaby5', info: 'residential/Shopping Area', QIAir: '8'}, 
    {area: 'Surrey1', info: 'residential/Shopping Area', QIAir: '5'},  
    {area: 'Surrey2', info: 'Surrey Recycling Facility', QIAir: '29'} 
  ]
)}

function _infoLookup(locationInfo){return(
locationInfo.reduce((acc, curr) => {
  acc[curr.area] = curr;
  return acc;
}, {})
)}

function _businesses(){return(
[
    {year: 2017, number: 2893},
    {year: 2018, number: 2917}, 
    {year: 2019, number: 2997}, 
    {year: 2020, number: 3179},
    {year: 2021, number: 3200} 
  ]
)}

function _37(md){return(
md`&nbsp;
#### Functions and Data Cleaning`
)}

function _plasticWasteOverTime(environmentalImpactData){return(
environmentalImpactData.map(d => ({x: d.year, y: d.plasticWaste}))
)}

function _mergedData(environmentalImpactData,businesses){return(
environmentalImpactData.map(env => {
  const businessMatch = businesses.find(b => b.year === env.year);
  return {
    ...env,
    number: businessMatch ? businessMatch.number : undefined
  };
}).filter(item => item.number !== undefined)
)}

function _filteredData(environmentalImpactData,selectedYears){return(
environmentalImpactData.filter(d => selectedYears.includes(String(d.year)))
)}

function _createScatterPlotWithBrushing(d3,updateBarChart,updateBarChart2){return(
function createScatterPlotWithBrushing(data) {

  const margin = { top: 20, right: 20, bottom: 70, left: 70 },
        width = 900 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

  const svg = d3.create('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

  const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain([40, d3.max(data, d => d.co2Emissions)+1])
    .range([0, width]);

  const y = d3.scaleLinear()
      .domain([10000, d3.max(data, d => d.plasticWaste) + 5000])
      .range([height, 0]);

  g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.format('d'))
            .tickValues(d3.range(40, d3.max(data, d => d.co2Emissions) + 1)));
  g.append('g').call(d3.axisLeft(y));

  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2 + margin.left)
      .attr("y", height + margin.top + 40)
      .text("BC GHG Emissions (MtCO2e/year)");

  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("y", 20)
      .attr("x", -(height / 2) - margin.top)
      .text("Plastic Waste (Tonnes)");

  const brush = d3.brushX()
      .extent([[0, 0], [width, height]])
      .on("end", brushed);
  
  g.append("g")
      .attr("class", "brush")
      .call(brush);
  
  const tooltip = d3.select("body").append("div")
      .style("position", "absolute")
      .style("padding", "10px")
      .style("background", "white")
      .style("border", "1px solid #69b3a2")
      .style("border-radius", "5px")
      .style("text-align", "center")
      .style("display", "none")
      .style("pointer-events", "none");

  g.selectAll(".dot")
      .data(data)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", d => x(d.co2Emissions))
        .attr("cy", d => y(d.plasticWaste))
        .attr("r", 5)
        .style("fill", "#69b3a2")
    
        .on("mouseover", function(event, d) {
          tooltip.style("display", "block")
                 .html(`Year: ${d.year}<br>Plastic Waste: ${d.plasticWaste} tonnes`)
                 .style("left", `${event.pageX + 10}px`)
                 .style("top", `${event.pageY + 10}px`);
        })
    
        .on("mouseout", function() {
          tooltip.style("display", "none");
        });

   function brushed(event) {
      const selection = event.selection;
      if (selection) {
        const [x0, x1] = selection.map(x.invert);
        const filteredData = data.filter(d => d.co2Emissions >= x0 && d.co2Emissions <= x1);
        updateBarChart(filteredData);
        updateBarChart2(filteredData);
      }
    }
  
    return svg.node();
}
)}

function _updateBarChart(d3){return(
function updateBarChart(data) {
  const svg = d3.select("#BarChartSvg1");
  const margin = { top: 20, right: 20, bottom: 50, left: 50 },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom -10;

  svg.selectAll("*").remove();
  
  const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
      .domain(data.map(d => d.year))
      .range([0, width])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.co2Emissions) + 5])  // Adjusted domain to start at 0
      .range([height, 0]);

  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("text")
    .attr("x", width / 2 + margin.left)
    .attr("y", height + margin.top + 50)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Table 1: CO2 Emissions");

  g.append("g").call(d3.axisLeft(y));

  const color = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(data.map(d => d.year));

   const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("text-align", "center")
      .style("width", "160px")
      .style("height", "auto")
      .style("padding", "10px")
      .style("font", "12px sans-serif")
      .style("background", "white")
      .style("border", "1px solid black")
      .style("border-radius", "8px")
      .style("pointer-events", "none")
      .style("opacity", 0);

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.year))
    .attr("y", d => y(d.co2Emissions))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.co2Emissions))
    .attr("fill", d => color(d.year))
    .on("mouseover", function(event, d) {
        tooltip.transition()
               .duration(200)
               .style("opacity", .9);
        tooltip.html(`Year: ${d.year}<br>CO2 Emissions: ${d.co2Emissions} kt`)
               .style("left", (event.pageX + 5) + "px")
               .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        tooltip.transition()
               .duration(500)
               .style("opacity", 0);
    });
}
)}

function _updateBarChart2(d3){return(
function updateBarChart2(data) {
  const svg = d3.select("#BarChartSvg2");
  const margin = { top: 20, right: 20, bottom: 50, left: 50 },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom - 10;
  
  svg.selectAll("*").remove();
  
  const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
      .domain(data.map(d => d.year))
      .rangeRound([0, width])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.plasticWaste) + 5000]) // Adjusted for a consistent domain start at 0
      .rangeRound([height, 0]);

  const color = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(data.map(d => d.year));

  svg.append("text")
    .attr("x", width / 2 + margin.left)
    .attr("y", height + margin.top + 50)
    .attr("text-anchor", "middle") 
    .style("font-size", "14px")
    .text("Table 2: Plastic Wastage");

  const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("text-align", "center")
      .style("width", "160px")
      .style("height", "auto")
      .style("padding", "10px")
      .style("font", "12px sans-serif")
      .style("background", "white")
      .style("border", "1px solid black")
      .style("border-radius", "8px")
      .style("pointer-events", "none")
      .style("opacity", 0);

  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .style("font-size", "9px");

  g.append("g").call(d3.axisLeft(y));

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.year))
    .attr("y", d => y(d.plasticWaste))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.plasticWaste))
    .attr("fill", d => color(d.year))
    .on("mouseover", function(event, d) {
      tooltip.transition()
             .duration(200)
             .style("opacity", .9);
      tooltip.html(`Year: ${d.year}<br>Plastic Waste: ${d.plasticWaste} tonnes`)
             .style("left", (event.pageX + 10) + "px")
             .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function() {
      tooltip.transition()
             .duration(500)
             .style("opacity", 0);
    });
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["file1@1.csv", {url: new URL("./files/6880f7e4ebe11e250dac7fceddb3fd8d7ccb0965a558f5c481fc46efcc7b3330840d2ab59050dda8e8ea89e828f1a34785c8f9fd1fd2d4133260c001680ad4a4.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["VegaLite","mergedData"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["VegaLite","filteredData"], _10);
  main.variable(observer("viewof selectedYears")).define("viewof selectedYears", ["html","years","Event"], _selectedYears);
  main.variable(observer("selectedYears")).define("selectedYears", ["Generators", "viewof selectedYears"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer()).define(["createScatterPlotWithBrushing","environmentalImpactData"], _14);
  main.variable(observer()).define(["htl"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer("map")).define("map", ["htl","L","locations","infoLookup"], _map);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("VegaLite")).define("VegaLite", ["require"], _VegaLite);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("dataFile")).define("dataFile", ["data"], _dataFile);
  main.variable(observer("environmentalImpactData")).define("environmentalImpactData", ["d3","FileAttachment"], _environmentalImpactData);
  main.variable(observer("years")).define("years", _years);
  main.variable(observer("locations")).define("locations", _locations);
  main.variable(observer("locationInfo")).define("locationInfo", _locationInfo);
  main.variable(observer("infoLookup")).define("infoLookup", ["locationInfo"], _infoLookup);
  main.variable(observer("businesses")).define("businesses", _businesses);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer("plasticWasteOverTime")).define("plasticWasteOverTime", ["environmentalImpactData"], _plasticWasteOverTime);
  main.variable(observer("mergedData")).define("mergedData", ["environmentalImpactData","businesses"], _mergedData);
  main.variable(observer("filteredData")).define("filteredData", ["environmentalImpactData","selectedYears"], _filteredData);
  main.variable(observer("createScatterPlotWithBrushing")).define("createScatterPlotWithBrushing", ["d3","updateBarChart","updateBarChart2"], _createScatterPlotWithBrushing);
  main.variable(observer("updateBarChart")).define("updateBarChart", ["d3"], _updateBarChart);
  main.variable(observer("updateBarChart2")).define("updateBarChart2", ["d3"], _updateBarChart2);
  return main;
}
