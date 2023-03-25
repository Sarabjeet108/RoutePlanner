var map = L.map('map');
map.setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

let lat , lng;
function success(pos){

         lat = pos.coords.latitude;
         lng = pos.coords.longitude;


        
        //map.setView([lat, lng]);

        L.Routing.control({
            waypoints: [
              L.latLng(lat, lng),
              L.latLng(lat, lng)
            ]
          }).addTo(map);
    
    }

function error(err){

         if(err.code === 1){
             alert("Please allow location access");
         }
         else{
             alert("Cannot get current location");
         }
    
     }


//  function createButton(label, container) {
//     var btn = L.DomUtil.create('button', '', container);
//     btn.setAttribute('type', 'button');
//     btn.innerHTML = label;
//     return btn;
// }

L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
})
.on('routeselected', function(e) {
    var route = e.route;
    alert('Showing route between waypoints:\n' + JSON.stringify(route.inputWaypoints, null, 2));
})
.addTo(map);

// BELOW IS THE CODE TO DISPLAY USER'S LOCATION
// navigator.geolocation.watchPosition(success, error);

// let marker, circle, zoomed;

// function success(pos){

//     const lat = pos.coords.latitude;
//     const lng = pos.coords.longitude;
//     const accuracy = pos.coords.accuracy;

//     if(marker){
//         map.removeLayer(marker);
//         map.removeLayer(circle);
//     }

//     marker = L.marker([lat, lng]).addTo(map);
//     circle = L.circle([lat, lng], { radius: accuracy}).addTo(map);

//     if(!zoomed){
//         zoomed = map.fitBounds(circle.getBounds());
//     }
    
//     map.setView([lat, lng]);

// }

// function error(err){

//     if(err.code === 1){
//         alert("Please allow location access");
//     }
//     else{
//         alert("Cannot get current location");
//     }

// }
