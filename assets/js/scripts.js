$(document).ready(function(){
	'use strict';

	let about = $('.about');
	let btnMenu = $('.btn-menu');

	btnMenu.click(function(e) {
		if (about.hasClass('is-visible')) {
			about.removeClass('is-visible')
		} else {
			about.addClass('is-visible')
		}
	})

	// slide
	const $slider = $('.slide-projects');
	$slider.slick({
		dots: true,
		infinite: false,
		speed: 500,
		vertical: true,
		verticalSwiping: true,
		arrows: false
	});
});
