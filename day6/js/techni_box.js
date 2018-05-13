"use strict";
  
$().ready( () => {
    $(".color").mouseenter( event => {
        $(event.currentTarget).css("background-color", "#" + getRandomColor());
        $(event.currentTarget).addClass("focused");
    });

    $(".color").mouseleave( event => {
        $(event.currentTarget).removeClass("focused");
    });
    
    function getRandomColor(){
        return Math.random().toString(16).slice(-6);
    }
});
