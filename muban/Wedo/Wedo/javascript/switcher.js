window.console =
  window.console ||
  (function () {
    var e = {};
    e.log =
      e.warn =
      e.debug =
      e.info =
      e.error =
      e.time =
      e.dir =
      e.profile =
      e.clear =
      e.exception =
      e.trace =
      e.assert =
        function () {};
    return e;
  })();

$(document).ready(function () {
  var e =
    '<div class="switcher-container">' +
    '<h2>Style Selector<a href="#" class="sw-click"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#fff" data-original="#fff"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0c-43.446 0-78.667-35.22-78.667-78.667 0-43.446 35.221-78.666 78.667-78.666 43.446 0 78.667 35.22 78.667 78.666C78.667-35.22 43.446 0 0 0Zm220.802-22.53-21.299-17.534c-24.296-20.001-24.296-57.204 0-77.205l21.299-17.534c7.548-6.214 9.497-16.974 4.609-25.441l-42.057-72.845c-4.889-8.467-15.182-12.159-24.337-8.729l-25.835 9.678c-29.469 11.04-61.688-7.561-66.862-38.602l-4.535-27.213c-1.607-9.643-9.951-16.712-19.727-16.712h-84.116c-9.776 0-18.12 7.069-19.727 16.712l-4.536 27.213c-5.173 31.041-37.392 49.642-66.861 38.602l-25.834-9.678c-9.156-3.43-19.449.262-24.338 8.729l-42.057 72.845c-4.888 8.467-2.939 19.227 4.609 25.441l21.3 17.534c24.295 20.001 24.295 57.204 0 77.205l-21.3 17.534c-7.548 6.214-9.497 16.974-4.609 25.441l42.057 72.845c4.889 8.467 15.182 12.159 24.338 8.729l25.834-9.678c29.469-11.04 61.688 7.561 66.861 38.602l4.536 27.213c1.607 9.643 9.951 16.711 19.727 16.711h84.116c9.776 0 18.12-7.068 19.727-16.711l4.535-27.213c5.174-31.041 37.393-49.642 66.862-38.602l25.835 9.678c9.155 3.43 19.448-.262 24.337-8.729l42.057-72.845c4.888-8.467 2.939-19.227-4.609-25.441z" style="stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(256 334.666)" fill="none" stroke="#fff" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#fff" class=""></path></g></g></svg></a></h2>' +
    '<div class="selector-box">' +
    '<div class="clearfix"></div>' +
    '<div class="sw-odd"><h3>Color:</h3>' +
    '<div class="ws-colors">' +
    '<a href="#" class="styleswitch" id="color1">' +
    "Color1" +
    "</a>" +
    '<a href="#" class="styleswitch" id="color2">' +
    "Color2" +
    "</a>" +
    '<a href="#" class="styleswitch" id="color3">' +
    "Color3" +
    "</a>" +
    '<a href="#" class="styleswitch" id="color4">' +
    "Color4" +
    "</a>" +
    '<a href="#" class="styleswitch" id="color5">' +
    "Color5" +
    "</a>" +
    '<a href="#" class="styleswitch" id="color6">' +
    "Color6" +
    "</a>" +
    "</div></div>" +
    '<div class="clearfix"></div>' +
    "</div>" +
    "</div>";
  $("body").append(e);
  switchAnimate.loadEvent();
  switchColor.loadEvent();
});

var switchColor = {
  colorObj: {
    colorCookie: "colorCookie",
    switchClass: ".styleswitch",
    currentClass: "current",
    headLink: "head link[id=colors]",
    colorItem: ".ws-colors a.styleswitch",
    reset: "#reset",
    defaultColor: "color1",
  },
  loadEvent: function () {
    var e = switchColor.colorObj;
    if ($.cookie(e.colorCookie)) {
      switchColor.setColor($.cookie(e.colorCookie));
    } else {
      switchColor.setColor(e.defaultColor);
    }
    $(e.colorItem).on("click", function () {
      var e = $(this).attr("id");
      switchColor.setColor(e);
    });
    $(e.reset).on("click", function () {
      switchColor.setColor(e.defaultColor);
    });
  },
  setColor: function (e) {
    var t = switchColor.colorObj;
    $.cookie(t.colorCookie, e);
    $(t.headLink).attr("href", "stylesheets/colors/" + e + ".css");

    $(t.switchClass).removeClass(t.currentClass);
    $("#" + e).addClass(t.currentClass);

    //set color for text in content
    if ($(".infomation.text-center h3").length === 1) {
      var hiText = $(".infomation.text-center h3")
        .closest(".section")
        .css("background-color")
        .toString();
      if (hiText === "rgb(91, 91, 91)")
        $(".infomation.text-center h3").css("color", "#fff");
    }
  },
};

var switchAnimate = {
  loadEvent: function () {
    $(".switcher-container h2 a.sw-click").on("click", function (e) {
      var t = $(".switcher-container");

      if (t.css("right") === "-290px") {
        $(".switcher-container").animate({ right: "0" }, 300, "easeInOutExpo");
      } else {
        $(".switcher-container").animate(
          { right: "-290px" },
          300,
          "easeInOutExpo"
        );
      }

      e.preventDefault();
    });
  },
};
