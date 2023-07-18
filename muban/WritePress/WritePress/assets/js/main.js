(function($) {
    'use strict';

    // Page loading
    $(window).on('load', function() {
        $('#preloader-active').fadeOut('slow');
    });

    // Slick slider
    var customSlickSlider = function() {
        // Featured slider 1
        $('.featured-slider-1-items').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            autoplay: false,
            loop: true,
            adaptiveHeight: true,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="flaticon-right"></i></button>',
            appendArrows: '.arrow-cover',
        });
        // carausel-4-columns
        $('.carausel-4-columns').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            loop: true,
            adaptiveHeight: true,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    };

    // Scroll progress
    var scrollProgress = function() {
        var docHeight = $(document).height(),
            windowHeight = $(window).height(),
            scrollPercent;
        $(window).on('scroll', function() {
            scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;
            $('.scroll-progress').width(scrollPercent + '%');
        });
    };

    // Off canvas sidebar
    var OffCanvas = function() {
        $('.off-canvas-toggle').on('click', function() {
            $('body').toggleClass("canvas-opened");
        });

        $('.search-icon').on('click', function() {
            $('body').toggleClass("search-opened");
        });

        $('.close-sidebar').on('click', function() {
            $('body').removeClass("search-opened canvas-opened");
        });
    };

    // Mobile menu
    var mobileMenu = function() {
        var menu = $('ul#navigation');
        if (menu.length) {
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: '+',
                openedSymbol: '-'
            });
        };
    };

    // Nice Select
    var niceSelectBox = function() {
        var nice_Select = $('select');
        if (nice_Select.length) {
            nice_Select.niceSelect();
        }
    };

    //Header sticky
    var headerSticky = function() {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $(".header-sticky ").removeClass("sticky-bar");
            } else {
                $(".header-sticky").addClass("sticky-bar");
            }
        });
    };

    // Scroll up to top
    var scrollToTop = function() {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="ti-arrow-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    };

    //sidebar sticky
    var stickySidebar = function() {
        if ($(window).width() > 1024) {
            $('.sticky-sidebar').theiaStickySidebar();
        }
    };

    //Custom scrollbar
    var customScrollbar = function() {
        var $ = document.querySelector.bind(document);
        var ps = new PerfectScrollbar('.custom-scrollbar');
    };

    //Mega menu
    var megaMenu = function() {
        $('.sub-mega-menu .nav-pills > a').on('mouseover', function(event) {
            $(this).tab('show');
        });
    };

    //Counter
    var numberCounter = function() {
        $('.counter-number').counterUp({
            delay: 10,
            time: 2000
        });
    };

    //magnific Popup
    var magPopup = function() {
        $('.play-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    };

    //Single post tools
    var singleTool = function() {
        $('.reading-mode').on('click', function() {
            $('.single-body-wrap').hide();
            $('body').addClass('is-reading-mode');
            $('.single-content').appendTo('.single-reading-mode');

        });

        $('.exit-reading-mode').on('click', function() {
            $('.single-body-wrap').show();
            $('body').removeClass('is-reading-mode');
            $('.single-content').appendTo('.main-content');
        });

        $('.single-print').on('click', function() {
            $('.single-content').printThis();
        });

        $(".fonts-size-zoom-in").on('click', function() {
            var size = parseInt($('.single-content').css("font-size"));
            size = size + 2;
            $('.single-content').css("font-size", size);
        });

        $(".fonts-size-zoom-out").on('click', function() {
            var size = parseInt($('.single-content').css("font-size"));
            size = size - 2;
            $('.single-content').css("font-size", size);
        });
    };

    // WOW
    var wowJs = function() {
        new WOW().init();
    };

    // toolTip
    var toolTip = function() {
        $('[data-toggle="tooltip"]').tooltip();
    };

    //vSticker
    var VSticker = function() {
        $('#news-flash').vTicker({
            speed: 1000,
            pause: 3000,
            animation: 'fade',
            mousePause: false,
            showItems: 1
        });
    };

    //Load functions
    $(document).ready(function() {
        toolTip();
        customSlickSlider();
        OffCanvas();
        customScrollbar();
        numberCounter();
        megaMenu();
        magPopup();
        scrollToTop();
        headerSticky();
        stickySidebar();
        mobileMenu();
        scrollProgress();
        niceSelectBox();
        singleTool();
        wowJs();
        VSticker();
    });

})(jQuery);