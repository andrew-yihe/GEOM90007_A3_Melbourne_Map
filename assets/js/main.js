mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3eWloZSIsImEiOiJja2V1cXVxd3UzMHQ0Mnhtc2Y0NTFjZHZuIn0.Blwfr3lh0aqpTnrLi64cKQ';

var bounds = [
  [144.866580, -37.846860],
  [145.045680, -37.779580]
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/andrewyihe/ckg610eq032g019o0175qy7u3/draft',
  center: [144.959992, -37.818165],
  zoom: 14,
  maxBounds: bounds
});


//open dashboard of 'a day in the city of melbourne'
function dropdownexpand() {
      $('#dashboard').toggleClass('active');
      $('#title').toggleClass('active', 6000, "easeOutSine");
      $('#TitleArrowDownBox').toggleClass('active');
      $('#TitleArrowDown').toggleClass('active');
}


//show or hide food icon
function ShowFood() {

  let opacity = map.getPaintProperty('top-rated-eateries-web-17fyk9', 'icon-opacity');
  if (opacity == 1) { 
    map.setPaintProperty('top-rated-eateries-web-17fyk9', 'icon-opacity', 0);
    setTimeout(() => {map.setLayoutProperty('top-rated-eateries-web-17fyk9', 'visibility', 'none');}, 500);
    this.class = '';
    $('#food').addClass('deselect');
  } else { 
    this.class = 'grid-item';
    map.setPaintProperty('top-rated-eateries-web-17fyk9', 'icon-opacity', 1);
    $('#food').removeClass('deselect');
    map.setLayoutProperty('top-rated-eateries-web-17fyk9', 'visibility', 'visible');
  }

}
//show or hide sight icon
function ShowSight() {


      let opacity = map.getPaintProperty('sights-web-5ip46g', 'icon-opacity');
      if (opacity == 1) {
            map.setPaintProperty('sights-web-5ip46g', 'icon-opacity', 0);
            setTimeout(() => {map.setLayoutProperty('sights-web-5ip46g', 'visibility', 'none');}, 500);
            this.class = '';
            $('#sight').addClass('deselect');
      } else {
            this.class = 'grid-item';
            map.setPaintProperty('sights-web-5ip46g', 'icon-opacity', 1);
            $('#sight').removeClass('deselect');
            map.setLayoutProperty('sights-web-5ip46g', 'visibility', 'visible');
      }

}
//show or hide shopping icon
function ShowShopping() {


      let opacity = map.getPaintProperty('shopping-web-8fj1lg', 'icon-opacity');
      if (opacity == 1) {
            map.setPaintProperty('shopping-web-8fj1lg', 'icon-opacity', 0);
            setTimeout(() => {map.setLayoutProperty('shopping-web-8fj1lg', 'visibility', 'none');}, 500);
            this.class = '';
            $('#shopping').addClass('deselect');
      } else {
            this.class = 'grid-item';
            map.setPaintProperty('shopping-web-8fj1lg', 'icon-opacity', 1);
            $('#shopping').removeClass('deselect');
            map.setLayoutProperty('shopping-web-8fj1lg', 'visibility', 'visible');
      }

}
//show or hide Exercise icon
function ShowExercise() {


      let opacity = map.getPaintProperty('exercise-web-10za7m', 'icon-opacity');
      if (opacity == 1) {
            map.setPaintProperty('exercise-web-10za7m', 'icon-opacity', 0);
            setTimeout(() => {map.setLayoutProperty('exercise-web-10za7m', 'visibility', 'none');}, 500);
            this.class = '';
            $('#exercise').addClass('deselect');
      } else {
            this.class = 'grid-item';
            map.setPaintProperty('exercise-web-10za7m', 'icon-opacity', 1);
            $('#exercise').removeClass('deselect');
            map.setLayoutProperty('exercise-web-10za7m', 'visibility', 'visible');
      }

}
//show or hide Nightlife icon
function ShowNightlife() {


      let opacity = map.getPaintProperty('nightlife-web-0n7sjl', 'icon-opacity');
      if (opacity == 1) {
            map.setPaintProperty('nightlife-web-0n7sjl', 'icon-opacity', 0);
            setTimeout(() => {map.setLayoutProperty('nightlife-web-0n7sjl', 'visibility', 'none');}, 500);
            this.class = '';
            $('#nightlife').addClass('deselect');
      } else {
            this.class = 'grid-item';
            map.setPaintProperty('nightlife-web-0n7sjl', 'icon-opacity', 1);
            $('#nightlife').removeClass('deselect');
            map.setLayoutProperty('nightlife-web-0n7sjl', 'visibility', 'visible');
      }

}
//show or hide Activity icon
function ShowActivity() {


      let opacity = map.getPaintProperty('activity-web-3bhv6c', 'icon-opacity');
      if (opacity == 1) {
            map.setPaintProperty('activity-web-3bhv6c', 'icon-opacity', 0);
            setTimeout(() => {map.setLayoutProperty('activity-web-3bhv6c', 'visibility', 'none');}, 500);
            this.class = '';
            $('#activity').addClass('deselect');
      } else {
            this.class = 'grid-item';
            map.setPaintProperty('activity-web-3bhv6c', 'icon-opacity', 1);
            $('#activity').removeClass('deselect');
            map.setLayoutProperty('activity-web-3bhv6c', 'visibility', 'visible');
      }

}

//--------Switch time functions---------------//

function ShowAllday() {

      map.setFilter('sights-web-5ip46g', null);
      map.setFilter('shopping-web-8fj1lg', null);
      map.setFilter('top-rated-eateries-web-17fyk9', null);
      map.setFilter('exercise-web-10za7m', null);
      map.setFilter('nightlife-web-0n7sjl', null);
      map.setFilter('activity-web-3bhv6c', null);
      
      $("#all").css("display", "block");
      $("#allleft").css("display", "block");
      $("#allright").css("display", "block");
      
      $("#night").css("display", "none");
      $("#nleft").css("display", "none");
      $("#nright").css("display", "none");

      $("#morning").css("display", "none");
      $("#mleft").css("display", "none");
      $("#mright").css("display", "none");
      
      $("#dashboard").css("background-color", "rgba(239, 240, 240, 0.8)");
      
      map.setPaintProperty('land', 'background-color', '#eff0f0');
      map.setPaintProperty('landuse', 'fill-color', '#e1e5e5');
      map.setPaintProperty('road-simple', 'line-color', '#ffffff');
      map.setPaintProperty('water', 'fill-color', '#d2d5d5');
      
      map.setPaintProperty('building', 'fill-color', '#ebebeb');

}

function ShowMorning() {

      map.setFilter('sights-web-5ip46g', ['==', ['get', 'Morning'], 'y']);
      map.setFilter('shopping-web-8fj1lg', ['==', ['get', 'Morning'], 'y']);
      map.setFilter('top-rated-eateries-web-17fyk9', ['==', ['get', 'Morning'], 'y']);
      map.setFilter('exercise-web-10za7m', ['==', ['get', 'Morning'], 'y']);
      map.setFilter('nightlife-web-0n7sjl', ['==', ['get', 'Morning'], 'y']);
      map.setFilter('activity-web-3bhv6c', ['==', ['get', 'Morning'], 'y']);

      $("#morning").css("display", "block");
      $("#mleft").css("display", "block");
      $("#mright").css("display", "block");
      
      $("#all").css("display", "none");
      $("#allleft").css("display", "none");
      $("#allright").css("display", "none");

      
      $("#afternoon").css("display", "none");
      $("#aleft").css("display", "none");
      $("#aright").css("display", "none");
      
      $("#dashboard").css("background-color", "rgba(255, 255, 255, 0.8)");
      
      map.setPaintProperty('land', 'background-color', '#ffffff');
      map.setPaintProperty('landuse', 'fill-color', '#dde9dd');
      map.setPaintProperty('road-simple', 'line-color', '#f1f4f1');
      map.setPaintProperty('water', 'fill-color', '#aecbcb');
      
      map.setPaintProperty('building', 'fill-color', '#ebebeb');
}

function ShowAfternoon() {

      map.setFilter('sights-web-5ip46g', ['==', ['get', 'Afternoon'], 'y']);
      map.setFilter('shopping-web-8fj1lg', ['==', ['get', 'Afternoon'], 'y']);
      map.setFilter('top-rated-eateries-web-17fyk9', ['==', ['get', 'Afternoon'], 'y']);
      map.setFilter('exercise-web-10za7m', ['==', ['get', 'Afternoon'], 'y']);
      map.setFilter('nightlife-web-0n7sjl', ['==', ['get', 'Afternoon'], 'y']);
      map.setFilter('activity-web-3bhv6c', ['==', ['get', 'Afternoon'], 'y']);
      
      $("#afternoon").css("display", "block");
      $("#aleft").css("display", "block");
      $("#aright").css("display", "block");
      
      $("#morning").css("display", "none");
      $("#mleft").css("display", "none");
      $("#mright").css("display", "none");
      
      $("#evening").css("display", "none");
      $("#eleft").css("display", "none");
      $("#eright").css("display", "none");
      
      $("#dashboard").css("background-color", "rgba(244, 238, 225, 0.8)");
      
      map.setPaintProperty('land', 'background-color', '#f4eee1');
      map.setPaintProperty('landuse', 'fill-color', '#c8dd98');
      map.setPaintProperty('road-simple', 'line-color', '#ffffff');
      map.setPaintProperty('water', 'fill-color', '#c8e1f4');
      
      map.setPaintProperty('building', 'fill-color', '#e9ddc3');

}

function ShowEvening() {

      map.setFilter('sights-web-5ip46g', ['==', ['get', 'Evening'], 'y']);
      map.setFilter('shopping-web-8fj1lg', ['==', ['get', 'Evening'], 'y']);
      map.setFilter('top-rated-eateries-web-17fyk9', ['==', ['get', 'Evening'], 'y']);
      map.setFilter('exercise-web-10za7m', ['==', ['get', 'Evening'], 'y']);
      map.setFilter('nightlife-web-0n7sjl', ['==', ['get', 'Evening'], 'y']);
      map.setFilter('activity-web-3bhv6c', ['==', ['get', 'Evening'], 'y']);
      
      $("#evening").css("display", "block");
      $("#eleft").css("display", "block");
      $("#eright").css("display", "block");
      
      $("#afternoon").css("display", "none");
      $("#aleft").css("display", "none");
      $("#aright").css("display", "none");
      
      $("#night").css("display", "none");
      $("#nleft").css("display", "none");
      $("#nright").css("display", "none");
      
      $("#dashboard").css("background-color", "rgba(82, 82, 82, 0.9)");
      
      map.setPaintProperty('land', 'background-color', '#3b3b3b');
      map.setPaintProperty('landuse', 'fill-color', '#495553');
      map.setPaintProperty('road-simple', 'line-color', '#4b4b4b');
      map.setPaintProperty('water', 'fill-color', '#081217');
      
      map.setPaintProperty('building', 'fill-color', '#292929');


}

function ShowNight() {

      map.setFilter('sights-web-5ip46g', ['==', ['get', 'Night'], 'y']);
      map.setFilter('shopping-web-8fj1lg', ['==', ['get', 'Night'], 'y']);
      map.setFilter('top-rated-eateries-web-17fyk9', ['==', ['get', 'Night'], 'y']);
      map.setFilter('exercise-web-10za7m', ['==', ['get', 'Night'], 'y']);
      map.setFilter('nightlife-web-0n7sjl', ['==', ['get', 'Night'], 'y']);
      map.setFilter('activity-web-3bhv6c', ['==', ['get', 'Night'], 'y']);
      
      $("#night").css("display", "block");
      $("#nleft").css("display", "block");
      $("#nright").css("display", "block");
      
      $("#evening").css("display", "none");
      $("#eleft").css("display", "none");
      $("#eright").css("display", "none");
      
      $("#all").css("display", "none");
      $("#allleft").css("display", "none");
      $("#allright").css("display", "none");
      
      $("#dashboard").css("background-color", "rgba(49, 49, 94, 0.9)");
      
      map.setPaintProperty('land', 'background-color', '#1a1a33');
      map.setPaintProperty('landuse', 'fill-color', '#E81F81');
      map.setPaintProperty('road-simple', 'line-color', '#000000');
      map.setPaintProperty('water', 'fill-color', '#293BA2');
      
      map.setPaintProperty('building', 'fill-color', '#0E0E1B');

}

//--------end Switch time functions---------------//


//--------Load map functions---------------//

map.on('load', function () {
      

      map.setPaintProperty('top-rated-eateries-web-17fyk9', 'icon-opacity', 1);
      map.setPaintProperty('sights-web-5ip46g', 'icon-opacity', 1);
      map.setPaintProperty('shopping-web-8fj1lg', 'icon-opacity', 1);
      map.setPaintProperty('exercise-web-10za7m', 'icon-opacity', 1);
      map.setPaintProperty('nightlife-web-0n7sjl', 'icon-opacity', 1);
      map.setPaintProperty('activity-web-3bhv6c', 'icon-opacity', 1);
      
      
      //Center map when click on POI

      map.on('click', 'top-rated-eateries-web-17fyk9', function (e) {
            map.flyTo({
                  center: e.features[0].geometry.coordinates
            });
      });
      
      map.on('click', 'sights-web-5ip46g', function (e) {
            map.flyTo({
                  center: e.features[0].geometry.coordinates
            });
      });
      
      map.on('click', 'shopping-web-8fj1lg', function (e) {
            map.flyTo({
                  center: e.features[0].geometry.coordinates
            });
      });
      
      map.on('click', 'exercise-web-10za7m', function (e) {
            map.flyTo({
                  center: e.features[0].geometry.coordinates
            });
      });
      
      map.on('click', 'nightlife-web-0n7sjl', function (e) {
            map.flyTo({
                  center: e.features[0].geometry.coordinates
            });
      });
      
      map.on('click', 'activity-web-3bhv6c', function (e) {
            map.flyTo({
                  center: e.features[0].geometry.coordinates
            });
      });

      //popup of shopping
      map.on('click', 'shopping-web-8fj1lg', function (e) {
            new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML('<a href ="' + e.features[0].properties.URL + '"class=popupname>' + e.features[0].properties.feature_name + '</a>  <p class=popupdesc>' + e.features[0].properties.Description + '</p>')
                  .addTo(map);
      });

      //popup of food
      map.on('click', 'top-rated-eateries-web-17fyk9', function (e) {
            new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML('<a href ="' + e.features[0].properties.URL + '"class=popupname>' + e.features[0].properties.feature_name + '</a>  <p class=popupdesc>' + e.features[0].properties.Description + '</p>')
                  .addTo(map);
      });

      //popup of sight
      map.on('click', 'sights-web-5ip46g', function (e) {
            new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML('<a href ="' + e.features[0].properties.URL + '"class=popupname>' + e.features[0].properties.feature_name + '</a>  <p class=popupdesc>' + e.features[0].properties.Description + '</p>')
                  .addTo(map);
      });

      //popup of exercise
      map.on('click', 'exercise-web-10za7m', function (e) {
            new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML('<a href ="' + e.features[0].properties.URL + '"class=popupname>' + e.features[0].properties.feature_name + '</a>  <p class=popupdesc>' + e.features[0].properties.Description + '</p>')
                  .addTo(map);
      });

      //popup of nightlift
      map.on('click', 'nightlife-web-0n7sjl', function (e) {
            new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML('<a href ="' + e.features[0].properties.URL + '"class=popupname>' + e.features[0].properties.feature_name + '</a>  <p class=popupdesc>' + e.features[0].properties.Description + '</p>')
                  .addTo(map);
      });

      //popup of activity
      map.on('click', 'activity-web-3bhv6c', function (e) {
            new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML('<a href ="' + e.features[0].properties.URL + '"class=popupname>' + e.features[0].properties.feature_name + '</a>  <p class=popupdesc>' + e.features[0].properties.Description + '</p>')
                  .addTo(map);
      });

      //Mouse hover icon, cursor changed to pointer 
      map.on('mouseenter', 'shopping-web-8fj1lg', function () {
            map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'shopping-web-8fj1lg', function () {
            map.getCanvas().style.cursor = '';
      });

      map.on('mouseenter', 'top-rated-eateries-web-17fyk9', function () {
            map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'top-rated-eateries-web-17fyk9', function () {
            map.getCanvas().style.cursor = '';
      });

      map.on('mouseenter', 'activity-web-3bhv6c', function () {
            map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'activity-web-3bhv6c', function () {
            map.getCanvas().style.cursor = '';
      });

      map.on('mouseenter', 'nightlife-web-0n7sjl', function () {
            map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'nightlife-web-0n7sjl', function () {
            map.getCanvas().style.cursor = '';
      });

      map.on('mouseenter', 'exercise-web-10za7m', function () {
            map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'exercise-web-10za7m', function () {
            map.getCanvas().style.cursor = '';
      });

      map.on('mouseenter', 'sights-web-5ip46g', function () {
            map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'sights-web-5ip46g', function () {
            map.getCanvas().style.cursor = '';
      });
      //-------------hove mouse to display a POI name function------------------------------//
      map.on('mousemove', function (e) {

            let buildinginfo = map.queryRenderedFeatures(e.point, {
                  layers: ['top-rated-eateries-web-17fyk9', 'sights-web-5ip46g', 'shopping-web-8fj1lg', 'exercise-web-10za7m', 'nightlife-web-0n7sjl', 'activity-web-3bhv6c']
            });

            if (buildinginfo.length > 0) {
                  document.getElementById('lists').innerHTML = '<p id = buildinfo>' + buildinginfo[0].properties.feature_name + '<br>';
            } else {
                  document.getElementById('lists').innerHTML = '<p id = defaulttext >Hover over an icon</p>';
            }

      });


});

//--------End Load map functions---------------//

//--------Navigation and direction control---------------//

function ShowDirection() {
      
      var n = $("#direction").css("filter");
      console.log(n);
      
      if (n == "invert(0)") { 
            $("#direction").css("filter", "invert(100%)");
            map.addControl(dir, 'top-right');
            map.removeControl(nav, 'top-right');

      } else if (n == "invert(1)") { 
            $("#direction").css("filter", "invert(0%)");
            map.removeControl(dir, 'top-right');
            map.addControl(nav, 'top-right');
            //map.removeControl(new MapboxDirections({accessToken: mapboxgl.accessToken}),'top-right');

            }
}


var nav = new mapboxgl.NavigationControl();
var dir = new MapboxDirections({accessToken: mapboxgl.accessToken});
map.addControl(nav, 'top-right');
//map.addControl(dir, 'top-right');

//--------End Navigation and direction control---------------//


