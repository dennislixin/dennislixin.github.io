"use strict";

$(document).ready(function () {
	$('form').on('submit', function (event) {
		event.preventDefault();

        const QUSTION_NUM = 5;
        const MAX_SCORE = QUSTION_NUM*4;
		const score = getScore();
		let message;
		
		if (score < MAX_SCORE*1/4) {
			message = "You're definitely not an SF hipster.";
		} else if (score < 42*2/4) {
			message = "You might be an SF hipster.";
		} else if (score < 42*3/4) {
			message = "You're most likely an SF hipster.";
		} else {
			message = "You're a Super SF Hipster!";
		}

		var your_score = "<div id='score'>You're score is " + score + '.</div>';
		message = '<div id="message">' + message + '</div>';

		$('.container').hide(   );
        
		$('body').append(your_score);
		$('body').append(message);

		function getScore() {
			let score = 0;

			for (var i = 1; i <= QUSTION_NUM; i++) {
				var answer = $('input[name=q' + i + ']:checked').val();
				if (answer) {
					score += parseInt(answer);
				}
			}
			return score;
		};
	});
});