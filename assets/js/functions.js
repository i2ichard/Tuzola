function initMap() {
  var chicago = new google.maps.LatLng(41.8681851, -87.6353698);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: chicago,
    zoom: 13
  });

  var coordInfoWindow = new google.maps.InfoWindow();
  coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
  coordInfoWindow.setPosition(chicago);
  coordInfoWindow.open(map);
}

// var TILE_SIZE = 256;

function createInfoWindowContent(latLng, zoom) {
  var scale = 1 << zoom;

  // var worldCoordinate = project(latLng);

  // var pixelCoordinate = new google.maps.Point(
  //     Math.floor(worldCoordinate.x * scale),
  //     Math.floor(worldCoordinate.y * scale));

  // var tileCoordinate = new google.maps.Point(
  //     Math.floor(worldCoordinate.x * scale / TILE_SIZE),
  //     Math.floor(worldCoordinate.y * scale / TILE_SIZE));

  return [
    '<div class="pane"><p class="top">Tuzola</p>',
    '<p>1136 S DELANO CT, 517W</p>',
    '<p>Chicago, IL 60605</p>',
    '<p><strong>(844)-892-4509</strong></p>',
    '</div>'
  ].join('');
}
