$(document).ready(function () {
	$('.header-slider').slick({
		arrows: false,
		vertical: true,
		dots: true,
		dotsClass: 'header-dots',
		autoplay: true,
		auto: 3000,
	});
	$('.menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
	});
});