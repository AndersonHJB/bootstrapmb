/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var OriXy = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.OnePageNavJs();
				this.MobileMenu();
				this.searchPopUp();
				this.scrollTop();
				this.counterUp();
				this.TwinMax();
				this.MainSLider();
				this.SponsorSlider1();
				this.SponsorSlider2();
				this.TestimonialSlider1();
				this.BlogFeedSlider();
				this.MainBanner2();
				this.TextScroll();
				this.SreenshootSlider();
				this.bannerParalax();
				this.BlogSlide();
				this.ServicesCarousel7();
				this.SocialRattingSlider();
				this.CircleProgress();
				this.ShopPriceFilter();
				this.ShopDetailsJs();
				this.SkillProgress();
				this.LandingBanner();
				this.InnerPageSlide();
				this.LandingTestimonial();
				this.AgencyMainBanner();
				this.AgencySponsorSlider();
				this.AgencyProjectSlider();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				})
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			OnePageNavJs: function (){
				$('.ori-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -90
							}, 1000);
							return false;
						}
					}
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.ori-header-section').addClass('sticky-on')
					} else {
						jQuery('.ori-header-section').removeClass('sticky-on')
					}
				});
				jQuery(document).ready(function (o) {
					0 < o(".navSidebar-button").length &&
					o(".navSidebar-button").on("click", function (e) {
						e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
					}),
					0 < o(".close-side-widget").length &&
					o(".close-side-widget").on("click", function (e) {
						e.preventDefault(), o(".info-group").removeClass("isActive");
					}),
					o(".xs-sidebar-widget").on("click", function (e) {
						e.stopPropagation();
					})
				});
			},
			searchPopUp: function (){
				if($('.search-box-outer').length) {
					$('.search-box-outer').on('click', function() {
						$('body').addClass('search-active');
					});
					$('.close-search').on('click', function() {
						$('body').removeClass('search-active');
					});
				};
				$('.or-canvas-cart-trigger').on("click", function() {
					$('.or-ofcanvas-cart-wrapper').toggleClass("or-canvas-cart-on");
				});
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="far fa-arrow-right"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
				jQuery(window).on('load', function(){
					$('.filtr-container').imagesLoaded ( function(){});
					var filterizd = $('.filtr-container');

					if(filterizd.length) {
						filterizd.filterizr({

						});
						$('.filtr-button').on('click', function() {

							$('.filtr-button.filtr-active').removeClass('filtr-active');
							$(this).addClass('filtr-active');
						});
					}
				});
				$('.zoom-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: false,
					closeBtnInside: false,
					mainClass: 'mfp-with-zoom mfp-img-mobile',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: true,
						duration: 300, 
						opener: function(element) {
							return element.find('img');
						}
					}
				});
			},
			counterUp: function (){
				$('.counter').counterUp({
					delay: 15,
					time: 1500,
				});
			},
			TwinMax: function (){
				var $circleCursor = $(".cursor");

				function moveCursor(e) {
					var t = e.clientX + "px",
					a = e.clientY + "px";
					TweenMax.to($circleCursor, .2, {
						left: t,
						top: a,
						ease: "Power1.easeOut"
					})
				}

				function zoomCursor(e) {
					TweenMax.to($circleCursor, .1, {
						scale: 3,
						ease: "Power1.easeOut"
					}), $($circleCursor).removeClass("cursor-close")
				}

				function closeCursor(e) {
					TweenMax.to($circleCursor, .1, {
						scale: 3,
						ease: "Power1.easeOut"
					}), $($circleCursor).addClass("cursor-close")
				}

				function defaultCursor(e) {
					TweenLite.to($circleCursor, .1, {
						scale: 1,
						ease: "Power1.easeOut"
					}), $($circleCursor).removeClass("cursor-close")
				}
				$(window).on("mousemove", moveCursor),
				$("a, button, .zoom-cursor").on("mouseenter", zoomCursor),
				$(".trigger-close").on("mouseenter", closeCursor),
				$("a, button, .zoom-cursor, .trigger-close, .trigger-plus").on("mouseleave", defaultCursor);
			},
			MainSLider: function (){
				$('.ori-slider-wrap-1').slick({
					arrow: false,
					dots: true,
					infinite: true,
					slidesToShow: 1,
					fade: true,
					autoplay: false,
					slidesToScroll: 1,
					customPaging : function(slider, i) {
						var thumb = $(slider.$slides[i]).data();

						return '0' + (i + 1);
					},
				});
			},
			SponsorSlider1: function (){
				$('.ori-sponsor-slider').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 5,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}

					]
				});
			},
			SponsorSlider2: function (){
				$('.ori-banner-sponsor-slide-4').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 6,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}

					]
				});
				$('.ori-sponsor-slider-7').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 5,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}

					]
				});
			},
			TestimonialSlider1: function (){
				$('.ori-testimonial-slider-1').slick({
					arrow: true,
					dots: false,
					slidesToShow: 1,
					autoplay: false,
					prevArrow: ".testi-left_arrow",
					nextArrow: ".testi-right_arrow",
					slidesToScroll: 1,
				});
				$('.ori-testimonial-slider-7').slick({
					arrow: true,
					dots: true,
					slidesToShow: 1,
					autoplay: false,
					prevArrow: ".testi-left_arrow7",
					nextArrow: ".testi-right_arrow7",
					slidesToScroll: 1,
				});
			},
			BlogFeedSlider: function (){
				$('.ori-blog-img-slide').slick({
					arrow: true,
					dots: false,
					slidesToShow: 1,
					autoplay: false,
					prevArrow: ".blogFeed-left_arrow",
					nextArrow: ".blogFeed-right_arrow",
					slidesToScroll: 1,
				});
				$(document).ready(function() {
					var $slider = $('.ori-seven-blog-slider');
					var $progressBar = $('.progress');
					var $progressBarLabel = $( '.slider__label' );

					$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
						var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

						$progressBar
						.css('background-size', calc + '% 100%')
						.attr('aria-valuenow', calc );

						$progressBarLabel.text( calc + '% completed' );
					});

					$slider.slick({
						arrow: true,
						dots: true,
						infinite: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						variableWidth: true,
						prevArrow: ".blg-left_arrow",
						nextArrow: ".blg-right_arrow",
						customPaging : function(slider, index) { 
							var num = index + 1;
							return '<span class="dot">'+ num +'</span>';
						},
						responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								infinite: false,
								dots: true
							}
						},
						{
							breakpoint: 800,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 2,
								variableWidth: false,
								dots: true
							}
						},
						{
							breakpoint: 500,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								variableWidth: false,
								dots: true
							}
						}

						]
					});  
				});
			},
			MainBanner2: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider51"] = {once: RS_MODULES.modules["revslider51"]!==undefined ? RS_MODULES.modules["revslider51"].once : undefined, init:function() {
					window.revapi5 = window.revapi5===undefined || window.revapi5===null || window.revapi5.length===0  ? document.getElementById("rev_slider_5_1") : window.revapi5;
					if(window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length==0) { window.revapi5initTry = window.revapi5initTry ===undefined ? 0 : window.revapi5initTry+1; if (window.revapi5initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider51"].init()}); return;}
					window.revapi5 = jQuery(window.revapi5);
					if(window.revapi5.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_5_1"); return;}
					revapi5.revolutionInit({
						revapi:"revapi5",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1240,1024,778,480",
						gridheight:"740,700,520,350",
						perspective:600,
						perspectiveType:"global",
						editorheight:"740,700,520,350",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							onHoverStop:false
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}};
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider71"] = {once: RS_MODULES.modules["revslider71"]!==undefined ? RS_MODULES.modules["revslider71"].once : undefined, init:function() {
					window.revapi7 = window.revapi7===undefined || window.revapi7===null || window.revapi7.length===0  ? document.getElementById("rev_slider_7_1") : window.revapi7;
					if(window.revapi7 === null || window.revapi7 === undefined || window.revapi7.length==0) { window.revapi7initTry = window.revapi7initTry ===undefined ? 0 : window.revapi7initTry+1; if (window.revapi7initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider71"].init()}); return;}
					window.revapi7 = jQuery(window.revapi7);
					if(window.revapi7.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_7_1"); return;}
					revapi7.revolutionInit({
						revapi:"revapi7",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1340,1024,778,480",
						gridheight:"960,768,550,450",
						spinner:"spinner2",
						perspective:600,
						perspectiveType:"global",
						editorheight:"960,768,550,450",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							onHoverStop:false
						},
						parallax: {
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
							type:"scroll",
							origo:"slidercenter",
							speed:0
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});
					
				}} 
			},
			TextScroll: function (){
				$('.ori-text-scroll-item-1').marquee({
					speed: 50,
					gap: 20,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: true,
					pauseOnHover: true,
					startVisible:true,
				});
				$('.ori-text-scroll-item-2').marquee({
					speed: 50,
					gap: 20,
					delayBeforeStart: 0,
					direction: 'right',
					duplicated: true,
					pauseOnHover: true,
					startVisible:true,
				});
				$('.ori-integration-sroll').marquee({
					speed: 50,
					gap: 20,
					delayBeforeStart: 0,
					direction: 'right',
					duplicated: true,
					pauseOnHover: true,
					startVisible:true,
				});
				$('.ori-testimonial-scroll').marquee({
					speed: 50,
					gap: 20,
					delayBeforeStart: 0,
					direction: 'right',
					duplicated: true,
					pauseOnHover: true,
					startVisible:true,
				});
			},
			SreenshootSlider: function (){
				if ($('.ori-appScreenshotCarousel-container').length) {
					if ($('.ori-appScreenshotCarousel-container').length) {
						var swiper = new Swiper('.ori-appScreenshotCarousel-container', {
							effect: 'coverflow',
							loop: true,
							centeredSlides: true,
							slidesPerView: 4,
							initialSlide: 4,
							keyboardControl: true,
							mousewheelControl: false,
							lazyLoading: true,
							preventClicks: false,
							preventClicksPropagation: false,
							lazyLoadingInPrevNext: true,
							coverflow: {
								rotate: 0,
								stretch: 0,
								depth: 250,
								modifier: 0.5,
								slideShadows: false,
							},
							breakpoints: {
								1199: {
									slidesPerView: 3,
								},
								991: {
									slidesPerView: 3,
								},
								767: {
									slidesPerView: 3,
								},
								575: {
									slidesPerView: 3,
								}
							}
						});

					}
				};
			},
			bannerParalax: function (){
				$('.background_parallax').jarallax({
					speed: 0.3,
				});
			},
			BlogSlide: function (){
				$('.ori-blog-slider').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 3,
					prevArrow: ".blog-left_arrow",
					nextArrow: ".blog-right_arrow",
					slidesToScroll: 1,
					variableWidth: true,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							variableWidth: false,
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 2,
							variableWidth: false,
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							variableWidth: false,
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							variableWidth: false,
						}
					},
					{
						breakpoint: 300,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							variableWidth: false,
						}
					}

					]
				});
			},
			ServicesCarousel7: function (){
				$('.ori-service-silider-7').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 4,
					prevArrow: ".ser7-left_arrow",
					nextArrow: ".ser7-right_arrow",
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

					]
				});
				$('.ori-project-slider-7').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 2,
					variableWidth: true,
					prevArrow: ".pro7-left_arrow",
					nextArrow: ".pro7-right_arrow",
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1450,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							variableWidth: false,
						}
					}

					]
				});
			},
			SocialRattingSlider: function (){
				$('.ori-social-ratting-slider').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 3,
					prevArrow: ".social-rate-left_arrow",
					nextArrow: ".social-rate-right_arrow",
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

					]
				});
			},
			CircleProgress: function (){
				if($('.count-box').length){
					$('.count-box').appear_c(function(){
						var $t = $(this),
						n = $t.find(".count-text").attr("data-stop"),
						r = parseInt($t.find(".count-text").attr("data-speed"), 10);
						if (!$t.hasClass("counted")) {
							$t.addClass("counted");
							$({
								countNum: $t.find(".count-text").text()
							}).animate({
								countNum: n
							}, {
								duration: r,
								easing: "linear",
								step: function() {
									$t.find(".count-text").text(Math.floor(this.countNum));
								},
								complete: function() {
									$t.find(".count-text").text(this.countNum);
								}
							});
						}
					},{accY: 0});
				};
				if($('.dial').length){
					$('.dial').appear_c(function(){
						var elm = $(this);
						var color = elm.attr('data-fgColor');  
						var perc = elm.attr('value'); 
						var thickness = elm.attr('thickness');  
						elm.knob({ 
							'value': 0, 
							'min':0,
							'max':100,
							'skin':'tron',
							'readOnly':true,
							'thickness':.12,
							'dynamicDraw': true,
							'displayInput':false
						});
						$({value: 0}).animate({ value: perc }, {
							duration: 4500,
							easing: 'swing',
							progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
						}
					});
					},{accY: 0});
				}
			},
			ShopPriceFilter: function (){
				if ($("#slider-range").length) {
					$( "#slider-range" ).slider({
						range: true,
						min: 0,
						max: 3000,
						values: [ 0, 1500 ],
						slide: function( event, ui ) {
							$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
						}
					});
				};
				if ($("#amount").length) {
					$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
						" - $" + $( "#slider-range" ).slider( "values", 1 ) );
				};
				$('.count').prop('disabled', true);
				$(document).on('click','.plus',function(){
					$('.count').val(parseInt($('.count').val()) + 1 );
				});
				$(document).on('click','.minus',function(){
					$('.count').val(parseInt($('.count').val()) - 1 );
					if ($('.count').val() == 0) {
						$('.count').val(1);
					}
				});
			},
			ShopDetailsJs: function (){
				$('.ori-shop-details-slide-for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					asNavFor: '.ori-shop-details-slide-nav'
				});
				$('.ori-shop-details-slide-nav').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					asNavFor: '.ori-shop-details-slide-for',
					dots: true,
					focusOnSelect: true
				});
				if($('.quantity-input-2').length) {
					$('.quantity-input-2').inputarrow({
						renderNext: function(input) {
							return $('<span class="custom-next"><i class="fal fa-plus"></i></span>').insertAfter(input);
						},
						renderPrev: function(input) {
							return $('<span class="custom-prev"><i class="fal fa-minus"></i></span>').insertBefore(input);
						},
						disabledClassName: 'custom-disabled'
					});
				};
			},
			SkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			InnerPageSlide: function (){
				$('.ori-inner-page-slide').slick({
					arrow: false,
					dots: true,
					loop: true,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 3,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 2,
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 300,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}

					]
				});
			},
			LandingTestimonial: function (){
				$('.ori-lan-testimonial-slide').slick({
					arrow: false,
					dots: true,
					loop: true,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 3,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 2,
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 300,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}

					]
				});
			},
			LandingBanner: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider91"] = {once: RS_MODULES.modules["revslider91"]!==undefined ? RS_MODULES.modules["revslider91"].once : undefined, init:function() {
					window.revapi9 = window.revapi9===undefined || window.revapi9===null || window.revapi9.length===0  ? document.getElementById("rev_slider_9_1") : window.revapi9;
					if(window.revapi9 === null || window.revapi9 === undefined || window.revapi9.length==0) { window.revapi9initTry = window.revapi9initTry ===undefined ? 0 : window.revapi9initTry+1; if (window.revapi9initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider91"].init()}); return;}
					window.revapi9 = jQuery(window.revapi9);
					if(window.revapi9.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_9_1"); return;}
					revapi9.revolutionInit({
						revapi:"revapi9",
						sliderType:"hero",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1240,1024,778,480",
						gridheight:"960,768,500,400",
						perspective:600,
						perspectiveType:"global",
						editorheight:"960,768,500,400",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							onHoverStop:false
						},
						parallax: {
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
							type:"scroll",
							origo:"slidercenter",
							speed:0
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}}
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			AgencyMainBanner: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider101"] = {once: RS_MODULES.modules["revslider101"]!==undefined ? RS_MODULES.modules["revslider101"].once : undefined, init:function() {
					window.revapi10 = window.revapi10===undefined || window.revapi10===null || window.revapi10.length===0  ? document.getElementById("rev_slider_10_1") : window.revapi10;
					if(window.revapi10 === null || window.revapi10 === undefined || window.revapi10.length==0) { window.revapi10initTry = window.revapi10initTry ===undefined ? 0 : window.revapi10initTry+1; if (window.revapi10initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider101"].init()}); return;}
					window.revapi10 = jQuery(window.revapi10);
					if(window.revapi10.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_10_1"); return;}
					revapi10.revolutionInit({
						revapi:"revapi10",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1170,1024,778,480",
						gridheight:"920,768,550,450",
						perspective:600,
						perspectiveType:"global",
						editorheight:"920,768,550,450",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							onHoverStop:false
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}} 
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			AgencySponsorSlider: function (){
				$('.ori-agency-sponsor-slide').slick({
					arrow: false,
					dots: false,
					loop: true,
					infinite: false,
					slidesToShow: 6,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}

					]
				});
			},
			AgencyProjectSlider: function (){
				$('.ori-agency-portfolio-slider').slick({
					arrow: false,
					dots: true,
					loop: true,
					infinite: true,
					slidesToShow: 3,
					centerMode: true,
					variableWidth: true,
					prevArrow: ".pro-an-left_arrow",
					nextArrow: ".pro-an-right_arrow",
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							centerMode: false,
							variableWidth: false,
						}
					}

					]
				});
			},

		}
	}
	jQuery(document).ready(function (){
		OriXy.init();
	});

})();