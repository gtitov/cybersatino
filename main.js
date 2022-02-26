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

layers = ['landUse', 'waterLines', 'waterPolygons', 'contours', 'roadsBlur']

map.on('click', (e) => {
  const coordinates = e.lngLat
  let description = "";


  const features = map.queryRenderedFeatures([e.point.x, e.point.y], { layers: layers })
  console.log(features)
  features.forEach(feature => {
    console.log(feature.properties)
    if(feature.properties.Land_Type) description += feature.properties.Land_Type + "<br>"
    if(feature.properties.RiverName) description += feature.properties.RiverName + "<br>"
  });
  new maplibregl.Popup({className: "popup"})
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
});

// // Change the cursor to a pointer when the mouse is over the places layer.
// layers.forEach(layer => {
//   map.on('mouseenter', layer, () => {
//     map.getCanvas().style.cursor = 'pointer';
//   });

//   // Change it back to a pointer when it leaves.
//   map.on('mouseleave', layer, () => {
//     map.getCanvas().style.cursor = '';
//   });
// });
