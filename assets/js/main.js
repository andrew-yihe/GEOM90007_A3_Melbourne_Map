mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3eWloZSIsImEiOiJja2V1cXVxd3UzMHQ0Mnhtc2Y0NTFjZHZuIn0.Blwfr3lh0aqpTnrLi64cKQ';

// Set bounds to Melbourne city
var bounds = [
[144.913192, -37.901159], // Southwest coordinates
[145.024027, -37.787036] // Northeast coordinates
];

//display a map
var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/andrewyihe/ckg610eq032g019o0175qy7u3', // style URL
      center: [144.959992, -37.818165], // starting position [lng, lat]
      zoom: 12.59, // starting zoom
      //maxBounds: bounds // Sets bounds as max
});


//Dropdown OnClick Event Function
function dropdownexpand() {
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('dashboardTitle').style.display = 'none';
      
}

function dropdownshrink() {
      document.getElementById('dashboard').style.display = 'none';
      document.getElementById('dashboardTitle').style.display = 'block';
      
}