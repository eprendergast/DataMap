// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";

console.log('index.js loaded');

const mapContainer = document.getElementById("mapContainer")

// Create map instance
var map = am4core.create(mapContainer, am4maps.MapChart);

// Set map definition (geoData defined in worldLow.js)
map.geodata = geoData;

// Set projection
map.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add some data
polygonSeries.data = [{
  "id": "US",
  "name": "United States",
  "value": 100,
  "fill": am4core.color("#F05C5C")
}, {
  "id": "FR",
  "name": "France",
  "value": 50,
  "fill": am4core.color("#5C5CFF")
}];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";

// Add line series
var lineSeries = map.series.push(new am4maps.MapLineSeries());
lineSeries.data = [{
  "multiGeoLine": [
    [
      { "latitude": 48.856614, "longitude": 2.352222 },
      { "latitude": 40.712775, "longitude": -74.005973 },
      { "latitude": 49.282729, "longitude": -123.120738 }
    ]
  ]
}];

// Create image series
var imageSeries = map.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#B27799");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
circle.tooltipText = "{title}";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [{
  "latitude": 48.856614,
  "longitude": 2.352222,
  "title": "Paris"
}, {
  "latitude": 40.712775,
  "longitude": -74.005973,
  "title": "New York"
}, {
  "latitude": 49.282729,
  "longitude": -123.120738,
  "title": "Vancouver"
}];

// Add zoom control
map.zoomControl = new am4maps.ZoomControl();

// Add and configure small map
map.smallMap = new am4maps.SmallMap();
map.smallMap.series.push(polygonSeries);