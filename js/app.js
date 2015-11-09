


var tstampActual = 0;
var comprobar = 5000;



var tstampActual2 = 0;
var comprobar2 = 3000;


//--------temporizador div master -------------
function actividad() {

var tstamp = new Date().getTime();
if (Math.abs(tstampActual - tstamp) > comprobar) {

	
	if ($('#master').is(':hidden')){
		tstampActual = new Date().getTime();
	}
	else{
		$("#alerta").dialog({autoOpen:false,modal: true, width: 'auto',
			buttons: {
		        "Permanecer": function() {
		        	tstampActual = new Date().getTime();
		          	$( this ).dialog( "close" );
		        },
		        Salir: function() {
		        	tstampActual = new Date().getTime();
		        	$("#master").dialog("close");
		          	$( this ).dialog( "close" );
	        	}
	      	}
		});
		$(".ui-dialog-titlebar").hide();
		$(".ui-dialog-content ui-widget-content").hide();
		$("#alerta").dialog("open");
		tstampActual2 = new Date().getTime();
	}
	


} else {

}
}

//--------temporizador de div de confirmacion--------------
function actividad2() {

var tstamp2 = new Date().getTime();
if (Math.abs(tstampActual2 - tstamp2) > comprobar2) {

	
	if ($('#alerta').is(':hidden')){
		
	}
	else{
		$("#master").dialog("close");
		$("#alerta").dialog("close");
	}
	


} else {

}
}


//----------dispara temporizadores------------
window.addEventListener('load', function() {
	
	setInterval(actividad, comprobar);
	setInterval(actividad2, comprobar2);
});







$(document).ready(function(){
//div central --------------------------------------------------------------
$("#home").click(function(){
    $("#master").dialog("open");
    $(".ui-dialog-titlebar").hide();
    tstampActual = new Date().getTime();
    tstampActual2 = new Date().getTime();
});

$("#master").dialog({autoOpen:false,modal: true, width: 'auto'});


$("#cerrar").click(function(){
    $("#master").dialog("close");
});
//--------------------------------------------------------------------------


		$('#abrir_catalogo').click(function efecto(){

			$('#catalogo').animate({'left':0+'%'});
			$('#catalogo').fadeToggle();
		});


});
