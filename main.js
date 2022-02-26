const map = new maplibregl.Map({
  container: 'map',
  center: [36.36563, 55.21056], // starting position [lng, lat]
  zoom: 14, // starting zoom
  minZoom: 10,
  maxZoom: 20,
  maxBounds: [
    [36.29, 55.18], // westSouth coordinates
    [36.44, 55.24] // eastNorth coordinates
  ],
  style: "./cybersatino.json"
});

map.getCanvas().style.cursor = 'pointer';

layers = ['landUse', 'waterLines', 'waterPolygons', 'contours', 'roadsBlur']

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
  });
  new maplibregl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
});