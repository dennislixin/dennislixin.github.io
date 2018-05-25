$().ready( ()=>{
    let pointerTop = 0, pointerLeft = 0;

    $(document).mousemove( e=>{
        pointerTop = e.pageY;
        pointerLeft = e.pageX;
    });

    const circles = appendCirclesToBody(20);

    for(let i=0; i<circles.length; i++){
        let interval = parseInt(circles[i].css("width").slice(0, -2));
        interval += getRandomInt(10, 40);
        let circleTop=0, circleLeft=0;
        setInterval( ()=>{
            circleTop += (pointerTop - circleTop) / interval;
            circleLeft += (pointerLeft - circleLeft) / interval;
            
            circles[i].css({
                top: circleTop,
                left: circleLeft
            });
        }, 20)
    };
});

function appendCirclesToBody(num) {
    let circles = []
    for(let i=0; i<num; i++){
        const circle = createCircle();
        $("body").append(circle);    
        circles.push(circle);
    }
    return circles;
}

function createCircle(){
    let circle = $("<div></div>");
    const size = getRandomInt(10, 60);
    const color = getRandomColor();
    circle.css({
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        top: 0,
        left: 0
    });    
    return circle;
}

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function getRandomColor(){
    const colors = ["#A60D36",
                    "#16348C",
                    "#F2A74B",
                    "#F25D27",
                    "#F22727",
                    "#FF0DFF",
                    "#0DFF6E"
                    ];
    const index = getRandomInt(0, colors.length-1);
    return colors[index];
}

