var bPreguntar = true;
     
window.onbeforeunload = preguntarAntesDeSalir;
     
function preguntarAntesDeSalir()
{
	if (bPreguntar){
		return "desea salir de la pagina";
	}
}







$(document).ready(function(){
//galeria de imagenes --------------------------------------------------------------
    

//--------------------------------------------------------------------------


//----Visor web---------------------------------------------
	$('#abrir_catalogo1').click(function efecto(){
		$("#catalogo").show();
		//$("#catalogo").css('z-index','2');
	});
	$('#abrir_catalogo2').click(function efecto(){
		$("#catalogo").show();
	});
	$('#abrir_catalogo3').click(function efecto(){
		$("#catalogo").show();
	});
	$('#abrir_catalogo4').click(function efecto(){
		$("#catalogo").show();
	});
	$('#abrir_login').click(function efecto(){
		$("#login").show();
	});
	$('#abrir_saga').click(function efecto(){
		$("#saga").show();
	});

	$(".cerrar_esquina").click(function(){
	    $(this).parent('div').hide();
	});
//-------------------------------------------------------------


//----Temporizador---------------------------------------------
	$("#temporizador").dialog({
		autoOpen:false,modal: true, open: function( event, ui ) {
			setTimeout( function(){ 
			    if (!$('#temporizador').is(':hidden')){
		    		//location.reload();
		    		$('.div').hide();
		    		$("#galeria").show();
		    		$("#temporizador").dialog('close');
		    		clearInterval(timer);
   					timer = setInterval(temporizador, 4000);
		    	}
			}  , 3000 );
		}
	});
    $(document).mousemove(function(e){
    	if (!$('#temporizador').is(':hidden')){
    		$("#temporizador").dialog("close");
    		clearInterval(timer);
   			timer = setInterval(temporizador, 4000);
    	}
    });
    function temporizador(){
		if ($('#galeria').is(':hidden')){
			$("#temporizador").dialog('open');
		    $(".ui-dialog-titlebar").hide();
		    $("#temporizador").parent("div").css("width", "0px");
		    $("#temporizador").parent("div").css("height", "0px");
		}
    }
    var timer = setInterval(temporizador, 4000);
//--------------------------------------------------------------


//----galeria---------------------------------------------------
	//$("#galeria").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	$("#galeria").click(function(e){
   		$("#galeria").hide(function(){
   			clearInterval(timer);
   			timer = setInterval(temporizador, 4000);
   			
   		});
   		$("#saga iframe").attr( 'src', function ( i, val ) { return val; });
    });
//--------------------------------------------------------------


//----detectar flash -----------------------------------------------

//-----------------------------------------------------------------







});
