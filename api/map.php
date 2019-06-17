<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    #map-canvas{
      height:370px;
      width:100%;
    }
    #map-canvas img{
      max-width:none !important;
    }
    #pac_input{
      background-colorl:#fff;
      padding:0 11px 0 13px;
      width:35%;
      height:30px;
      text-overflow:ellipsis;
      position:absolute;
      z-index:9999;
      margin-left:8%;
      margin-top:2%;
    }
  </style>
  <script src="https://maps.google.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDDu1K6cmnXV3HndBcfKehQT6UOOZ2LBag"></script>
<script>
    var map;
    var markers = [];
    var lat, log;
    function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(initialize);
    } else {
      lat = 21.0226967;
      log = 105.8369637;
    }
    }
    function initialize(position) {
      lat = position.coords.latitude;
      log = position.coords.longitude;

    if (isset($contact_maps) && $contact_maps != '') {
    ?>
    var haightAshbury = new google.maps.LatLng;

    } else {
    ?>
    var haightAshbury = new google.maps.LatLng(lat, log);

    }
    ?>

    var mapOptions = {
      center: haightAshbury,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
      addMarker(haightAshbury);
    // This event listener will call addMarker() when the map is clicked.
    google.maps.event.addListener(map, 'click', function (event) {
      addMarker(event.latLng);
    });
    // Adds a marker at the center of the map.

    // Create the search box and link it to the UI element.
    var input = (document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

    google.maps.event.addListener(searchBox, 'places_changed', function () {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      for (var i = 0, marker; marker = markers[i]; i++) {
        marker.setMap(null);
      }

    // For each place, get the icon, place name, and location.
      markers = [];
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0, place; place = places[i]; i++) {
    // Create a marker for each place.
        addMarker(place.geometry.location);
        bounds.extend(place.geometry.location);
      }

          map.fitBounds(bounds);
      });
      google.maps.event.addListener(map, 'bounds_changed', function () {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);
      });
    }

    // Add a marker to the map and push to the array.
    function addMarker(location) {
      clearMarkers();
      deleteMarkers();
    $('#contact_maps').val(location);
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.BOUNCE
      });
      markers.push(marker);
    }

    // Sets the map on all markers in the array.
    function setAllMap(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
    setAllMap(null);
    }

    // Shows any markers currently in the array.
    function showMarkers() {
      setAllMap(map);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
      clearMarkers();
      markers = [];
    }

    google.maps.event.addDomListener(window, 'load', getLocation);
</script>
</head>
<body>
  <input id="pac-input" class="bg-focus form-control" type="text" placeholder="seaarch box">
  <div id="map-canvas" class="col-lg-12 m-b-none" style="clear:both;"></div>
  <input id="longlat" class="bg-focus form-control" type="text" placeholder="result box">
</body>
</html>