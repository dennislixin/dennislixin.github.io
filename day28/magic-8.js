$().ready(()=>{
    var answers = ["Signs point to yes", "Yes", "Reply hazy, try again",
                    "Without a doubt", "My sources say no", "As I see it, yes",
                    "You may rely on it", "Concentrate and ask again", 
                    "Outlook not so good", "It is decidedly so",
                    "Better not tell you now", "Very doubtful", "Yes - definitely",
                    "It is certain", "Cannot predict now", "Most likely",
                    "Ask again later", "My reply is no", "Outlook good",
                    "Don't count on it"];

    $('#question').focus();

    $("#btn-ask").click( ()=>{
        $.when($("#answer").fadeOut("200"))
         .done( ()=>{
            $("#answer").removeClass();
            $("#answer").addClass("answer");
            $("#answer").text(getAnswer());
            $("#answer").fadeIn("200");
         });        
    });

    function getAnswer(){
        if($("#question").val()===""){
            return "Hey! I'm not a mind reader!";
        } else {
            const index = Math.floor( Math.random() * answers.length );
            return answers[index];
        }
    }
});