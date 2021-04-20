fetch('https://geo.ipify.org/api/v1?apiKey=at_4RYApNLZvu4yMmr6NWmWzco7lmXVz&ipAddress=')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('.ip').textContent = data.ip;
    document.querySelector('.location').textContent = `${data.location.country}, ${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    document.querySelector('.timezone').textContent = data.location.timezone;
    document.querySelector('.isp').textContent = data.isp;
    document.querySelector('.loading').style.display = 'none';
    initMap(data.location.lat, data.location.lng, data.location.city)
  })

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap(lat, lng, city) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dyYXNzIiwiYSI6ImNrbm8zeXZmejExYjQyb3Fqa2R0MW0wdmIifQ.wDhIrw5lunS7hyWfgHWQgg';
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 15.5,
  center: [lng, lat],
  });
  console.log(lat, lng, city)
  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [lng, lat]
      },
      properties: {
        title: 'Mapbox',
        description: city,
      }
    }]
  };
  
  map.on('load', function () {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;
    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        labelLayerId = layers[i].id;
        break;
      }
    }
     
    // The 'building' layer in the Mapbox Streets
    // vector tileset contains building height data
    // from OpenStreetMap.
    map.addLayer(
    {
      'id': 'add-3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
      'fill-extrusion-color': '#aaa',
      
      // Use an 'interpolate' expression to
      // add a smooth transition effect to
      // the buildings as the user zooms in.
      'fill-extrusion-height': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'height']
      ],
      'fill-extrusion-base': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'min_height']
      ],
      'fill-extrusion-opacity': 0.6
      }
      },

      labelLayerId
      );
    });

  // add markers to map
  geojson.features.forEach(function(marker) {
  
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });
}

function search(e, obj) {
  e.preventDefault();
  var value = obj.querySelector('.searchbar').value;
  document.querySelector('.loading').style.display = 'block';
  fetch(`https://geo.ipify.org/api/v1?apiKey=at_4RYApNLZvu4yMmr6NWmWzco7lmXVz&ipAddress=${value}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    if(data.code !== 422) {
      document.querySelector('.ip').textContent = data.ip;
      document.querySelector('.location').textContent = `${data.location.country}, ${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
      document.querySelector('.timezone').textContent = data.location.timezone;
      document.querySelector('.isp').textContent = data.isp;
      initMap(data.location.lat, data.location.lng)
      obj.querySelector('.searchbar').focus();
      document.querySelector('.loading').style.display = 'none';
    } else {
      obj.querySelector('.searchbar').value = 'Not valid';
      obj.querySelector('.searchbar').focus();
    }
  })
}