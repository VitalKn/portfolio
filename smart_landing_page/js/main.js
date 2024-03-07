$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		responsive: {
			0: {
				items:1
			},
			1200: {
				items:2
			},
		},
		loop: true,
		dotsEach: true,
		nav: false

	});
});

var owl = $('.owl-carousel');
owl.owlCarousel({
		responsive: {
			0: {
				items:1
			},
			1200: {
				items:2
			},
		},
		loop: true,
		dotsEach: true,
		nav: false

	});
$('.right').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.left').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})





