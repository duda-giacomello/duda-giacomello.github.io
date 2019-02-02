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
});
