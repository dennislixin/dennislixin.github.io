"use strict";

$().ready( ()=>{
    const LEVEL_META = [
        [300, 50, "nomral"],
        [400, 40, "nomral"],
        [500, 30, "nomral"],
        [600, 20, "nomral"],
        [300, 50, "hide-path"],
        [400, 40, "hide-path"],
        [500, 30, "hide-path"],
        [600, 20, "hide-path"],
        [300, 50, "hide-mouse"],
        [400, 40, "hide-mouse"],
        [500, 30, "hide-mouse"],
        [600, 20, "hide-mouse"]
    ];

    let curLevel = 0;

    $("#start-game").click( e=>{
        startGame(0);
    });

    $("#try-again").click( e=>{
        startGame(curLevel);
    });

    $("#start-over, #start-over2, #start-over3").click( e=>{
        startGame(0);
    });
           
    $("#next-level").click( e=>{
        startGame(curLevel+1);
    });

    $("#start").mouseenter( e=>{
        $("#game").mouseleave( e=>{
            $("#game").off("mouseleave");
            $("#end").off("mouseenter");
            failGame(curLevel);
        });
        $("#end").mouseenter( e=>{
            $("#game").off("mouseleave");
            $("#end").off("mouseenter");
            winGame(curLevel);
        });
    });

    function startGame(level) {
        curLevel = level;

        const width = LEVEL_META[level][0];
        const height = LEVEL_META[level][1];
        const mode = LEVEL_META[level][2];

        hideAll();
        
        $("#game").width(width);

        $("#start, #end").css({
            width: width * 0.1,
            height: height
        });

        const pathColor = mode !== "hide-path" ? "white" : "transparent";
        const cursor = mode !== "hide-mouse" ? "auto" : "none";

        $("#path").css({
            width: width * 0.8,
            height: height,
            backgroundColor: pathColor,
            cursor: cursor
        });

        $("#game").show();
    }

    function failGame(){
        $("#fail").show();
        $("#game").hide();
    }

    function winGame(level){
        $("#game").hide();        
        if(level < LEVEL_META.length-1) {
            $("#win").show();        
        } else {
            $("#all-win").show();
        }
    }

    function hideAll(){
        $("#ready, #win, #fail, #all-win").hide();        
    }
});

