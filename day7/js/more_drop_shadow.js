"use strict";

document.getElementById("more-drop-shadow").addEventListener("click", e=>{
    let box_shadow = window.getComputedStyle(event.target).boxShadow;

    if (box_shadow === "none") {
        box_shadow = "rgb(0, 0, 0) 0px 0px 0px 0px";
    }

    box_shadow = box_shadow.split(" ");
    
    for(let i = 5; i < box_shadow.length; i++){
        let value = box_shadow[i].slice(0, -2);
        value = parseInt(value)+15;
        box_shadow[i] = value + "px";
    }

    event.target.style.boxShadow = box_shadow.join(" ");
});