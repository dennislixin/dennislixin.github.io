$().ready(() => {
    $("#roll").click( e => {
        updateMessage();
        $("#roll").prop('disabled', true);

        const dice1 = rollDice();
        const dice2 = rollDice();

        setTimeout(() => {
            updateMessage(dice1 + dice2);
            
            hideAll();
            updateDice("dice1", dice1);
            updateDice("dice2", dice2);
            
            $("#roll").prop('disabled', false);
        }, 1000);
        
    });
});

function updateMessage(message) {
    if(typeof message == 'undefined') {
        $("#message").text("Shake, Shake, Shake...");
        $("#message").addClass("shake");
    } else {
        $("#message").removeClass("shake");        
        $("#message").text(message);
    }
}

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

function updateDice(id, point){
    const children = $("#" + id).children();
    const pips = getJqueryElements(children);
    const showFunctions = [showPoint1, showPoint2,
                            showPoint3, showPoint4,
                            showPoint5, showPoint6,]
    showFunctions[point-1](pips);
}

function getJqueryElements(elements){
    let pips = [];
    for(let i = 0; i < elements.length; i++) {
        pips[i] = $(elements[i]);
    }
    return pips;
}

function hideAll(){
    $(".pip").hide();
}

function showPoint1(elements){
    elements[3].show();
}

function showPoint2(elements){
    elements[0].show();
    elements[6].show();
}

function showPoint3(elements){
    elements[0].show();
    elements[3].show();
    elements[6].show();
}

function showPoint4(elements){
    elements[0].show();
    elements[2].show();
    elements[4].show();
    elements[6].show();
}

function showPoint5(elements){
    elements[0].show();
    elements[2].show();
    elements[3].show();
    elements[4].show();
    elements[6].show();
}

function showPoint6(elements){
    elements[0].show();
    elements[1].show();
    elements[2].show();
    elements[4].show();
    elements[5].show();
    elements[6].show();
}