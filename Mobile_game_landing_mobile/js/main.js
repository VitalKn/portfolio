$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		nav: false

	});
});

var owl = $('.owl-carousel');
owl.owlCarousel({
		items: 1,
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


$(document).ready(function(){
	$(".owl-second").owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		nav: false

	});
});

var owl1 = $('.owl-second');
owl1.owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		nav: false

	});

$('.next').click(function() {
    owl1.trigger('next.owl.carousel');
})
$('.prev').click(function() {
    owl1.trigger('prev.owl.carousel', [300]);
})



