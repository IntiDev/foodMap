var cargarPagina = function (){
  $("#get-geolocation").click(obtenerUbicacion);
};
var obtenerUbicacion = function(){
  console.log("hey", navigator.geolocation.getCurrentPosition(mostrarUbicacion));
}
$(document).ready(cargarPagina);
