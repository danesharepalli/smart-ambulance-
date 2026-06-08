// Ambulance Location

var ambulanceLat = 16.5062;
var ambulanceLng = 80.6480;

// Government General Hospital Vijayawada

var hospitalLat = 16.5185;
var hospitalLng = 80.6305;

// Create Map

var map = L.map('map');

// OpenStreetMap Layer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© OpenStreetMap Contributors',
        maxZoom: 19
    }
).addTo(map);

// Ambulance Marker

var ambulanceMarker = L.marker(
    [ambulanceLat, ambulanceLng]
).addTo(map);

ambulanceMarker.bindPopup(
    "🚑 Ambulance"
);

// Hospital Marker

var hospitalMarker = L.marker(
    [hospitalLat, hospitalLng]
).addTo(map);

hospitalMarker.bindPopup(
    "🏥 Government General Hospital Vijayawada"
);

// Route Line

var routeLine = L.polyline(
    [
        [ambulanceLat, ambulanceLng],
        [hospitalLat, hospitalLng]
    ],
    {
        weight: 4
    }
).addTo(map);

// Zoom map to show both markers

map.fitBounds(routeLine.getBounds());

// Open ambulance popup initially

ambulanceMarker.openPopup();