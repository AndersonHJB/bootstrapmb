/** 
    *   header_sticky();
    *   flatRetinaLogo();
    *   menu_Mobile();
    *   flatOwl();
    *   spacer();
    *   flatCounter();
    *   wowanimation();
    *   pp_custom2();
    *   pp_nav();
    *   w_w2();
    *   goTop();
    *   onepage_nav();
    *   removePreloader();
*/

;(function($) {
    "use strict";

    var header_sticky = function(){
        if ( $('body').hasClass('counter-scroll') ) {
            var hd_height = $('#header').height();           
               
                $(window).on('load scroll resize', function() { 
                    var header = $("#header");
                    
                        if ( $(window).scrollTop() > 0) { 
                            header.addClass('header-shadow');                            
                        } else if( $(window).scrollTop() == 0 ) {  
                            header.removeClass('header-shadow');                        
                        }                    

                });
        }
    };

    var flatRetinaLogo = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
        var $logo = $('#logo img');
        var $logo_retina = $logo.data('retina');

        if ( retina && $logo_retina ) {
            $logo.attr({
                src: $logo.data('retina'),
                width: $logo.data('width'),
                height: $logo.data('height')
            });
        } 
    };

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {                
                currMenuType = 'mobile';                              
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi');
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
                    var logomobileMenu = $('#mainnav-mobi').find('ul.menu >li').first().before('<li id="logo" class="logo-mobi"><a href="index.html"><img src="images/logo/02.png" alt="images" data-width="122" data-height="34" data-retina="images/logo/02@2x.png"></a></li>');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    if (hasChildMenu.find(">span").length == 0) {
                        hasChildMenu.children('a').after('<span class="btn-submenu"><i class="fa fa-angle-down" aria-hidden="true"></i></span>');
                        
                    }
                    $('.btn-menu').removeClass('active');

                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $desktopMenu.find('.sub-menu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu); 

                    $('#mobile-menu-overlay, #mainnav-mobi, #mainnav').removeClass('active');  
                    $('.btn-submenu').remove();
                    $('.logo-mobi').remove();           
                }
            }
        });

        $('.btn-menu').on('click', function() {  
            var header = $("#header");
            var offset = 0;
            if (typeof(header.data('offset')) != 'undefined') {
                offset = header.data('offset');
            }
        
            var $top = $(window).scrollTop() + header.height() + header.position().top + offset;
            $(this).toggleClass('active');
            $(this).closest('.header').siblings('.mainnav, #mobile-menu-overlay').toggleClass('active');
            
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation();
        });

        $(document).on('click', '#mobile-menu-overlay', function() {
            $(this).toggleClass('active');
            $(this).siblings('.mainnav').toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li a', function() {
            if ($(this).hasClass('click-model')) {
                $('#mobile-menu-overlay, #mainnav-mobi, #mainnav').toggleClass('active');
            }
        });        

    };

    var flatOwl = function() {
        if ( $().owlCarousel ) {
            $('.flat-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                item4 = $this.data("column4"),
                loops = $this.data("loop"),
                zero = $this.data("zero"),
                
                gap = Number($this.data("gap")),
               
                dots = $this.data("dots"),
                nav = $this.data("nav");

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    loop:loops,
                    dots:dots,
                    nav: nav,
                    navigation : true,
                    pagination: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item4
                        },
                        600:{
                            items:item3
                        },
                        768:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
                
                
            });
        }
    };

    var spacer = function() {

        $(window).on('load resize', function(){

            var mode = 'desktop';

            if(matchMedia('only screen and (max-width: 991px)').matches) 

                mode = 'mobile';

            if(matchMedia('only screen and (max-width: 767px)').matches)

                mode = 'smobile';

            $('.flat-spacer').each( function(){

                if( mode === 'desktop'){

                    $(this).attr('style','height:' + $(this).data('desktop') + 'px');
                    
                }else if( mode == 'mobile') {

                    $(this).attr('style','height:' + $(this).data('mobile') + 'px');       

                }else {

                    $(this).attr('style','height:' + $(this).data('smobile') + 'px')

                }

            });

        });

    };

    var flatCounter = function() {
        if ( $().countTo ) {
            $('.counter').find('.numb-count').each(function() {
                var to = $(this).data('to'),
                    speed = $(this).data('speed');
              
                $(this).countTo({
                    to: to,
                    speed: speed
                });
            });
        }
    };

    var wowanimation =  function() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    var pp_custom2 = function() {
        $(".pp-scrollable").scroll(function () {
            if ($(this).scrollTop() > 0) {
                $(".header").addClass("header-shadow");
            } 
            if ($('.slide-personal-intro').hasClass('active') && ($(this).scrollTop() == 0)) {

                 $(".header").removeClass("header-shadow");
            }
        });
        
    }

    var pp_nav = function() {
        $(window).on('load resize', function() {                        
            
                if ($(".a-pagepiling").length) {
                    $(".a-pagepiling").pagepiling({
                        scrollingSpeed: 280,
                        menu: ".content-menu, #mainnav, #mainnav-mobi",
                        anchors: ["home", "clients", "about", "specialization", "portfolio", "education", "contact"],
                        loopTop: false,
                        loopBottom: false,
                        navigation: { position: "right" },
                        onLeave: function (index) {
                            $(".header").removeClass("header-sticky");
                            
                            if ($('.slide-dark').hasClass('active')) {
                                $('body').addClass('slide-menu-dark');
                            } else {
                                $('body').removeClass('slide-menu-dark');
                            }

                        },
                        afterLoad: function(anchorLink, index){
                            if(anchorLink == 'Intro-third' || anchorLink == 'Intro-second'){
                                flatCounter();
                            }
                        }
                    });
                }
           
        });
    }

    var w_w2 = function() {
        $(function() {
            $('.chart').easyPieChart({
                
                barColor: '#ff2e59',
                
                trackColor: '#ffa0b4',
                
                scaleColor: 'transparent',
                
                lineCap: 'round',
                
                lineWidth: 5,
                
                size: 100,
                
                animate: 2000,
                
                onStart: $.noop,
                
                onStop: $.noop
            });
        });
    }

    var goTop =  function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var onepage_nav = function () {
        $('.has-one-page .mainnav > ul > li > a').on('click',function(e) {

            var anchor = $(this).attr('href').split('#')[1];            
            var largeScreen = matchMedia('only screen and (min-width: 992px)').matches;
            var headerHeight = 0;
            headerHeight = $('.header').height();        
            if ( anchor ) {
                if ( $('#'+anchor).length > 0 ) {
                   if ( $('.header-shadow').length > 0 ) {
                        headerHeight = headerHeight;
                   } else {
                        headerHeight = 0;
                   }                   
                   var target = $('#'+anchor).offset().top - headerHeight;
                   $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                }
            }

            e.preventDefault();

        })

        $('.mainnav ul > li > a').on( 'click', function() {
            $( this ).addClass('active').parent().siblings().children().removeClass('active');
        });
    } 

    var removePreloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };


// Dom Ready
    $(function() {
        header_sticky();
        flatRetinaLogo();
        responsiveMenu();
        flatOwl();
        spacer();
        flatCounter();
        wowanimation();
        pp_custom2();
        pp_nav();
        w_w2();
        goTop();
        onepage_nav();
        removePreloader();
    });

})(jQuery);
