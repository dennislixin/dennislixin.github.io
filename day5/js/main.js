"use strict";
show_day();

function show_day() {
    const day = new Date().getDay();
    const msg = ["Sunday Funday!",
                "Back to the grind!",
                "Oh. It's Tuesday.",
                "Boom! Wednesday!",
                "Thirsty Thursday, yo!",
                "It's Friday! We should be kickin' it!",
                "Paaarrrtttyyy!"];

    document.getElementById(day).classList.add("today");
    document.getElementById("message").innerHTML = msg[day];
}
