var cargarPagina = function () {
	obtenerUbicacion();
  crearElementos(restaurantes);
		$("#formularioBusqueda").click(filtrarRestaurantes);
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
        	{ "nombre":"Pizza del Perro Negro",
          "direccion":"Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX",
          "tipoDeComida":"Pizza",
          "telefono":"01 55 5351 7401",
          "coordenadas":{"lat":'19.4182846',
        "lng":'-99.167457'}


        },
        { "nombre":"La Fabbrica Pizza Bar",
        "direccion":"Plaza Villa de Madrid No.22, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
        "tipoDeComida":"Restaurante-bar",
        "telefono":"01 55 5514 9553",
        "coordenadas":{  "lat":'19.4182846',
        "lng":'-99.167457'}


        },
        { "nombre":"Helado Obscuro",
        "direccion":"Orizaba 203, Roma Nte., 06700 Ciudad de México, CDMX",
        "tipoDeComida":"Helado",
        "telefono":"01 55 4444 4878",
        "coordenadas":{
            "lat":'19.4141967',
        "lng":'-99.1679291'}

      },
      { "nombre":"Pizza del Perro Negro",
      "direccion":"Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX",
      "tipoDeComida":"Pizza",
      "telefono":"01 55 5351 7401",
      "coordenadas":{    "lat":'19.4182846',
        "lng":'-99.167457'}

      },
        { "nombre":"Pizza del Perro Negro",
      "direccion":"Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX",
      "tipoDeComida":"Pizza",
      "telefono":"01 55 5351 7401",
      "coordenadas":{
        "lat":'19.4182846',
      "lng":'-99.167457'
      }


    },{ "nombre":"Pizza del Perro Negro",
    "direccion":"Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX",
    "tipoDeComida":"Pizza",
    "telefono":"01 55 5351 7401",
    "coordenadas":{
      "lat":'19.4182846',
    "lng":'-99.167457'
    }


    },{ "nombre":"Pizza del Perro Negro",
    "direccion":"Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX",
    "tipoDeComida":"Pizza",
    "telefono":"01 55 5351 7401",
    "coordenadas":{
      "lat":'19.4182846',
    "lng":'-99.167457'
    }


    }
  ];

var plantillaRestaurante =  "<article class='restaurante row'> "+
                                '<div class="card horizontal col s12">'+
                                    '<div class="col s4 center-align ">'+
                                    '<img class="circle responsive-img avatar" src="https://dummyimage.com/100x100/f61b67/fff.png&text=this+is+a+bomb" alt="__imagen__"></div>'
                                  +'  <div class="card-stacked col s8 center-align">'+
                                          '<h5>__nombre__</h5>'+ '<div class="card-content">'+
                                          '<p class="direccion">__direccion__</p>'+
                                          '  <p class="tipoDeComida">__TipoComida__</p>'+
                                          '  <p class="telefono">__telefono__</p>'+
                                    '  </div>'+
                                    '</div>'+
                                    '</div>'+
                                '</article>';

var crearElementos = function(restaurantes){
	var plantillaFinal = "";
	restaurantes.forEach(function (restaurante) {
		plantillaFinal += plantillaRestaurante.replace("__nombre__", restaurante.nombre)
      .replace("__direccion__", restaurante.direccion)
			.replace("__TipoComida__", restaurante.tipoDeComida)
      .replace("__telefono__", restaurante.telefono)

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
		return "no te encuentras cerca de ese lugar ";
		}
	});
	crearElementos(restaurantesFiltrados);
};


$(document).ready(cargarPagina);
