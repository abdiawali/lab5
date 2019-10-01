let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWJkaWZhdGFoYSIsImEiOiJjazB5OHh4aWMwZG12M251dm94Nmo1YWoxIn0.El_JZHZU4AgNwzEiGPn2TQ'
}).addTo(map)

let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker= L.marker(mctcCoordinates).addTo(map)
    .bindPopup["Minneapolis College<br><a href='https://www.minneapolis.edu'>website</a>"]
    .addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates).addTo(map)
.bindPopup["Saint Paul College<br><a href='https://www.saintpaul.edu'>website</a>"]
    .addTo(map)