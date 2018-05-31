$().ready( ()=>{
    $("body").click( e=>{
        const color = getRandomColor();
        const size = getRandomInt(1, 10) * 5;
        $("<div></div>").css({
            top: e.pageY,
            left: e.pageX,
            width: size,
            height: size,
            backgroundColor: color
        }).addClass("grow").appendTo("body");
    });
});

function getRandomInt(min, max){
    const num = Math.random() * (max - min + 1) + min;
    return Math.floor(num);
}

function getRandomColor(){
    return "#" + Math.random().toString(16).slice(-6);
}