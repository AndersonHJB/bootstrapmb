/*global $, jQuery */

(function ($) {

	/* ------------------  Loading Screen ------------------ */

	$(window).load(function () {

		$(".preloading").fadeOut(1000);
		$(".preloading").remove();

	});

	/* ------------------  Nice Scroll ------------------ */

	$("html,.header-fixed-side").niceScroll();

	/* ------------------  Code Prettify ------------------ */
	prettyPrint();

	/* ------------------  Smoothly Scroll  ------------------ */
	$('a[href^="#"]').on('click', function (event) {

		var target = $($(this).attr('href'));
		console.log(target)
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});

	//Check to see if the window is top if not then display button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});
}(jQuery));

