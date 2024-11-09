// Initialize the map and set its view to Glasgow
var map = L.map('map').setView([55.8642, -4.2518], 13); // Centered on Glasgow with higher zoom

// Limit the map to show only Scotland (if needed)
var bounds = L.latLngBounds(
    [[54.5, -8], [61, 0]] // South-West and North-East limits of Scotland
);
map.setMaxBounds(bounds);
map.on('drag', function () {
    map.panInsideBounds(bounds, { animate: false });
});

// Use CartoDB Positron tiles for a clean, minimal look
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
    maxZoom: 18,
    minZoom: 6
}).addTo(map);

// Add specific landmarks for Glasgow
var necropolisMarker = L.marker([55.8611, -4.2344]).addTo(map);
necropolisMarker.bindPopup("<b>Necropolis</b><br>Famous Victorian cemetery with panoramic views over the city.");

var kelvingroveMarker = L.marker([55.8686, -4.2916]).addTo(map);
kelvingroveMarker.bindPopup("<b>Kelvingrove Art Gallery</b><br>One of the most visited museums in the UK.");