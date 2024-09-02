## Overview
Plastic packaging has been heavily used in food industries for packaging since the 1960’s with the world seeing a huge jump in its plastic usage in the year 1970.
This project will investigate the environmental impact of this plastic packaging used in the food industry in Metro-Vancouver. It sheds light on the distribution 
and recycling rates of single-use plastics and what the consumer behaviour is in the industry. It will also investigate the industry efforts to transition into 
the use of sustainable products. Analysis will follow the trail of city waste management reports, consumer surveys and food service providers. This analysis aims 
to shed light on the current state of plastic usage in the lower Mainland and how it can shape up the future of packaging industry.

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
  - Business Number (Quantitative)
