'use strict';

$(document).ready(function () {
    let color = "white";
    $(".color").click( e => color = $(e.currentTarget).css('background-color') )
	$('.cell').on('click', e => $(e.currentTarget).css("background-color", color ));
});