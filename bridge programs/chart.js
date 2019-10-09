
let canvas = document.querySelector('#bridgechart')
let ctx = canvas.getContext('2d')

let bridges = [
{ Bridge_Name: 'Verrazano-Narrows Bridge', City_State: "New York,NY", Span: 1298.4, ALTLONG: [40.6066, -74.0447] },
{ Bridge_Name: 'Golden Gate Bridge', City_State: "San Francisco and Marin, CA", Span: 1280.2, ALTLONG: [37.8199, -122.4783]},
{ Bridge_Name: 'Mackinac Bridge', City_State: "Mackinaw and St Ignace, MI", Span: 1158.0, ALTLONG: [45.8174, -84.7278]},
{ Bridge_Name: 'George Washington Bridge', City_State: "New York and New Jersey, NY", Span: 1067.0, ALTLONG: [40.8517, -73.9527]},
{ Bridge_Name: 'Tacoma Narrows Bridge', City_State: "Tacoma and Kitsap, WA", Span: 853.44, ALTLONG: [47.2690, -122.5517]}
]; 

var names = [];
var span = [];
for (var i=0; i<bridges.length; i++){
names.push(bridges[i].Bridge_Name);
span.push(bridges[i].Span);
}

chart = new Chart(ctx, {
type: 'bar',
data: {
    labels: names,
    datasets: [{
        label: 'longest bridges in US',
        data: span,
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'black']
    }]
}, options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
})
