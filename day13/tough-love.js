"use strict";

$().ready( () => {
    var ADVICES = ["That's terrible! You should knock that off!",
                    "Seriously? Why don't you grow the hell up?!",
                    "Aren't you a little old for that crap?",
                    "You are bad and you should feel bad!",
                    "Gross. You are gross.",
                    "Are you going to suck all your life?",
                    "What? Who does that?!",
                    "I thought you were better than that.",
                    "My disapproval is overwhelming.",
                    " ಠ__ಠ ",
                    "Are you freaking kidding me?",
                    "NO! Bad!",
                    "And when do you plan on becoming an adult?",
                    "That is totally unacceptable.",
                    "You should be utterly ashamed.",
                    "Ugh! That's horrible!",
                    "A kitten dies everytime you do that.",
                    "I can't believe you are that disgusting."];
    $("habit").focus();

    $("form").submit( e=> {
        e.preventDefault();
        const index = Math.floor(Math.random() * ADVICES.length);
        $("#message").text(ADVICES[index]);

        let habit = $("#habit").val().replace(/^\s+|\s+$/g, '');
        if (habit === '') {
            habit = "don't fill in forms"
        }
        habit = changePronouns(habit);

		$('h1').text(habit + "?");
		$("#message").text(ADVICES[index]);
		$('#habit').val('');
    });

	function changePronouns(phrase) {
		var startWithI = phrase.substr(0, 2).toUpperCase();
		var startWithMy = phrase.substr(0, 3).toUpperCase();
		var newPhrase;
		
		if (startWithI === "I ")	{
			newPhrase = phrase.replace(/I /gi, "You ");
		} else if ( startWithMy === "MY " ) {
			newPhrase = phrase.replace(/My /gi, "Your ");
		} else {
			newPhrase = "You " + phrase;			
		}

		newPhrase = newPhrase.replace(/ I /gi, " you ");
		newPhrase = newPhrase.replace(/ my /gi, " your ");
		newPhrase = newPhrase.replace(/ me /gi, " you ");

		return newPhrase;
	};
});