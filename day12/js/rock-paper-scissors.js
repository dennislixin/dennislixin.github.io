// 0: rock   1: paper    2: scissors

"use strict";

$().ready( () => {
    const message = ["You Win!", "You Loose!", "Tie"];

    $("button").click( e => {
        $("#computer").attr("src", "img/left_fist.png");    
        $("#you").attr("src", "img/right_fist.png");    
        $("img").addClass("shake");

        let yourWeapon = $(e.currentTarget).val();
        yourWeapon = parseInt(yourWeapon);

        if (yourWeapon !== 0 && yourWeapon !== 1 && yourWeapon !== 2) {
            alert("Cannot regnize your weapon!!");
        }

        const computerWeapon = Math.floor(Math.random() * 3);

        //get the result message
        let myMessage = "Your Should Not See me";
        if( yourWeapon === computerWeapon ) {
            myMessage = message[2];
        } else if( yourWeapon === 0 ) {
            if( computerWeapon === 1 ){
                myMessage = message[1];
            } else {
                myMessage = message[0];
            }
        } else if ( yourWeapon === 1 ) {
            if( computerWeapon === 0 ){
                myMessage = message[0];
            } else {
                myMessage = message[1];
            }
        } else {
            if( computerWeapon === 0 ){
                myMessage = message[1];
            } else {
                myMessage = message[0];
            }
        }
        
        $("#message").text("3");        
        showMessageIn("2", 1000);
        showMessageIn("1", 2000);
        showMessageIn("Shoot!", 3000);

        setTimeout( () => {
            $("img").removeClass("shake");
            $("#message").text(myMessage);
            showImage("computer", computerWeapon);
            showImage("you", yourWeapon);
        }, 4000);
    });
});

function showImage(id, weapon) {
    let imgSrc = "img/";
    switch(weapon) {
        case 0:
            imgSrc += "rock.png";
            break;
        case 1:
            imgSrc += "paper.png";
            break;
        case 2:
            imgSrc += "scissors.png ";
            break;
    }
    $("#" + id).attr("src", imgSrc);
}

function showMessageIn(message, time) {
    setTimeout( () => {
        $("#message").text(message);
    }, time);
}