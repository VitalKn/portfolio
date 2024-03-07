$(document).ready(function(){
    $('.menu-button').click(function(){
    $('.menu-mobile').toggleClass("menu-mobile-active");
  });
});


$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		nav: false,
		autoplay: true,

	});
});

var owl = $('.owl-carousel');
owl.owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true

	});

