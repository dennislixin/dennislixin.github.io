$().ready(() => {
    update();
});

function updateTime() {
    const now = new Date();
    $("#clock").text(now.toLocaleTimeString());
}
function update(){   
    updateTime();
    updateColor();
    setTimeout(update, 500);
}

function updateColor(){
    const now = new Date();
    const base = new Date();
    base.setHours(0, 0, 0);

    const curSec = (now.getTime() - base.getTime()) / 1000;
    const TOTAL_SEC_OF_A_DAY = 86400;
    
    let color = Math.round(0xFFFFFF * curSec / TOTAL_SEC_OF_A_DAY);
    let oppositeColor = 0xFFFFFF - color;

    color = covertToColor(color);
    oppositeColor = covertToColor(oppositeColor); 

    $("#color").text(color);
    $("body").css("background-color", color);
    $("body").css("color", oppositeColor);
}

function covertToColor(num) {
    num = num.toString(16);
    while (num.length < 6) {
        num = "0" + num;
    }
    return "#" + num.toUpperCase();
}