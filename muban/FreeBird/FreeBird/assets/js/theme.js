/* --------------------------------------------------------------------
* Template js
* 
* Template:		FreeBird - Photography Portfolio HTML Website Template
* Author:		Themetorium
* URL:			http://themetorium.net
*
-------------------------------------------------------------------- */


// Table of Contents
// ==================

// 1. Page transitions / preloader
// 2. Disable right click
// 3. Smooth scrolling
// 4. Menu
// 5. Defer videos
// 6. Isotope
// 7. OWL Carousel
// 8. Nicescroll
// 9. lightGallery
// 10. YTPlayer (Background Youtube video)
// 11. Add to favorite button
// 12. Universal PHP Mail Feedback Script
// 13. Fade out element with page scroll
// 14. Element parallax effect
// 15. Gallery single top info toggle
// 16. Scroll to top button
// 17. Miscellaneous


   


(function ($) {
	'use strict';


	// ===============================================
	// Page transitions / preloader (Animsition)
	// More info: http://git.blivesta.com/animsition/
	// ===============================================

	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 800,
		outDuration: 500,
		// linkElement:   '.animsition-link',
		linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class*="lg-trigger"])', // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: true,
		loadingParentElement: 'html', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="assets/img/loading.svg" />'
		timeout: true,
		timeoutCountdown: 4000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'], // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'html',
		transition: function(url){ window.location.href = url; }
	});



	// ==========================================
	// Disable right click (uncomment if needed)
	// ==========================================

	// $(document)[0].oncontextmenu = function() { return false; }
	// $(document).mousedown(function(e) {
	//   if( e.button == 2 ) {
	//       alert('Sorry, this functionality is disabled!');
	//       return false;
	//   } else {
	//       return true;
	//   }
	// });



	// =========================================================================
	// Smooth scrolling 
	// Note: requires Easing plugin - http://gsgd.co.uk/sandbox/jquery/easing/
	// =========================================================================

	$('.sm-scroll').on("click",function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 1000, 'easeInOutExpo');
				return false;
			}
		}
	});



	// =========================================================================
	// Menu
	// =========================================================================

	// on hover
	$('#header.header-hover').on("mouseenter",function() {
		$('body').addClass('menu-open');
	});
	$('#header.header-hover').on("mouseleave",function() {
		$('body').removeClass('menu-open');
	});


	// on click
	$('#header.header-click .header-menu-icon, #header.header-fixed .header-menu-icon').on("click",function() {
		$('body').addClass('menu-open');
	});
	$('.header-close').on("click",function() {
		$('body').removeClass('menu-open');
	});

	// close menu on page cover click
	$('.page-cover').on("click",function() {
	  $('body').removeClass('menu-open');
	});


	// If "#header" has class "header-fixed"
	if ($("#header").hasClass("header-fixed")) {

		// Then add class "header-fixed-margin" to "#body-content"
		$("#body-content").addClass("header-fixed-margin");
	}


	// sub menu (on click)
	// ====================
	$('#menu .sub-menu-trigger').on('click', function() {
		$(this).addClass('active');
		$("#menu .sub-menu-trigger").not(this).removeClass('active');

		$(this).parent().addClass('active').find('.sub-menu').slideToggle(300);
		$("#menu .sub-menu-trigger").not(this).parent().removeClass('active').find('.sub-menu').slideUp(300);
		
		return false;
	});
	$('#header').on('mouseleave', function(){
		$('#menu .sub-menu-trigger').removeClass('active');
		$('.sub-menu').delay(300).slideUp(300);
	});


	// mobile menu toggle
	// ===================
	$('.mobile-menu-trigger').on("click",function() {
		$('body').toggleClass('menu-open');
	});



	// =======================================================================================
	// Defer videos (Youtube, Vimeo)
	// Note: When you have embed videos in your webpages it causes your page to load slower.
	// Deffering will allow your page to load quickly.
	// Source: https://www.feedthebot.com/pagespeed/defer-videos.html
	// =======================================================================================

	function init() {
	var vidDefer = document.getElementsByTagName('iframe');
	for (var i=0; i<vidDefer.length; i++) {
	if(vidDefer[i].getAttribute('data-src')) {
	vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
	} } }
	window.onload = init;



	// ===================================================================================
	// Isotope
	// Source: http://isotope.metafizzy.co
	// Note: "imagesloaded" blugin is required: https://github.com/desandro/imagesloaded
	// ===================================================================================

	// init Isotope
	var $container = $('.isotope-items-wrap');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.isotope-item',
			transitionDuration: '0.7s',
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});
	});

	// Filter
	$('.isotope-filter-links a').on("click",function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});
		return false;
	});

	// Filter item active
	var filterItemActive = $('.isotope-filter-links a');
	filterItemActive.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemActive.removeClass('active');
			$this.addClass('active');
		}
	});


	// Filter clickable/hover (clickable on small screens)
	if ( $(window).width() < 992) {

		// Filter clickable (effect on small screens)
		$('.isotope-filter-button').on("click",function(){
			$('.isotope-filter').toggleClass('iso-filter-open');
		});

		// Close filter if click on filter links (effect only on small screens)
		$('ul.isotope-filter-links > li > a').on("click",function() {
			$(".isotope-filter-button").click();
		});

	} else {

		// Filter on hover
		$('.isotope-filter').on("mouseenter",function(){
			$('.isotope-filter').addClass('iso-filter-open');
		});
		$('.isotope-filter').on("mouseleave",function(){
			$('.isotope-filter').removeClass('iso-filter-open');
		});

	}



	// ===============================================
	// OWL Carousel
	// Source: http://www.owlcarousel.owlgraphic.com
	// ===============================================

	$(window).on('load', function() { // fixes Owl Carousel "autoWidth: true" issue (https://github.com/OwlCarousel2/OwlCarousel2/issues/1139).

		$('.owl-carousel').each(function(){
			var $carousel = $(this);
			$carousel.owlCarousel({

				items: $carousel.data("items"),
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				center: $carousel.data("center"),
				startPosition: $carousel.data("start-position"),
				animateIn: $carousel.data("animate-in"),
				animateOut: $carousel.data("animate-out"),
				autoWidth: $carousel.data("autowidth"),
				autoHeight: $carousel.data("autoheight"),
				autoplay: $carousel.data("autoplay"),
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				autoplayHoverPause: $carousel.data("autoplay-hover-pause"),
				autoplaySpeed: $carousel.data("autoplay-speed"),
				nav: $carousel.data("nav"),
				navText: ['', ''],
				navSpeed: $carousel.data("nav-speed"),
				dots: $carousel.data("dots"),
				dotsSpeed: $carousel.data("dots-speed"),
				mouseDrag: $carousel.data("mouse-drag"),
				touchDrag: $carousel.data("touch-drag"),
				dragEndSpeed: $carousel.data("drag-end-speed"),
				lazyLoad: $carousel.data("lazy-load"),
				video: true,
				responsive: {
					0: {
						items: $carousel.data("mobile-portrait"),
						center: false,
					},
					480: {
						items: $carousel.data("mobile-landscape"),
						center: false,
					},
					768: {
						items: $carousel.data("tablet-portrait"),
						center: false,
					},
					992: {
						items: $carousel.data("tablet-landscape"),
					},
					1200: {
						items: $carousel.data("items"),
					}
				}

			});

			// Mousewheel plugin
			var owl = $('.owl-mousewheel');
			owl.on('mousewheel', '.owl-stage', function (e) {
				if (e.deltaY > 0) {
					owl.trigger('prev.owl');
				} else {
					owl.trigger('next.owl');
				}
				e.preventDefault();
			});

		});

	});



	// ==========================================
	// Nicescroll
	// Source: http://areaaperta.com/nicescroll/
	// ==========================================

	if ( $(window).width() > 768 ) { // Disable nicescroll on small screens.
		 
		// Init nicescroll (for horizontal scroll)
		$(".hs-inner").niceScroll({
			cursorcolor:"#4c4c4c", // change cursor color in hex
			cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
			cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
			cursorwidth: "4px", // cursor width in pixel (you can also write "5px")
			cursorborder: "0px solid #fff", // css definition for cursor border
			cursorborderradius: "5px", // border radius in pixel for cursor
			zindex: 1, // change z-index for scrollbar div

			horizrailenabled: true, // nicescroll can manage horizontal scroll
			sensitiverail: true, // click on rail make a scroll
			scrollspeed: 80, // scrolling speed
			mousescrollstep: 120, // scrolling speed with mouse wheel (pixel)

			touchbehavior: true, // enable cursor-drag scrolling like touch devices in desktop computer
			grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
			cursordragontouch: true, // drag cursor in touch / touchbehavior mode also
			autohidemode: false, // hide scrollbar when no scrolling

			railpadding: { top: -16, right: 0, left: 0, bottom: 0 } // set padding for rail bar
		});

	}



	// =====================================================
	// lightGallery (lightbox plugin)
	// Source: http://sachinchoolur.github.io/lightGallery
	// =====================================================

	$(".lightgallery").lightGallery({

		// Please read about gallery options here: http://sachinchoolur.github.io/lightGallery/docs/api.html

		// lightgallery core 
		selector: '.lg-trigger',
		mode: 'lg-fade', // Type of transition between images ('lg-fade' or 'lg-slide').
		height: '100%', // Height of the gallery (ex: '100%' or '300px').
		width: '100%', // Width of the gallery (ex: '100%' or '300px').
		iframeMaxWidth: '100%', // Set maximum width for iframe.
		loop: true, // If false, will disable the ability to loop back to the beginning of the gallery when on the last element.
		speed: 600, // Transition duration (in ms).
		closable: true, // Allows clicks on dimmer to close gallery.
		escKey: true, // Whether the LightGallery could be closed by pressing the "Esc" key.
		keyPress: true, // Enable keyboard navigation.
		hideBarsDelay: 5000, // Delay for hiding gallery controls (in ms).
		controls: true, // If false, prev/next buttons will not be displayed.
		mousewheel: true, // Chane slide on mousewheel.
		download: false, // Enable download button. By default download url will be taken from data-src/href attribute but it supports only for modern browsers. If you want you can provide another url for download via data-download-url.
		counter: true, // Whether to show total number of images and index number of currently displayed image.
		swipeThreshold: 50, // By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev image.
		enableDrag: true, // Enables desktop mouse drag support.
		enableTouch: true, // Enables touch support.

		// thumbnial plugin
		thumbnail: true, // Enable thumbnails for the gallery.
		showThumbByDefault: false, // Show/hide thumbnails by default.
		thumbMargin: 5, // Spacing between each thumbnails.
		toogleThumb: true, // Whether to display thumbnail toggle button.
		enableThumbSwipe: true, // Enables thumbnail touch/swipe support for touch devices.
		exThumbImage: 'data-exthumbnail', // If you want to use external image for thumbnail, add the path of that image inside "data-" attribute and set value of this option to the name of your custom attribute.

		// autoplay plugin
		autoplay: false, // Enable gallery autoplay.
		autoplayControls: true, // Show/hide autoplay controls.
		pause: 6000, // The time (in ms) between each auto transition.
		progressBar: true, // Enable autoplay progress bar.
		fourceAutoplay: false, // If false autoplay will be stopped after first user action

		// fullScreen plugin
		fullScreen: true, // Enable/Disable fullscreen mode.

		// zoom plugin
		zoom: true, // Enable/Disable zoom option.
		scale: 0.5, // Value of zoom should be incremented/decremented.
		enableZoomAfter: 50, // Some css styles will be added to the images if zoom is enabled. So it might conflict if you add some custom styles to the images such as the initial transition while opening the gallery. So you can delay adding zoom related styles to the images by changing the value of enableZoomAfter.

		// video options
		videoMaxWidth: '1000px', // Set limit for video maximal width.

		// Youtube video options
		loadYoutubeThumbnail: true, // You can automatically load thumbnails for youtube videos from youtube by setting loadYoutubeThumbnail true.
		youtubeThumbSize: 'default', // You can specify the thumbnail size by setting respective number: 0, 1, 2, 3, 'hqdefault', 'mqdefault', 'default', 'sddefault', 'maxresdefault'.
		youtubePlayerParams: { // Change youtube player parameters: https://developers.google.com/youtube/player_parameters
		modestbranding: 0,
		showinfo: 1,
		controls: 1
		},

		// Vimeo video options
		loadVimeoThumbnail: true, // You can automatically load thumbnails for vimeo videos from vimeo by setting loadYoutubeThumbnail true.
		vimeoThumbSize: 'thumbnail_medium', // Thumbnail size for vimeo videos: 'thumbnail_large' or 'thumbnail_medium' or 'thumbnail_small'.
		vimeoPlayerParams: { // Change vimeo player parameters: https://developer.vimeo.com/player/embedding#universal-parameters 
		byline : 1,
		portrait : 1,
		title: 1,
		color : 'CCCCCC',
		autopause: 1
		}

	});



	// =======================================================
	// YTPlayer (Background Youtube video)
	// Source: https://github.com/pupunzi/jquery.mb.YTPlayer
	// =======================================================

	$(".youtube-bg").mb_YTPlayer();



	// ==============================================================================
	// Add to favorite button
	// Source: http://www.webdesigncrowd.com/demo/circle-reveal-animation-12.23.13/
	// ==============================================================================

	$(".fav-count").on("click",function() {
		var total = parseInt($(this).html(), 10);
		if ($(this).parent().hasClass("active")) {
			total -= 1;
		} else {
			total += 1;
		}
		$(this).html(total);
		$(this).parent().toggleClass("active");
	});

	$(".icon-heart").on("click",function() {
		var total = parseInt($(this).parent().siblings(".fav-count").first().html(), 10);
		if ($(this).parent().parent().hasClass("active")) {
			total -= 1;
		} else {
			total += 1;
		}
		$(this).parent().siblings(".fav-count").first().html(total);
		$(this).parent().parent().toggleClass("active");
	});



	// ===============================================
	// Universal PHP Mail Feedback Script
	// Source: https://github.com/agragregra/uniMail
	// ===============================================

	// E-mail Ajax Send
	$("#contact-form").submit(function() { // Change (your contact form ID)
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", // Change (mail.php path)
			data: th.serialize()
		}).done(function() {
			alert("Thank you. Your message has been sent!");
			setTimeout(function() {
			// Done Functions
			th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	// ==================================
	// Fade out element with page scroll
	// ==================================

	$(window).scroll(function(){
		$(".fade-out-scroll-1").css("opacity", 1 - $(window).scrollTop() / 150);
		$(".fade-out-scroll-2").css("opacity", 1 - $(window).scrollTop() / 250);
		$(".fade-out-scroll-3").css("opacity", 1 - $(window).scrollTop() / 350);
		$(".fade-out-scroll-4").css("opacity", 1 - $(window).scrollTop() / 450);
		$(".fade-out-scroll-5").css("opacity", 1 - $(window).scrollTop() / 550);
		$(".fade-out-scroll-6").css("opacity", 1 - $(window).scrollTop() / 650);
		$(".fade-out-scroll-7").css("opacity", 1 - $(window).scrollTop() / 750);
		$(".fade-out-scroll-8").css("opacity", 1 - $(window).scrollTop() / 850);
	});



	// ========================
	// Element parallax effect
	// ========================

	$(window).scroll(function(){
		var bgScroll = $(this).scrollTop();
		if ( $(window).width() > 992) { // disable parallax on small devices.

			// parallax - transform
			$('.parallax-1').css('transform', 'translate3d(0, '+ ((bgScroll * 0.1)) +'px, 0)');
			$('.parallax-2').css('transform', 'translate3d(0, '+ ((bgScroll * 0.2)) +'px, 0)');
			$('.parallax-3').css('transform', 'translate3d(0, '+ ((bgScroll * 0.3)) +'px, 0)');
			$('.parallax-4').css('transform', 'translate3d(0, '+ ((bgScroll * 0.4)) +'px, 0)');
			$('.parallax-5').css('transform', 'translate3d(0, '+ ((bgScroll * 0.5)) +'px, 0)');
			$('.parallax-6').css('transform', 'translate3d(0, '+ ((bgScroll * 0.6)) +'px, 0)');

			// parallax - top
			// $('.parallax-top').css('top', ''+ ((bgScroll*0.9)) +'px');

			// parallax - background-position
			// $('.parallax-bg').css('background-position','center +'+ ((bgScroll*0.3)) +'px');
		}
	});



	// ===============================
	// Gallery single top info toggle
	// ===============================

	$('.gsti-toggle-trigger').on("click",function() {
		$('.gsti-toggle').toggleClass('gsti-toggle-full');
		$('.gsti-toggle-hidden').slideToggle( 400 );
	});



	// ======================
	// Scroll to top button
	// ======================

	// Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrolltotop').fadeIn();
		} else {
			$('.scrolltotop').fadeOut();
		}
	});



	// ===============
	// Miscellaneous
	// ===============

	// Bootstrap-3 modal fix
	$('.modal').appendTo("body")

	// Bootstrap tooltip
	$('[data-toggle="tooltip"]').tooltip()

	// Bootstrap popover
	$('[data-toggle="popover"]').popover({
		html: true
	});


})(jQuery); 