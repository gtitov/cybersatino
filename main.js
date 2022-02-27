const map = new maplibregl.Map({
  container: 'map',
  center: [36.36563, 55.21050], // starting position [lng, lat]
  zoom: 10, // starting zoom
  minZoom: 10,
  maxZoom: 20,
  maxBounds: [
    [36.29, 55.178], // westSouth coordinates
    [36.44, 55.24] // eastNorth coordinates
  ],
  style: "./cybersatino.json"
});




// Popups

map.getCanvas().style.cursor = 'pointer';

layers = ['landUse', 'waterLines', 'waterPolygons', 'contours', 'roadsBlur', 'stars-blur1']

map.on('click', (e) => {
  const coordinates = e.lngLat
  let description = "";
  const bbox = [
    [e.point.x - 2, e.point.y - 2],
    [e.point.x + 2, e.point.y + 2]
  ];
  // TODO: create rectangle representing the bbox on click and hide it after 2sec https://github.com/mapbox/mapbox-gl-js/issues/9209


  const features = map.queryRenderedFeatures(bbox, { layers: layers })
  features.forEach(feature => {
    console.log(feature)
    if (feature.properties.Land_Type) description += feature.properties.Land_Type + "<br>"
    if (feature.properties.RiverName) description += feature.properties.RiverName + "<br>"
    if (feature.properties.Value_) description += "Горизонталь " + feature.properties.Value_ + " м<br>"
    if (feature.sourceLayer == "roads") description += "Дорога<br>"
    if (feature.source == "stars") description += "Terra Incognita"
  });
  new maplibregl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
});




// Controls


map.addControl(new maplibregl.ScaleControl());
const scalebar = document.getElementsByClassName("maplibregl-ctrl-scale")[0]
scalebar.classList.add("blinking");
map.addControl(new maplibregl.AttributionControl({compact: true,customAttribution: 'Данные: Географический факультет МГУ имени М. В. Ломоносова<br><a href="https://github.com/gtitov/cybersatino">Исходный код</a><br><a href="#">Герман Титов</a>, 2022'}));
map.addControl(new maplibregl.NavigationControl(), 'bottom-right');




// Background

const stars = {
  'type': 'MultiPoint',
  'coordinates': [[
    36.42036437988281,
    55.20023061331437
  ], [
    36.3237190246582,
    55.19425406139583
  ],
  [
    36.31702423095703,
    55.19944685432541
  ],
  [
    36.320457458496094,
    55.21795903813508
  ],
  [
    36.33831024169922,
    55.18710061539658
  ],
  [
    36.38603210449219,
    55.185532565186726
  ],
  [
    36.372642517089844,
    55.18719861648563
  ],
  [
    36.41366958618164,
    55.211495444210776
  ],
  [
    36.42036437988281,
    55.20023061331437
  ],
  [
    36.413841247558594,
    55.22412785315607
  ],
  [
    36.311187744140625,
    55.18974656018768
  ],
  [
    36.413326263427734,
    55.23372188680824
  ],
  [
    36.422595977783196,
    55.18651260379994
  ],
  [
    36.299686431884766,
    55.211299561341384
  ],
  [
    36.429805755615234,
    55.210907792710714
  ],
  [
    36.31135940551758,
    55.22765246093339
  ]
  ]
};

map.on('load', () => {
  // Add a source and layer displaying a point which will be animated in a circle.
  map.addSource('stars', {
    'type': 'geojson',
    'data': stars
  });

  map.addLayer({
    'id': 'stars-blur2',
    'source': 'stars',
    'type': 'circle',
    'paint': {
      'circle-radius': 10,
      'circle-opacity': 0.5,
      'circle-blur': 1,
      'circle-color': '#FFFF00'
    }
  });

  map.addLayer({
    'id': 'stars-blur1',
    'source': 'stars',
    'type': 'circle',
    'paint': {
      'circle-radius': 5,
      'circle-opacity': 0.5,
      'circle-blur': 1,
      'circle-color': '#FFFF00'
    }
  });

  map.addLayer({
    'id': 'stars-core',
    'source': 'stars',
    'type': 'circle',
    'paint': {
      'circle-radius': 2,
      'circle-color': '#ffffff'
    }
  });
})