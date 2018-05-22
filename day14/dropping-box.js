"use strict";

$().ready(() => {
    var animations = [ 'climb', 'drop', 'jump', 'stretch', 'flip' ];

    $(".box").click( e=>{
        const index = Math.floor(Math.random() * animations.length);
        $(e.currentTarget).addClass(animations[index]);
        $(e.currentTarget).disable
        setTimeout( ()=>{
            $(e.currentTarget).removeClass(animations[index]);        
        }, 3100);
    });
});