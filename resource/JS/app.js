/* This will let you use the .remove() function later on */
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
  if (this.parentNode) {
  this.parentNode.removeChild(this);
  }
  };
  }
   
  mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1lZGhhc3NhYW4iLCJhIjoiY2tuYWw2ZmZzMG96azMwbnlldnE2am8zdCJ9.wRq6MaF7lOtA5q7pgyXz5A';
   
  /**
  * Add the map to the page
  */
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mohamedhassaan/cknhau6ll0e8718rga8a01501',
  center: [55.2784, 25.1950],
  zoom: 8,
  scrollZoom: true
  });
  map.addControl(new mapboxgl.NavigationControl());

 //data Stores
 var stores = {
  "type": "FeatureCollection",
  "features": [
    { //DUBAI
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.2708,
          25.2048
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 234-7336",
        "phone": "2042347336",
        "address": "Sheikh Zayed Rd",
        "city": "DUBAI",
        "country": "United Arab Emirates",
        "crossStreet": "at 15th St NW",
        "postalCode": "20005",
        "state": "D.C.",
        "id": "DUBAI",
        "cluster": true
      }
    },
    { //ABU-DHABI
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          54.3773,
          24.4539
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 507-8357",
        "phone": "2025078357",
        "address": "Capital City",
        "city": "Abu Dhabi",
        "country": "United Arab Emirates",
        "crossStreet": "at 22nd St NW",
        "postalCode": "20037",
        "state": "D.C.",
        "id": "ABUDHABI",
        "cluster": true
      }
    },
    { //SHARJAH
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.3870427,
          25.361375
        ], 
      },
      "properties": {
        "phoneFormatted": "(202) 387-9338",
        "phone": "2023879338",
        "address": "Sharjah Art Museum",
        "city": "SHARJAH",
        "country": "United Arab Emirates",
        "crossStreet": "at Dupont Circle",
        "postalCode": "20036",
        "state": "D.C.",
        "id": "SHARJAH",
        "cluster": true
      }
    },
    { //Jebel Ali Port
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.5136,
          25.4052
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 337-9338",
        "phone": "2023379338",
        "address": "Jebel Ali Port",
        "city": "DUBAI",
        "country": "United Arab Emirates",
        "crossStreet": "at 34th St NW",
        "postalCode": "20007",
        "state": "D.C.",
        "id": "DUBAI",
        "cluster": true
      }
    },
    { //AL AIN
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.8023,
          24.1302
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 547-9338",
        "phone": "2025479338",
        "address": "ZOO",
        "city": "AL AIN",
        "country": "United Arab Emirates",
        "crossStreet": "btwn 2nd & 3rd Sts. SE",
        "postalCode": "20003",
        "state": "D.C.",
        "id": "AL-AIN",
        "cluster": true
      }
    },
    { //palm jumeirah
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.1390,
          25.1124
        ]
      },
      "properties": {
        "address": "palm jumeirah",
        "city": "DUBAI",
        "country": "United Arab Emirates",
        "postalCode": "20740",
        "state": "MD",
        "id": "Umm Al Quawain",
        "cluster": true
      }
    },
    { //sheikh zayed mosque
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          54.4750,
          24.4128
        ]
      },
      "properties": {
        "phoneFormatted": "(301) 654-7336",
        "phone": "3016547336",
        "address": "Sheikh Zayed Mosque",
        "cc": "US",
        "city": "Abu Dhabi",
        "country": "United Arab Emirates",
        "postalCode": "20814",
        "state": "MD",
        "id": "FUJAIRAH",
        "cluster": true
      }
    },
    { //Etihad Towers
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          54.3218,
          24.4587
        ]
      },
      "properties": {
        "phoneFormatted": "(571) 203-0082",
        "phone": "5712030082",
        "address": "Etihad Towers",
        "city": "Abu Dhabi",
        "country": "United Arab Emirates",
        "crossStreet": "btw Explorer & Library",
        "postalCode": "20190",
        "state": "VA",
        "id": "Etihad Towers",
        "cluster": true
      }
    },
    { //Al Reem Island
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          54.4069,
          24.4942
        ]
      },
      "properties": {
        "phoneFormatted": "(703) 522-2016",
        "phone": "7035222016",
        "address": "Al-Reem Island",
        "city": "Abu Dhabi",
        "country": "United Arab Emirates",
        "crossStreet": "at N Randolph St.",
        "postalCode": "22203",
        "state": "VA"
      }
    },
    { //yas island 
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          54.6040,
          24.4958
        ]
      },
      "properties": {
        "phoneFormatted": "(610) 642-9400",
        "phone": "6106429400",
        "address": "Yas Island",
        "city": "Abu Dhabi",
        "country": "United Arab Emirates",
        "postalCode": "19003",
        "state": "PA"
      }
    },
    { //burj khalifa
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.2744,
          25.1972
        ]
      },
      "properties": {
        "phoneFormatted": "(215) 386-1365",
        "phone": "2153861365",
        "address": " Burj KHALIFA",
        "city": "DUBAI",
        "country": "United Arab Emirates",
        "postalCode": "19104",
        "state": "PA"
      }
    },
    { //burj al arab
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.1852,
          25.1412
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 331-3355",
        "phone": "2023313355",
        "address": "Burj Al Arab",
        "city": "DUBAI",
        "country": "United Arab Emirates",
        "crossStreet": "at 19th St",
        "postalCode": "20036",
        "state": "D.C."
      }
    }
  ]
};
   
  /**
  * Assign a unique id to each store. You'll use this `id`
  * later to associate each point on the map with a listing
  * in the sidebar.
  */
  stores.features.forEach(function (store, i) {
  store.properties.id = i;
  });
   
  /**
  * Wait until the map loads to make changes to the map.
  */
  map.on('load', function (e) {
  /**
  * This is where your '.addLayer()' used to be, instead
  * add only the source without styling a layer
  */
  map.addSource('places', {
  'type': 'geojson',
  'data': stores
  });
   
  /**
  * Add all the things to the page:
  * - The location listings on the side of the page
  * - The markers onto the map
  */
  buildLocationList(stores);
  addMarkers();
  });
   
  /**
  * Add a marker to the map for every store listing.
  **/
  function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  stores.features.forEach(function (marker) {
  /* Create a div element for the marker. */
  var el = document.createElement('div');
  /* Assign a unique `id` to the marker. */
  el.id = 'marker-' + marker.properties.id;
  /* Assign the `marker` class to each marker for styling. */
  el.className = 'marker';
   
  /**
  * Create a marker using the div element
  * defined above and add it to the map.
  **/
  new mapboxgl.Marker(el, { offset: [0, -23] })
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
   
  /**
  * Listen to the element and when it is clicked, do three things:
  * 1. Fly to the point
  * 2. Close all other popups and display popup for clicked store
  * 3. Highlight listing in sidebar (and remove highlight for all other listings)
  **/
  el.addEventListener('click', function (e) {
  /* Fly to the point */
  flyToStore(marker);
  /* Close all other popups and display popup for clicked store */
  createPopUp(marker);
  /* Highlight listing in sidebar */
  var activeItem = document.getElementsByClassName('active');
  e.stopPropagation();
  if (activeItem[0]) {
  activeItem[0].classList.remove('active');
  }
  var listing = document.getElementById(
  'listing-' + marker.properties.id
  );
  listing.classList.add('active');
  });
  });
  }
   
  /**
  * Add a listing for each store to the sidebar.
  **/
  function buildLocationList(data) {
  data.features.forEach(function (store, i) {
  /**
  * Create a shortcut for `store.properties`,
  * which will be used several times below.
  **/
  var prop = store.properties;
   
  /* Add a new listing section to the sidebar. */
  var listings = document.getElementById('listings');
  var listing = listings.appendChild(document.createElement('div'));
  /* Assign a unique `id` to the listing. */
  listing.id = 'listing-' + prop.id;
  /* Assign the `item` class to each listing for styling. */
  listing.className = 'item';
   
  /* Add the link to the individual listing created above. */
  var link = listing.appendChild(document.createElement('a'));
  link.href = '#';
  link.className = 'title';
  link.id = 'link-' + prop.id;
  link.innerHTML = prop.address;
   
  /* Add details to the individual listing. */
  var details = listing.appendChild(document.createElement('div'));
  details.innerHTML = prop.city;
  if (prop.phone) {
  details.innerHTML += ' &middot; ' + prop.phoneFormatted;
  }
   
  /**
  * Listen to the element and when it is clicked, do four things:
  * 1. Update the `currentFeature` to the store associated with the clicked link
  * 2. Fly to the point
  * 3. Close all other popups and display popup for clicked store
  * 4. Highlight listing in sidebar (and remove highlight for all other listings)
  **/
  link.addEventListener('click', function (e) {
  for (var i = 0; i < data.features.length; i++) {
  if (this.id === 'link-' + data.features[i].properties.id) {
  var clickedListing = data.features[i];
  flyToStore(clickedListing);
  createPopUp(clickedListing);
  }
  }
  var activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
  activeItem[0].classList.remove('active');
  }
  this.parentNode.classList.add('active');
  });
  });
  }
   
  /**
  * Use Mapbox GL JS's `flyTo` to move the camera smoothly
  * a given center point.
  **/
  function flyToStore(currentFeature) {
  map.flyTo({
  center: currentFeature.geometry.coordinates,
  zoom: 15
  });
  }
   
  /**
  * Create a Mapbox GL JS `Popup`.
  **/
  function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat(currentFeature.geometry.coordinates)
  .setHTML(
  '<h3>'+ currentFeature.properties.city +'</h3>' +
  '<h4>' +
  currentFeature.properties.address +
  '</h4>'
  )
  .addTo(map);
  }

  var directions = new MapboxDirections({
    accessToken:  mapboxgl.accessToken
  });
  map.addControl(directions, 'top-left');