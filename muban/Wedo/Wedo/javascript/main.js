/**

  * Name: Wedo
  * Version: 1.0
  * Author: Themesflat
  * Author URI: http://www.themesflat.com

-------------------------------------------------------------- */

/*
 * Choose themes
 * Type text
 * Header fixed
 * Counter
 * Modal down
 * Number
 * Progress bar
 * counter
 * Page transition
 * Fullscreen
 * Text animation
 * preload
 */

(function ($) {
  "use strict";

  /* Choose themes
  ------------------------------------------------------------------------------------- */
  const choose_themes = function () {
    $(".choose-themes").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("is-dark");
      $(".sun").toggleClass("moon");
      $(".choose-themes").toggleClass("day");
    });
  };
  /* Type text
  ------------------------------------------------------------------------------------- */
  const type_text = function () {
    var typed = new Typed(".auto-type", {
      strings: ["UX/UI Designer", "Developer", "Freelancer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 900,
      loop: true,
    });
    var typed = new Typed(".type-2", {
      strings: ["HIRE ME"],
      typeSpeed: 100,
      backSpeed: 100,

      loop: true,
    });
  };
  /* Header fixed
  ------------------------------------------------------------------------------------- */
  const header_fixed = function () {
    if ($("header").hasClass("header-fixed")) {
      var nav = $("#header");

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div>", {
            height: headerHeight,
          });
        injectSpace.hide();

        if ($("header").hasClass("style-absolute")) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }


        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop + headerHeight) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 150) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });

        let lastScrollTop = 0;
        const navbarHeight = $("#header").outerHeight();
        const header = $("#header")

        $(window).scroll(hasScrolled);
  
        function hasScrolled() {
          const st = $(this).scrollTop();
          header.toggleClass("hidden", st > lastScrollTop && st > navbarHeight);
          lastScrollTop = st;
        }

      }
    }
  };

    /* Scroll
  ------------------------------------------------------------------------------------- */
  const scroll_effect = function () {
    $(".wedo-section").on("load scroll", function () {
      if ($(this).scrollTop() > 10) {
        $(this).closest(".wrap-home").addClass('hide-shadow');
      } else {
        $(this).closest(".wrap-home").removeClass('hide-shadow');
      }
    });
  };
  /* Counter
  ------------------------------------------------------------------------------------- */
  const counter = function () {
      if ($(document.body).find(".wedo-section").hasClass("counter-scroll")) {
      var a = 0;
      $(".service-wrap").scroll(function () {
        var oTop = $(".wrap-counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".wrap-counter")
              .find(".counter-number")
              .each(function () {
                var to = $(this).data("to"),
                  from = $(this).data("from"),
                  speed = $(this).data("speed"),
                  formatter = $(this).data("formatter");
                $(this).countTo({
                  from: from,
                  to: to,
                  speed: speed,
                  formatter: formatter,
                });
              });
          }
          a = 1;
        }
      });
    }
  };
  /* Modal down 
  ------------------------------------------------------------------------------------- */
  const modal_down = function () {
    const body = $("body");
    const modalNav = $(".menu-popup");
    if (modalNav.length) {
      const close = function () {
        modalNav.removeClass("modal-menu--open");
      };

      $("#nav-filter").on("click", function () {
        modalNav.toggleClass("modal-menu--open");
      });
      $(".modal-menu__backdrop,.title-button-group, .menu-content li a").on(
        "click",
        function () {
          close();
        }
      );
    }
  };
  /* Number
  ------------------------------------------------------------------------------------- */
  const number = function () {
    $(".number").each(function () {
      var size = $(this).text().split(".")[1]
        ? $(this).text().split(".")[1].length
        : 0;
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 8000,
            step: function (func) {
              $(this).text(parseFloat(func).toFixed(size));
            },
          }
        );
    });
  };
  /* Progress bar
  ------------------------------------------------------------------------------------- */
  var progress_bar = function() {
      
    $(".progress-item").appear(function () {
          var bar = $('.progress-animate');
          var bar_width = $(this);
          $(function(){
            $(bar).each(function(){
              bar_width = $(this).attr('data-valuenow');
              $(this).width(bar_width + '%');
            });
          });
    });
  };


  /* Page transition
  ------------------------------------------------------------------------------------- */
  const page_transition = function () {
    var page = $(".wedo-section");
    var all_element = $(".menu-content li");
    var all_element2 = $(".menu-content li.home-menu");
    var nav = $(".menu-content a, .wedo-link-item");
    var wrapper = $(".wrapper");
    var enter = wrapper.data("enter");
    var exit = wrapper.data("exit");
    nav.on("click", function () {
      var element = $(this);
      var href = element.attr("href");
      var page_attribute = $(href);
      var parent = element.closest("li");
      $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
      page.stop().animate({scrollTop:0}, 500, 'swing');
      
      if (!parent.hasClass("active")) {
        all_element.removeClass("active");
        
        wrapper.find(page).removeClass("animated " + enter);
        parent.addClass("active");
        wrapper
          .find(page_attribute)
          .removeClass("animated " + exit)
          .addClass("animated " + enter);
        $(page).addClass("hidden");
        $(page_attribute).removeClass("hidden").addClass("active");
        
        if ($(window).scrollTop() > 0) {
          wrapper.find(page_attribute).removeClass("animated");
          $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
        }
        if (window.innerWidth <= 1190) {
          all_element2.hasClass("active") ? wrapper.find(".sticky-sidebar").show() : wrapper.find(".sticky-sidebar").hide();
        }
        $(window).resize(function(){
          if (window.innerWidth <= 1190) {
            all_element2.hasClass("active") ? wrapper.find(".sticky-sidebar").show() : wrapper.find(".sticky-sidebar").hide();
          } else {
            wrapper.find(".sticky-sidebar").show();
          }
        });

      }
      return false;
    });
  };
  /* Fullscreen
  ------------------------------------------------------------------------------------- */
  const tf_fullscreen = function () {
    var tfheight = jQuery(window).height();
    var header_height = $(".header").height();
    var footer_height = $(".footer").height() + 40;
    var content_height = tfheight - (header_height + footer_height) + "px";
    if (window.innerWidth > 1190) {
      $(".tf-fullscreen").css({ height: tfheight, oveflow: "hidden" });
      $(".wrapper").css({ height: content_height });
    } else {
      $(".tf-fullscreen").css({ height: "unset", oveflow: "unset" });
      $(".wrapper").css({ height: "unset" });
    }
    $(window).resize(function(){
      if (window.innerWidth > 1190) {
        $(".tf-fullscreen").css({ height: tfheight, oveflow: "hidden" });
        $(".wrapper").css({ height: content_height });
      } else {
        $(".tf-fullscreen").css({ height: "unset", oveflow: "unset" });
        $(".wrapper").css({ height: "unset" });
      }
    });
  };
 
  /* cursor
  -------------------------------------------------------------------------*/
  const cursor = function () {
    var myCursor = jQuery(".tf-mouse");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".tf-mouse-inner"),
          t = document.querySelector(".tf-mouse-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on(
            "mouseenter",
            "a, .nav-menu, .choose-themes",
            function () {
              e.classList.add("mouse-hover"), t.classList.add("mouse-hover");
            }
          ),
          $("body").on(
            "mouseleave",
            "a, .nav-menu, .choose-themes",
            function () {
              ($(this).is("a") && $(this).closest(".nav-menu").length) ||
                (e.classList.remove("mouse-hover"),
                t.classList.remove("mouse-hover"));
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  };

  /* Text animation
  ------------------------------------------------------------------------------------- */
  Splitting();
  

  /* Preload
  ------------------------------------------------------------------------------------- */
  const preloader = function () {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    var preloader = $("#preloader");
    if (!isMobile) {
      setTimeout(function () {
        preloader.addClass("preloaded");
      }, 200);
      setTimeout(function () {
        preloader.remove();
      }, 1000);
    } else {
      preloader.remove();
    }
  };
  const wedo_onload = function () {
    setTimeout(function () {
      preloader();
    }, 500);
  };

  /* Dom Ready */
  $(function () {
    progress_bar();
    choose_themes();
    header_fixed();
    modal_down();
    counter();
    number();
    page_transition();
    tf_fullscreen();
    type_text();
    scroll_effect();
    cursor();
    wedo_onload();
  });
})(jQuery);
