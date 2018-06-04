"use strict";

$().ready( ()=>{
    let init = false;
    $(document).keypress( e=>{
       if(!init){
           init = true;
           $("#message").fadeOut("slow");
           $("#text").fadeIn ("slow");           
           $("#counter-bar").fadeIn ("slow");
       }
       $("#text").focus();
    });

    $("#text").keydown( e=>{
        update(e);
    });

    $("#text").keyup( e=>{
        update(e);
    });


    function update(){
        let text = $('#text').val();
        let size = 130 - text.length;
        size = size > 20 ? size : 20;
 
        $('#text').css('font-size', size + 'px');
        $('#counter').text(text.length);

        if (text.length >= 150) {
			$('#counter-bar').css('background-color', '#f2ad00');
		} 
		else if (text.length >= 200) {
			$('#counter-bar').css('background-color', '#ed6700');
		} 
		else if (text.length >= 250) {
			$('#counter-bar').css('background-color', '#ba000d');
		} 
		else if (text.length < 150) {
			$('#counter-bar').css('background-color', '#42863e');
        }
    }
    
});