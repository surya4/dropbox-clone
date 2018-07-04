// (function(){
//   console.log("hello")
//   var map;
//   function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: { lat: 55.7558, lng: 37.6173 },
//       scrollwheel: false,
//       zoom: 14,
//       mapTypeId: 'roadmap'
//   });

//     var icons = {
//       man: {
//         icon: '../images/man.png'
//       },
//       drop: {
//         icon: '../images/drop.png'
//       },
//       cab: {
//         icon: '../images/cab.png'
//       }
//     };


//     console.log("icons", icons)


//     var features = [
//       {
//         position: new google.maps.LatLng(55.770637, 37.576657),
//         type: 'man'
//       }, {
//         position: new google.maps.LatLng(55.776490, 37.611891),
//         type: 'man'
//       }, {
//         position: new google.maps.LatLng(55.765628, 37.617041),
//         type: 'man'
//       }, {
//         position: new google.maps.LatLng(55.767125, 37.511923),
//         type: 'man'
//       }, {
//         position: new google.maps.LatLng(55.795217, 37.498533),
//         type: 'man'
//       }, {
//         position: new google.maps.LatLng(55.772436, 37.481538),
//         type: 'drop'
//       }, {
//         position: new google.maps.LatLng(55.789909, 37.660410),
//         type: 'drop'
//       }, {
//         position: new google.maps.LatLng(55.751233, 37.616123),
//         type: 'drop'
//       }, {
//         position: new google.maps.LatLng(55.776490, 37.611891),
//         type: 'drop'
//       }, {
//         position: new google.maps.LatLng(55.725526, 37.728389),
//         type: 'drop'
//       }, {
//         position: new google.maps.LatLng(55.751233, 37.616123),
//         type: 'cab'
//       }, {
//         position: new google.maps.LatLng(55.772436, 37.481538),
//         type: 'cab'
//       }, {
//         position: new google.maps.LatLng(55.789909, 37.660410),
//         type: 'cab'
//       }, {
//         position: new google.maps.LatLng(55.751233, 37.616123),
//         type: 'cab'
//       }, {
//         position: new google.maps.LatLng(55.765628, 37.617041),
//         type: 'cab'
//       }, {
//         position: new google.maps.LatLng(55.770637, 37.576657),
//         type: 'cab'
//       }
//     ];

//     // Create markers.
//     features.forEach(function(feature) {
//       var marker = new google.maps.Marker({
//         position: feature.position,
//         icon: icons[feature.type].icon,
//         map: map
//       });
//     });
//   }
// });
