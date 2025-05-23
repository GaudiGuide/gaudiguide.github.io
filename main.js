import L from 'leaflet';

// Initialize map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem('user');
    
    // Update UI based on auth status
    const addLocationButton = document.querySelector('.add-location-button');
    
    if (user) {
        // User is logged in
        const userData = JSON.parse(user);
        addLocationButton.textContent = `Welcome, ${userData.name}`;
        addLocationButton.onclick = function() {
            // This would go to a profile page or location add page
            alert('You are already logged in!');
        };
    } else {
        // User is not logged in
        addLocationButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Add Location
        `;
        addLocationButton.onclick = function() {
            window.location.href = 'login.html';
        };
    }
}

// Run auth check when page loads
document.addEventListener('DOMContentLoaded', checkAuth);
