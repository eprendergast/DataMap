console.log('index.js loaded');

// am4maps.*

const mapContainer = document.getElementById('world-map'); 

document.addEventListener( 'DOMContentLoaded', renderMap() )

function renderMap(){
    // Create map instance
    const map = am4core.createFromConfig();
    
    // Set map definition
    map.geodata = am4geodata_worldLow;

    // Set projection (default: Miller)
    map.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = new am4maps.MapPolygonSeries();
    map.series.push(polygonSeries);

    // Make map load polygon data from GeoJSON
    polygonSeries.useGeodata = true;

    // Append map to world map div 

}



const testConfig = am4core.createFromConfig();
const config = ""; // 	A JavaScript object representing hierarchical structure of object properties and their respective values.
// A target HTML element to create the chart in.
const chart_type_class = am4maps.MapChart; // A reference to a chart type class, e.g. am4maps.MapChart


function loadMap(config, container, chart_type_class) {
    am4core.createFromConfig(config, container, chart_type_class)
}

