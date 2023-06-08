(function($) {
	'use strict';
            
    var mainInit = {
        i: function(e) {
            mainInit.s();
            mainInit.methods();
        },

        s: function(e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },

        methods: function(e) {
            mainInit.w();
            mainInit.stickyHeaderMenu();
            mainInit.mobileMenuActivation();
            mainInit.menuLinkActive();  
        },

        w: function(e) {
            this._window.on('load', mainInit.l).on('scroll', mainInit.res)
        },

        stickyHeaderMenu: function() {

            $(window).on('scroll', function() {
                // Sticky Class Add
                if ($('body').hasClass('sticky-header')) {
                    var stickyPlaceHolder = $('#main-sticky-placeholder'),
                        menu = $('.main-mainmenu'),
                        menuH = menu.outerHeight(),
                        topHeaderH = $('.main-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        menu.addClass('main-sticky');
                        stickyPlaceHolder.height(menuH);
                    } else {
                        menu.removeClass('main-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },

        mobileMenuActivation: function(e) {
            
            $('.menu-item-has-children > a').on('click', function(e) {
                
                var targetParent = $(this).parents('.mainmenu-nav'),
                    target = $(this).siblings('.main-submenu'),
                    targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.main-submenu');
                
                if (targetParent.hasClass('offcanvas')) {
                    $(target).slideToggle(400);
                    $(targetSiblings).slideUp(400);
                    $(this).parent('.menu-item-has-children').toggleClass('open');
                    $(this).parent('.menu-item-has-children').siblings().removeClass('open');
                }

            });
           
            function resizeClassAdd() {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    $('body').removeClass('mobilemenu-active');
                    $('#mobilemenu-popup').removeClass('offcanvas show').removeAttr('style');
                    $('.main-mainmenu .offcanvas-backdrop').remove();
                    $('.main-submenu').removeAttr('style');
                } else {
                    $('body').addClass('mobilemenu-active');
                    $('#mobilemenu-popup').addClass('offcanvas');
                    $('.menu-item-has-children > a').on('click', function(e) {
                        e.preventDefault();
                    });
                }

                // Data Aos
			    AOS.init({
			    	duration: 1200,
			        once: true,
			        disable: function() {
			            var maxWidth = 991;
			            return window.innerWidth < maxWidth;
			        }
			    })
            }

            $(window).on('resize', function() {
                resizeClassAdd();
            });
            
            resizeClassAdd();
        },

        menuLinkActive: function () {
            var currentPage = location.pathname.split("/"),
                current = currentPage[currentPage.length-1];
            $('.mainmenu li a, .main-navigation li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === current){
                    $this.addClass('active');
                    $this.parents('.menu-item-has-children').addClass('menu-item-open')
                }
            });
        },
    }
    mainInit.i();
    
    /*====================
	Language Switcher JS
	======================*/ 
    $('.header-action .language-switcher .dropdown-toggle').on('click', function() {
		$('.header-action .language-switcher .dropdown-menu').toggleClass('show');
	});

	/*====================
	Search Menu JS
	======================*/ 
	$(".header-action .search-box i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});

	/*====================
	Popup Image JS
	======================*/
	$('.popup-btn').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	/*====================
	Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').fadeOut(1000);
	});

	/*====================
	Popup Video JS
	======================*/
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	/*====================
	Nice Select JS
	======================*/
	$('select').niceSelect();

	/*====================
	Odometer JS
	======================*/
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	/*====================
	Count Time JS
	======================*/
	function makeTimer() {
		var endTime = new Date("September 30, 2025 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

	/*====================
	Animation JS
	======================*/
	new WOW().init();

	/*====================
	Input Plus & Minus Number JS
	======================*/
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Contact Form Script
	var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success Function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 6000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // Fail Function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 6000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });

    /*====================
	Go to Top JS
	======================*/
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});
	
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	/*====================
	FAQ Accordion JS
	======================*/
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	/*====================
	Team Slider
	======================*/
	$('.team-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoplay:false,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		navText: [
			"<i class='bx bx-chevrons-left'></i>",
			"<i class='bx bx-chevrons-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:4
			},
			1200:{
				items:4
			}
		}
	});

	// Review Slides
	$('.review-slides').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		margin: 20,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	/*====================
	Blog Slider
	======================*/
	$('.blog-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoplay:false,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		navText: [
			"<i class='bx bx-chevrons-left'></i>",
			"<i class='bx bx-chevrons-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	/*====================
	Main Slider
	======================*/
	$('.main-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		mouseDrag: true,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
	});
    
    /*====================
	Breaking News Slider
	======================*/
	$('.breaking-news-slider').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		margin: 30,
		autoplaySpeed: 1000,
		animateOut: "slideOutDown",
		animateIn: "slideInDown"
	});

	/*====================
	Tabs JS
	======================*/
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').fadeOut();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();
		g.preventDefault();
	});

    // Gallery Popup JS
	$('.gallery-popup').each(function() {
		$(this).magnificPopup({
			delegate: '.full-screen', 
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});

	// Video Popup JS
	$('.popup-video').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

})(jQuery);
