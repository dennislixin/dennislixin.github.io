$(document).ready(function () {
	var curDrops = 'rain';
	
	makeDrop(150, randomInt(35, 280));
	makeRain(150, 150);

	$('#love').on('click', function () {
		$('.drop').removeClass(curDrops).addClass('heart');
		removeBacon();
		curDrops = 'heart';
	});

	$('#water').on('click', function () {
		$('.drop').removeClass(curDrops).addClass('rain');
		removeBacon();
		curDrops = 'rain';
	});

	$('#bacon').on('click', function () {
		$('.drop').removeClass(curDrops);
		insertBacon(150);
		curDrops = 'bacon';
	});

	function insertBacon(num) {
		if (num > 0) {
			$('#drop-' + num).html('<img src="images/bacon-' + randomInt(0, 2) + '.png">');
			num--;
			insertBacon(num);			
		}
	};

	function removeBacon() {
		$('.drop' ).html('');		
	};

	function makeRain(num, speed) {
		if (num > 0) {
			setTimeout(function () {
				$('#drop-' + randomInt(1, 150)).addClass('animate');
				num--;
				makeRain(num, speed);
			}, speed);
		}
	};

	function makeDrop(num, position) {
		if (num > 0) {
			var drop = '<div class="drop rain" id="drop-' + num + '"></div>';

			$('#drop-container').append(drop);
			$('#drop-' + num).css('left', position);
			num--;
			makeDrop(num, randomInt(60, 280));
		}
	};

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
});