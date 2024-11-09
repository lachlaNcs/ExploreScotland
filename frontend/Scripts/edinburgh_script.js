// Initialize the map and set its view to Edinburgh
var map = L.map('map').setView([55.9533, -3.1883], 13); // Centered on Edinburgh with higher zoom

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

// Marker for Edinburgh Castle
var edinburghCastleMarker = L.marker([55.9486, -3.1999]).addTo(map);
edinburghCastleMarker.bindPopup("<b>Edinburgh Castle</b><br>A historic fortress overlooking the city.");

// Click event on Edinburgh Castle marker to show facts
edinburghCastleMarker.on('click', function () {
    // Update the right-hand side content with facts about Edinburgh Castle
    document.getElementById("infoContent").innerHTML = `
    <h3>Edinburgh Castle</h3>
    <ul>
        <li>Edinburgh Castle is a historic fortress that dominates the skyline of Edinburgh.</li>
        <li>It is one of the most popular tourist attractions in Scotland.</li>
        <li>The castle has been involved in many historical conflicts, including the Wars of Scottish Independence.</li>
    </ul>
    <button id="quizButton" class="quiz-button">Take the Quiz</button>
`;

    // Button click event for quiz
    document.getElementById("quizButton").onclick = function () {
        window.location.href = 'edinburgh_castle_quiz.html'; // Redirect to quiz page
    };
});


// Marker for Holyrood Palace
var holyroodMarker = L.marker([55.9526, -3.1721]).addTo(map);
holyroodMarker.bindPopup("<b>Holyrood Palace</b><br>The official residence of the British monarch in Scotland.");