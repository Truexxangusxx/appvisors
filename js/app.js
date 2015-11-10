$(document).ready(function(){
//div central --------------------------------------------------------------
	$("#master").dialog({autoOpen:false,modal: true, width: 'auto'});

	$("#home").click(function(){
	    $("#master").dialog("open");
	    $(".ui-dialog-titlebar").hide();
	    tstampActual = new Date().getTime();
	    tstampActual2 = new Date().getTime();
	});

	$("#cerrar").click(function(){
	    $("#master").dialog("close");
	});
//--------------------------------------------------------------------------



	$('#abrir_catalogo').click(function efecto(){
		$('#catalogo').animate({'left':0+'%'});
		$('#catalogo').fadeToggle();
	});



//----Temporizador---------------------------------------------
	$("#temporizador").dialog({
		autoOpen:false,modal: true, open: function( event, ui ) {
			setTimeout( function(){ 
			    if (!$('#temporizador').is(':hidden')){
		    		location.reload();
		    		clearInterval(timer);
   					timer = setInterval(temporizador, 4000);
		    	}
			}  , 3000 );
		}
	});
    $(document).mousemove(function(e){
    	console.log("se movio temporizador");
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
		console.log("se movio galeria");
   		$("#galeria").hide(function(){
   			clearInterval(timer);
   			timer = setInterval(temporizador, 4000);
   		});
   		
    });
//--------------------------------------------------------------




});
