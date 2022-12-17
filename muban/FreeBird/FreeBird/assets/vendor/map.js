// Tutorial: https://developers.google.com/maps/documentation/javascript/tutorial

function initMap() {

  // Specify features and elements to define styles.
  var styleArray = 

// Begin map style: https://snazzymaps.com/
[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
// End map style

  var myLatlng = new google.maps.LatLng(-37.817251, 144.955891); // Set coordinates.
  var mapOptions = {
    mapTypeControl: true,
    scrollwheel: false,
    styles: styleArray, // Apply the map style array to the map.
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Marker
  var iconBase = 'assets/img/';
  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello! We Are Here. :)",
      icon: iconBase + 'map-marker.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
}