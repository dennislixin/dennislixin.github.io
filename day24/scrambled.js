"use strict";

$().ready( ()=>{
    let score = 0;
    let words;
    let word;
    let chances = 3;

    words = getWords();
    setGame();

    $("#play").click( e=>{
        $("#start-screen").hide();
        $("#play-screen").show();
        $('#guess').focus();
    });

    $('#guess-btn').click( e=>{
        e.preventDefault();

        let guess = $("#guess").val().toUpperCase();
        $("#guess").val("");
        guess = $.trim(guess); 
        if( guess === word ){
            score++;
            chances = 3;
        } else {
            chances--;
            if (chances > 0) {
                $("#play-screen p").text("Incorrect! " + chances +" chances left");
            } else {
                score--;
                $("#play-screen p").html("Incorrect! You are out of chances<br>The word was " + word);
                $("input, button").attr("disabled", true);
                setTimeout(()=>{
                    setGame();
                    $("#play-screen p").html("Here is your next word");
                    $("input, button").attr("disabled", false);
                }, 3000);
            }
        }
    });

    function setGame() {
        word = getQuestionWord().toUpperCase();
        setQuestion();
        setScore();
        chances = 3;
    };

    function getWords() {
        let words;
        $.ajax({
            type: 'get',
            url: 'words.html',
            async: false,
            success: function(data) {
                words = data.split("\n");
            }
        });
        return words;
    };

    function getQuestionWord() {
        if(typeof words === "undefined"){
            alert("cannot get a word");
        }
        const index = randomNum(0, words.length);
        return words[index];
    }

    function setQuestion() {
        let shuffled = word;
        for(let i=0; i<word.length; i++){
            const random = randomNum(0, word.length);
            shuffled = swap(shuffled, i, random);
        }
        $("#question").text(shuffled);
    }

    function swap(str, i, j){
        let array = str.split('');
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array.join('');
    }

    function randomNum(min, max){
        return Math.floor( Math.random() * (max-min+1) ) + min;
    }

    function setScore() {
        $("#score").text(score);
    }
});