$(function () {


	// O U R   S E R V I C E S

	$('.our-box-link').hover(function() {
		$(this).addClass('our-box-link-hover');
		$(this).children('h2').css('color', '#f4b60d');
	},	function() {
		$(this).removeClass('our-box-link-hover');
		$(this).children('h2').css('color', 'white');
	}
	)


	// A C C O R D I O N


	$('.banner h2').on('click', function() {
		$(this).next().slideDown(500);
		$('.banner-content').not($(this).next()).slideUp(500);
		$('.banner h2').not($(this)).removeClass('banner-title-active');
		$(this).addClass('banner-title-active');
	})



})