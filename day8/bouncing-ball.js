"use strict";

$().ready(() => {
    let levels = 0
    const MESSAGES = ["Nice job!",
    "Excellent clickin'!",
    "That was Awesome!",
    "Man are you good!",
    "Boom!",
    "You're a pro!",
    "Unbelievable!",
    "Insanity!",
    "You're on fire!",
    "That was crazy!",
    "You are blowin' my mind!"];
        
    $("#ball").click( e => {
        if(levels < MESSAGES.length) {
            speedup(e.currentTarget);
            showMessage(levels, MESSAGES);
            levels++;
        } else {
            $('#message').text('WINNER!');
			$('#level').text("Holy cow! You won the whole freakin' thing!");
			$('#replay').show();
			$('#ball').hide();
			$('#message_container').show();
        }
        
    });
});

function speedup(element){
    let speed = $(element).css("animation-duration");
    speed = speed.slice(0, -1);
    speed = parseFloat(speed) - 0.1;
    $(element).css('animation-duration', speed + 's');  
}

function showMessage(levels, MESSAGES){
    $("#message").text(MESSAGES[levels]);
    $("#level").text("Next Level: " + (levels+1) );
    
    $("#ball").hide();
    $("#message_container").show();

    setTimeout(function() { 
        $("#ball").show();
        $("#message_container").hide();
     }, 3000);
}