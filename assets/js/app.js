var cargarPagina = function () {
	obtenerUbicacion();
  crearElementos(restaurantes);
		$("#formularioBusqueda").submit(filtrarRestaurantes);
		$("#formularioBusqueda").keyup(filtrarRestaurantes);
		$(".restaurante").click(cambiarUbicacion);
		$('select').material_select();

};
var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Actualice su navegador");
	}
};

var mostrarPosicion = function (posicion) {
	console.log(typeof(posicion));
	// alert("Latitud: " + posicion.coords.latitude);
	// alert("Longitud: " + posicion.coords.longitude);

	var coordenadas = {
		lat: posicion.coords.latitude,
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('.mapa')[0], {
      zoom: 18,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}
// Hasta aqui version v0.1.0, funciones para mostrar el mapa.
var restaurantes  = [
        	{
						"nombre":"Pizza del Perro Negro",
	          "direccion":"Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX",
	          "tipoDeComida":"Pizza",
						"imagen":"assets/img/perronegro.jpg",
	          "telefono":"01 55 5351 7401",
	          "coordenadas":{
							"lat":'19.416535',
	        		"lng":'-99.169629'}
        },
        {
					"nombre":"La Fabbrica Pizza Bar",
	        "direccion":"Plaza Villa de Madrid No.22, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
	        "tipoDeComida":"Restaurante-bar",
					"imagen":"assets/img/LAFABBRICA.png",
	        "telefono":"01 55 5514 9553",
					"coordenadas":{  "lat":'19.419306',
					"lng":'-99.166559'}
        },
        {
						"nombre":"Helado Obscuro",
	        "direccion":"Orizaba 203, Roma Nte., 06700 Ciudad de México, CDMX",
	        "tipoDeComida":"Helado",
					"imagen":"assets/img/helado.jpg",
	        "telefono":"01 55 4444 4878",
					"coordenadas":{
		            "lat":"19.412830",
	        			"lng":'-99.158486'}
				},
        {
						"nombre":"Yuban",
	        "direccion":"Calle Colima 268, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
	        "tipoDeComida":"Restaurante Mexicano",
					"imagen":"assets/img/yuban.webp",
	        "telefono":"01 55 6387 0358",
					"coordenadas":{
		            "lat":"19.418820",
	        			"lng":'-99.164075'}
      	},
				 {
					"nombre":"La Burguesa ",
	        "direccion":"Calle Colima 268, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
	        "tipoDeComida":"hamburgueseria/hamburguesas",
					"imagen":"assets/img/burguesa.jpeg",
	        "telefono":"01 55 6272 7078",
					"coordenadas":{
		            "lat":"19.416604",
		        			"lng":'-99.166714'}
		      },
					{
					 "nombre":"La Puerta Abierta ",
					 "direccion":"Colima 226, Roma Nte., 06700 Ciudad de México, CDMX",
					 "tipoDeComida":"Panaderia",
					 "imagen":"assets/img/puerta_abierta.jpg",
					 "telefono":"+52 55 6305 3793",
					 "coordenadas":{
					       "lat":"19.419339",
					         "lng":'-99.162469'}
					 },{
					  "nombre":" Starbucks ",
					  "direccion":"Colima 226, Roma Nte., 06700 Ciudad de México, CDMX",
					  "tipoDeComida":"Cafeteria/Café/Cafe",
					  "imagen":"assets/img/starbucks.png",
					  "telefono":"01 55 2986 0723",
					  "coordenadas":{
					        "lat":"19.416604",
					          "lng":'-99.166714'}
					  }
  ];
		var plantillaRestaurante =  "<a href='#mapa'>"+"<article class='restaurante row'  data-lat='__lat__' data-long='__long__'>"+
                                '<div class="card horizontal col s12">'+
                                    '<div class="col s4 center-align ">'+
                                    '<img class="circle responsive-img avatar" src="__imgRest__" alt="__imagen__"></div>'
                                  +'  <div class="card-stacked col s8 center-align">'+
                                          '<h5>__nombre__</h5>'+ '<div class="card-content">'+
                                          '<p class="direccion">__direccion__</p>'+
                                          '  <p class="tipoDeComida">__TipoComida__</p>'+
                                          '  <p class="telefono">__telefono__</p>'+
                                    '  </div>'+
                                    '</div>'+
                                    '</div>'+
                                '</article>'+
																	"</a>";

var crearElementos = function(restaurantes){
	var plantillaFinal = "";
	restaurantes.forEach(function (restaurante) {
		plantillaFinal += plantillaRestaurante.replace("__nombre__", restaurante.nombre)
      .replace("__direccion__", restaurante.direccion)
			.replace("__TipoComida__", restaurante.tipoDeComida)
      .replace("__telefono__", restaurante.telefono)
			.replace("__lat__",restaurante.coordenadas.lat)
			.replace("__long__",restaurante.coordenadas.lng)
			.replace("__imgRest__",restaurante.imagen);

	});
	$(".listadoDeComidas").html(plantillaFinal);
};

var filtrarRestaurantes = function (e){
	e.preventDefault();
	var criterioBusqueda = $("input.select-dropdown").val().toLowerCase();
	var palabraBusqueda = $("#foodFinder").val().toLowerCase();
	var restaurantesFiltrados = restaurantes.filter(function (restaurante) {
		if(criterioBusqueda === "tipo"){
			return restaurante.tipoDeComida.toLowerCase().indexOf(palabraBusqueda) >= 0;

		}	else if(criterioBusqueda ==="nombre"){
			return restaurante.nombre.toLowerCase().indexOf(palabraBusqueda) >= 0;

		}else if (criterioBusqueda === "direccion"){
			return restaurante.direccion.toLowerCase().indexOf(palabraBusqueda) >= 0;
		}else{
			return restaurante.nombre.toLowerCase().indexOf(palabraBusqueda) >= 0;
		}

		});
	crearElementos(restaurantesFiltrados);
};

function cambiarUbicacion(){
    var latitud = Number($(this).data("lat"));
		var longitud = Number($(this).data("long"));
		console.log(coordenadas);
		var coordenadas = { lat:latitud,lng:longitud };
		mostrarMapa(coordenadas);
}
$(document).ready(cargarPagina);
