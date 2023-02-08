'use strict';
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock')
	})
});