let usCoordinates = [37.0902, -95.7129]
let zoomLevel = 4


let data = [
  { Bridge_Name: 'Verrazano-Narrows Bridge', City_State: "New York,NY", Span: 1298.4, ALTLONG: [40.6066, -74.0447] },
  { Bridge_Name: 'Golden Gate Bridge', City_State: "San Francisco and Marin, CA", Span: 1280.2, ALTLONG: [37.8199, -122.4783]},
  { Bridge_Name: 'Mackinac Bridge', City_State: "Mackinaw and St Ignace, MI", Span: 1158.0, ALTLONG: [45.8174, -84.7278]},
  { Bridge_Name: 'George Washington Bridge', City_State: "New York and New Jersey, NY", Span: 1067.0, ALTLONG: [40.8517, -73.9527]},
  { Bridge_Name: 'Tacoma Narrows Bridge', City_State: "Tacoma and Kitsap, WA", Span: 853.44, ALTLONG: [47.2690, -122.5517]}
]; 

let map = L.map('bridges-map').setView(usCoordinates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWJkaWZhdGFoYSIsImEiOiJjazB5OHh4aWMwZG12M251dm94Nmo1YWoxIn0.El_JZHZU4AgNwzEiGPn2TQ'
}).addTo(map)

for (let i = 0; i < data.length; i++) {
  let curData = data[i];
    
  L.marker(curData.ALTLONG).addTo(map)
    .bindPopup(`name: ${curData.Bridge_Name} <br>
    city,state: ${curData.City_State} <br>
    Span: ${curData.Span}<br>
    Altitude, Longitude ${curData.ALTLONG}`)
  }
