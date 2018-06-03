$().ready( ()=>{
    let sec = 0, min=0, hour=0;
    let intervalID;
    
    $("#start").click( e=>{
        $("#start").attr("disabled", "disabled");
        intervalID = startClock();
    });
    $("#stop").click( e=>{
        $("#start").removeAttr("disabled");
        stopClock();
    });
    $("#reset").click( e=>{
        $("#start").removeAttr("disabled");
        resetClock();
    });    

    function startClock(){
        return setInterval( () => {
            incrementOneSec();
            displayTime(hour, min, sec); 
        }, 1000);
    }

    function stopClock(){
        clearInterval(intervalID); 
    }

    function resetClock(){
        clearInterval(intervalID);
        sec = 0;
        min = 0;
        hour = 0;
        displayTime(0, 0, 0);
    }

    function incrementOneSec(){
        sec++;

        min += Math.floor(sec / 60);
        sec = sec % 60;
        
        hour += Math.floor(min / 60);
        min = min % 60;
        
        hour = hour % 24;
    }
});

function displayTime(hour, min, sec){
    displaydigit(Math.floor(hour / 10), "hour-tens");
    displaydigit(hour % 10, "hour-ones");

    displaydigit(Math.floor(min / 10), "min-tens");
    displaydigit(min % 10, "min-ones");

    displaydigit(Math.floor(sec / 10), "sec-tens");
    displaydigit(sec % 10, "sec-ones");
}

function displaydigit(digit, unit){
    unit = '.' + unit + ' ';

    if (digit == 0) {
        $(unit + '.bar').show();
        $(unit + '.hor.mid').hide();			
    } 
    if (digit == 1) {
        $(unit + '.bar').hide();
        $(unit + '.ver.top.right,' + unit + '.ver.bottom.right').show();			
    }
    if (digit == 2) {
        $(unit + '.bar').show();
        $(unit + '.ver.top.left,' + unit + '.ver.bottom.right').hide();			
    }
    if (digit == 3) {
        $(unit + '.bar').show(),
        $(unit + '.ver.top.left,' + unit + '.ver.bottom.left').hide();			
    }
    if (digit == 4) {
        $(unit + '.bar').show();
        $(unit + '.hor.top,' + unit +  '.hor.bottom,' + unit + '.ver.bottom.left').hide();			
    }
    if (digit == 5) {
        $(unit + '.bar').show();
        $(unit + '.ver.top.right,' + unit + '.ver.bottom.left').hide();			
    }
    if (digit == 6) {
        $(unit + '.bar').show();
        $(unit + '.ver.top.right').hide();			
    }
    if (digit == 7) {
        $(unit + '.bar').hide();
        $(unit + '.ver.top.right,' + unit + '.ver.bottom.right,' + unit + '.hor.top').show();
    }
    if (digit == 8) {
        $(unit + '.bar').show();
    }
    if (digit == 9) {
        $(unit + '.bar').show();
        $(unit + '.ver.bottom.left').hide();		
    };
}
