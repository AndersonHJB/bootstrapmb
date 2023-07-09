/*--------------------------
    Project Name: Smart Data
    Version: 1.0
    Author: 7oorof
    Relase Date: December 2020
---------------------------*/
/*---------------------------
      Table of Contents
    --------------------
    01- Pre Loading
    02- Mobile Menu
    03- Sticky Navbar
    04- Scroll Top Button
    05- Close Topbar
    06- Set Background-img to section 
    07- Add active class to accordions
    08- Contact Form validation
    09- Slick Carousel
    10- Popup Video
    11- CounterUp
    12- NiceSelect Plugin
    13- portfolio Filtering and Sorting
     
 ----------------------------*/

$(function () {

    "use strict";

    // Global variables
    var $win = $(window);

    /*==========  Pre Loading   ==========*/
    setTimeout(function () {
        $(".preloader").remove();
    }, 2000);

    /*==========   Mobile Menu   ==========*/
    var $navToggler = $('.navbar-toggler');
    $navToggler.on('click', function () {
        $(this).toggleClass('actived');
    })
    $navToggler.on('click', function () {
        $('.navbar-collapse').toggleClass('menu-opened');
    })

    /*==========   Sticky Navbar   ==========*/
    $win.on('scroll', function () {
        if ($win.width() >= 992) {
            var $stickyNavbar = $('.sticky-navbar'),
                $secondaryNavbar = $('.secondary-nav');
            if ($win.scrollTop() > 50) {
                $stickyNavbar.addClass('is-sticky');
            } else {
                $stickyNavbar.removeClass('is-sticky');
            }
            if ($secondaryNavbar.length) {
                if ($win.scrollTop() > $secondaryNavbar.offset().top - 100) {
                    $secondaryNavbar.addClass('secondary-nav-sticky');
                } else {
                    $secondaryNavbar.removeClass('secondary-nav-sticky');
                }
            }
        }
    });
    // Scroll To Section when Clicking on The Link
    $('.secondary-nav-internal-navigation .nav__link').on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 140
        }, 1000);
    });

    // Add  active class when The Scroll Reaching the Section
    $(window).on("scroll", function () {
        $('section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 141) {
                var sectionID = $(this).attr('id');
                $('.secondary-nav-internal-navigation .nav__link').removeClass('active');
                $('.secondary-nav-internal-navigation .nav__link[data-scroll="' + sectionID + '"]').addClass('active');
            }
        });
    });

    /*==========   Scroll Top Button   ==========*/
    $('#scrollTopBtn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*==========   Close Topbar   ==========*/
    $('.topbar__close').on("click", function (e) {
        e.preventDefault();
        $(this).closest('.topbar').fadeOut()
    });

    /*==========   Set Background-img to section   ==========*/
    $('.bg-img').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).parent().css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat'
        });
        $(this).parent().addClass('bg-img');
        if ($(this).hasClass('background-size-auto')) {
            $(this).parent().addClass('background-size-auto');
        }
        $(this).remove();
    });

    /*==========   Add active class to accordions   ==========*/
    $('.accordion__header').on('click', function () {
        $(this).parent('.accordion-item').toggleClass('opened');
        $(this).parent('.accordion-item').siblings().removeClass('opened');
    })
    $('.accordion__title').on('click', function (e) {
        e.preventDefault()
    });

    /*==========   Progress bars  ==========*/
    if ($(".animated-Progressbars").length > 0) {
        $(window).on('scroll', function () {
            var progressSectionOffset = $(".animated-Progressbars").offset().top - 130,
                progressSectionHight = $(this).outerHeight(),
                winScrollTop = $(window).scrollTop();
            if (winScrollTop > progressSectionOffset - 1 && winScrollTop < progressSectionOffset + progressSectionHight - 1) {
                $('.progress-bar').each(function () {
                    $(this).width($(this).attr('aria-valuenow') + '%');
                });
                $('.progress__percentage').each(function () {
                    $(this).text($(this).parent('.progress-bar').attr('aria-valuenow') + '%')
                });
            }
        });
    }

    /*==========  Open and Close Popup   ==========*/
    // open Popup
    function openPopup(popupTriggerBtn, popup, addedClass, removedClass) {
        $(popupTriggerBtn).on('click', function (e) {
            e.preventDefault();
            $(popup).toggleClass(addedClass, removedClass).removeClass(removedClass);
        });
    }
    // Close Popup
    function closePopup(closeBtn, popup, addedClass, removedClass) {
        $(closeBtn).on('click', function () {
            $(popup).removeClass(addedClass).addClass(removedClass);
        });
    }
    // close popup when clicking on an other place on the Document
    function closePopupFromOutside(popup, stopPropogationElement, popupTriggerBtn, removedClass, addedClass) {
        $(document).on('mouseup', function (e) {
            if (!$(stopPropogationElement).is(e.target) && !$(popupTriggerBtn).is(e.target) && $(stopPropogationElement).has(e.target).length === 0 && $(popup).has(e.target).length === 0) {
                $(popup).removeClass(removedClass).addClass(addedClass);
            }
        });
    }
    openPopup('.action__btn-search', '.search-popup', 'active', 'inActive') // Open sidenav popup
    closePopup('.search-popup__close', '.search-popup', 'active', 'inActive') // Close sidenav popup
    openPopup('.action__btn-burgerMenu', '.burger-menu', 'active', 'inActive') // Open sidenav popup
    closePopup('.burger-menu__close', '.burger-menu', 'active', 'inActive') // Close sidenav popup
    openPopup('.action__btn-cart', '.cart-popup', 'active', 'inActive') // Open Search popup
    closePopupFromOutside('.burger-menu', '.burger-menu__content', '.action__btn-burgerMenu', 'active', 'inActive');  // close popup when clicking on an other place on the Document
    openPopup('.action__btn-menuPopup', '.menu-popup', 'active', 'inActive') // Open menu-popup
    closePopup('.menu-popup__close', '.menu-popup', 'active', 'inActive') // Close menu-popup

    openPopup('.open-login-popup', '#login-popup', 'active', 'inActive') // Open sidenav popup
    closePopupFromOutside('#login-popup', '.login-popup-wrapper', '.open-login-popup', 'active', 'inActive');  // close popup when clicking on an other place on the Document

    openPopup('.open-register-popup', '#register-popup', 'active', 'inActive') // Open sidenav popup
    closePopupFromOutside('#register-popup', '.login-popup-wrapper', '.open-register-popup', 'active', 'inActive');  // close popup when clicking on an other place on the Document
    // Open Login Popup
    $('#go-login').on('click', function () {
        $('#register-popup').removeClass('active').addClass('inActive');
        $('#login-popup').removeClass('inActive').addClass('active');
    });
    // Open Register Popup
    $('#go-register').on('click', function () {
        $('#login-popup').removeClass('active').addClass('inActive');
        $('#register-popup').removeClass('inActive').addClass('active');
    });

    /*==========  Contact Form validation  ==========*/
    var contactForm = $("#contactForm"),
        contactResult = $('.contact-result');
    contactForm.validate({
        debug: false,
        submitHandler: function (contactForm) {
            $(contactResult, contactForm).html('Please Wait...');
            $.ajax({
                type: "POST",
                url: "assets/php/contact.php",
                data: $(contactForm).serialize(),
                timeout: 20000,
                success: function (msg) {
                    $(contactResult, contactForm).html('<div class="alert alert-success" role="alert"><strong>Thank you. We will contact you shortly.</strong></div>').delay(3000).fadeOut(2000);
                },
                error: $('.thanks').show()
            });
            return false;
        }
    });

    /*==========   Slick Carousel ==========*/
    $('.slick-carousel').slick();

    $('.slider-with-navs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: false,
        infinte: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-with-navs',
        dots: false,
        arrows: true,
        infinte: true,
        focusOnSelect: true,
        centerPadding: '10px'
    });

    /*==========  Popup Video  ==========*/
    $('.popup-video').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });
    $('.popup-gallery-item').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /*==========   counterUp  ==========*/
    $(".counter").counterUp({
        delay: 10,
        time: 4000
    });

    /*==========  NiceSelect Plugin  ==========*/
    $('select').niceSelect();

    /*==========   portfolio Filtering and Sorting  ==========*/
    $("#filtered-items-wrap").mixItUp();
    $(".portfolio-filter li a").on("click", function (e) {
        e.preventDefault();
    });
});