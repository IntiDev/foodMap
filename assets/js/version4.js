//
// $(document).ready(caragarPagina);
//
// function cargarPagina() {
//     obtenerUbicacionActual();
//     $(".restaurante").click(cambiarUbicacion);
// }
//
// function obtenerUbicacionActual (){
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(mostrarPosicionActual);
//
//   }else{
//     console.log("geolocalizacion no soportada en tu navegador");
//   }
// }
// var mostrarPosicionActual = function(posicion){
//   var latitud = posicion.coords.latitude;
//   var longitud = posicion.coords.longitude;
//   var coordenadas={
//     lat:latitud,
//     lng:longitud
//   };
//   mostrarMapa(coordenadas);
// }
// //@coordenadas es un objeto
// function mostrarMapa(coordenadas) {
//         // todas las coordenadas que crees tienen que tener el nombre de lat y lng y ser un objeto.
//         var map = new google.maps.Map($(".mapa")[0], {
//           zoom: 18,
//           center: coordenadas
//         });
//         var marker = new google.maps.Marker({
//           position: coordenadas,
//           map: map
//         });
//       }
