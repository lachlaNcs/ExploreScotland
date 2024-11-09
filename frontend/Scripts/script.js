// Initialize the map and set its view to show all of Scotland
var map = L.map('map').setView([56.4907, -4.2026], 7); // Adjusted to show all of Scotland

// Limit the map to show only Scotland
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

// Marker for Edinburgh
var edinburghMarker = L.marker([55.9533, -3.1883]).addTo(map);
edinburghMarker.bindPopup("<b>Edinburgh</b><br>Capital of Scotland. Famous for its history and the Edinburgh Castle.");

// Click event on Edinburgh marker to zoom in and redirect
edinburghMarker.on('click', function () {
    map.setView([55.9533, -3.1883], 13, { animate: true }); // Zoom into Edinburgh
    setTimeout(function () {
        window.location.href = 'edinburgh.html'; // Redirect to Edinburgh page after zooming
    }, 1000); // 1 second delay
});

// Marker for Glasgow
var glasgowMarker = L.marker([55.8642, -4.2518]).addTo(map);
glasgowMarker.bindPopup("<b>Glasgow</b><br>Largest city in Scotland. Known for its vibrant culture and architecture.");

// Click event on Glasgow marker to zoom in and redirect
glasgowMarker.on('click', function () {
    map.setView([55.8642, -4.2518], 13, { animate: true }); // Zoom into Glasgow
    setTimeout(function () {
        window.location.href = 'glasgow.html'; // Redirect to Glasgow page after zooming
    }, 1000); // 1 second delay
});


let currentIndex = 0;

function changeSlide(direction) {
    const images = document.querySelectorAll('#carouselImages img');
    const totalImages = images.length;

    // Hide the current image
    images[currentIndex].style.display = 'none';

    // Update the index
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Show the new image
    images[currentIndex].style.display = 'block';
}

// Initialize the carousel by showing the first image
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#carouselImages img');
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none'; // Show only the first image
    });

    // Map initialization
    const map = L.map('map').setView([55.860916, -4.251433], 13); // Glasgow coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

let currentGlasgowIndex = 0;
let currentEdinburghIndex = 0;

function changeSlide(city, direction) {
    const images = document.querySelectorAll(`#${city}CarouselImages img`);
    const totalImages = images.length;

    if (city === 'glasgow') {
        images[currentGlasgowIndex].style.display = 'none';
        currentGlasgowIndex = (currentGlasgowIndex + direction + totalImages) % totalImages;
        images[currentGlasgowIndex].style.display = 'block';
    } else if (city === 'edinburgh') {
        images[currentEdinburghIndex].style.display = 'none';
        currentEdinburghIndex = (currentEdinburghIndex + direction + totalImages) % totalImages;
        images[currentEdinburghIndex].style.display = 'block';
    }
}

// Initialize the carousels by showing the first image
document.addEventListener('DOMContentLoaded', () => {
    const glasgowImages = document.querySelectorAll('#glasgowCarouselImages img');
    glasgowImages.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none'; // Show only the first image
    });

    const edinburghImages = document.querySelectorAll('#edinburghCarouselImages img');
    edinburghImages.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none'; // Show only the first image
    });

    // Initialize the map
    const map = L.map('map').setView([55.860916, -4.251433], 13); // Glasgow coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});