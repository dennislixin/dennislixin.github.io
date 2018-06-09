$().ready( ()=>{
    const COLORS = ["red", "green", "yellow", "blue"];
    let level;
    let pattern;
    let answer;

    restartGame();

    function restartGame(){
        level = 0;
        pattern = [];
        startNextLevel();
    }

    function startNextLevel(){
        $(".pad").off();

        level++;
        answer = [];
        
        $("#level").text(level);
        pattern.push(randomColor());

        setTimeout(e=>{
            flashPattern();
        }, 1000);
    }

    function getAttemp(){
        $(".pad").click( e=>{
            const clickedColor = e.currentTarget.id;
            showClickEffect(clickedColor);
            answer.push(clickedColor);

            if(!isValidAnaswer()){
                restartGame();
            } else if(answer.length === pattern.length){
                startNextLevel();
            }
        });
    }

    function isValidAnaswer(){
        const index = answer.length - 1;
        return answer[index] === pattern[index];
    }
    
    function flashPattern(index){
        if(typeof index === "undefined"){
            index = 0;
        }

        if(index < pattern.length){
            setTimeout( ()=>{
                showClickEffect(pattern[index]);
                index++;
                flashPattern(index);
            }, 500);
        } else {
            getAttemp();
        }
    }

    function randomColor(){
        return COLORS[Math.floor(Math.random() * 4)];
    }
    
    function showClickEffect(color){
        const element = $("#"+color);
        const className = "glow-"+color; 
        element.addClass(className);
        playSound(color);
        setTimeout( ()=>{
            element.removeClass(className);
        }, 300);
    }
    function playSound(color) {
        let audio = document.createElement('audio');
        audio.setAttribute('src', color + '.wav');
        audio.play();
	}
});