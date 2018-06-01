$().ready( ()=>{
    $("#telepropt").click( e=>{
        e.preventDefault();
        
        let text = $("#text").val();
        if(text === ""){
            text="You should write some text!";
        }
        text = text.replace(/\n/g, "<br>");

        $("body").css({
            backgroundColor: "#010016"
        });

        $("#container").empty();
        $("header").empty().css({
            padding: 0
        });
        $("<p></p>").html(text)
        .addClass("prompt moveup")
        .appendTo("body");
    });
});