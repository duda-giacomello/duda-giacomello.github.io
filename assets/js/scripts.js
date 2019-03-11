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

	$(".home").onepage_scroll({
		sectionContainer: ".scroll-page",
		easing: "ease-in-out",
		animationTime: 1000,
		pagination: true,
		updateURL: false,
		loop: false,
		keyboard: true,
		responsiveFallback: false,
		direction: "vertical"
	});

	$(".arrow-down").click(function(){
		$(".home").moveTo(2);
	});

	$(".arrow-up").click(function(){
		$(".home").moveTo(1);
	});
	 
});
