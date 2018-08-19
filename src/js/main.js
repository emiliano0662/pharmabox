$(document).ready(function() {

	$('#da-slider').cslider();

	var owl_carousel_main = $('.owl-carousel-main').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		animateOut: 'fadeOut'
	});

	var owl_carousel_brands_home = $('.owl-carousel-brands-home').owlCarousel({
		margin: 15,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 5,
			}
		}
	});

	$('.btn-owl-carousel-brands-home-left').on('click', function (event) {
		event.preventDefault();

		owl_carousel_brands_home.trigger('prev.owl.carousel');
	});

	$('.btn-owl-carousel-brands-home-right').on('click', function (event) {
		event.preventDefault();

		owl_carousel_brands_home.trigger('next.owl.carousel');
	});

	$(".btn-dropdown-filters").on('click', function (event) {
		event.preventDefault();

		var input = $(this).data('input');
		var select = $(this).data('select');

		$(input).val(select);
	});

	$("[data-dinaanim]").each(function () {

		var $this = $(this);

		$this.addClass("dinaAnim-invisible");

		if ($(window).width() > 767) {

			$this.appear(function () {

				var delay = ($this.data("dinadelay") ? $this.data("dinadelay") : 1);

				if (delay > 1) $this.css("animation-delay", delay + "ms");

				$this.addClass("dinaAnim-animated");
				$this.addClass('dinaAnim-' + $this.data("dinaanim"));

				setTimeout(function () {

					$this.addClass("dinaAnim-visible");

				}, delay);

			}, { accX: 0, accY: -150 });

		} else {

			$this.animate({ opacity: 1 }, 300, 'easeInOutQuad', function () { });
		}
	});

});