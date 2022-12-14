/*
 * Copyright (c) 2022 marketify
 * Author: marketify
 * This file is made for this template
*/


(function($){
  "use strict";
  
  
	var PicmanInit = {
		
		
		init: function(){
			PicmanInit.colorPicker();
			PicmanInit.switcherOpener();
			PicmanInit.addModal();
			PicmanInit.cursor();
			PicmanInit.BgImg();
			PicmanInit.imgToSVG();
			PicmanInit.heroInteractive();
			PicmanInit.scrollFunctions();
			PicmanInit.totopClick();
			PicmanInit.magnific();
			PicmanInit.counter();
			PicmanInit.calcWidth();
			PicmanInit.accordion();
			PicmanInit.blogModal();
			PicmanInit.serviceModal();
			PicmanInit.portfolio();
			PicmanInit.anchor();
			PicmanInit.contactForm();
			PicmanInit.subscribe();
			PicmanInit.testimonials();
			PicmanInit.tilt();
			PicmanInit.triggerMenu();
		},
		
		colorPicker: function(){
			
			if($('.picman_tm_settings').length){
				// color picker via external JS
				var picker = new CP($('.picman_tm_settings .picker input[type="text"]')[0]);
				picker.on("change", onChange);
				function onChange(r, g, b, a) {
					this.source.value = this.color(r, g, b, a);
					$(':root').css('--main-color', this.color(r, g, b, a));
				}


				// attach background for all colors
				var list	= $('.picman_tm_settings .colors li a');
				list.each(function(){
					$(this).css({backgroundColor: $(this).data('color')});
				});

				// change root color
				list.on('click',function(){
					var element = $(this);
					var color	= element.data('color');
					$(':root').css('--main-color', color);
					return false;
				});	
			}
			
		},
		switcherOpener: function(){
			var settings	= $('.picman_tm_settings');
			var button		= settings.find('.link');

			button.on('click',function(){
				var element = $(this);
				if(element.hasClass('opened')){
					element.removeClass('opened');
					settings.removeClass('opened');
				}else{
					element.addClass('opened');
					settings.addClass('opened');
				}
				return false;
			});
			settings.find('.cursor a').on('click',function(){
				var element = $(this);
				if(!element.hasClass('showme')){
					if(element.hasClass('show')){
						settings.find('.hide').removeClass('showme');
						element.addClass('showme');
						$('.picman_tm_all_wrap').attr('data-cursor', 'show');
					}else{
						settings.find('.show').removeClass('showme');
						$('.picman_tm_all_wrap').attr('data-cursor', 'hide');
						element.addClass('showme');
					}
				}
				return false;
			});
		},
		
		portfolioPause: function(action){
			var button			= $('.picman_tm_portfolio a');
			var closer			= $('.picman_tm_modalbox .close');
			button.on('click',function(){
				var element 	= $(this);
				var parent 		= element.closest('.image');
				var porfolio	= element.closest('.picman_tm_portfolio');
				porfolio.addClass('hovered');
				parent.addClass('clicked');
			});
			closer.on('click',function(){
				$('.picman_tm_portfolio').removeClass('hovered');
				$('.picman_tm_portfolio').find('.image').removeClass('clicked');
			});
			if(action === 'remove'){
				$('.picman_tm_portfolio').removeClass('hovered');
				$('.picman_tm_portfolio').find('.image').removeClass('clicked');
			}
		},
		
		portfolioPopup: function(){
			var modalBox		= $('.picman_tm_modalbox');
			var button			= $('.picman_tm_portfolio .portfolio_popup');
			var closePopup		= modalBox.find('.close');

			button.off().on('click',function(){
				var element 	= $(this);
				var parent 		= element.closest('.image');
				var content	 	= parent.find('.hidden_content').html();
				var image		= parent.find('.img_in').children('.main').data('img-url');
				var category 	= parent.data('category');
				var title	 	= parent.data('title');
				var porfolio	= element.closest('.picman_tm_portfolio');
				porfolio.addClass('hovered');
				parent.addClass('clicked');
				modalBox.addClass('opened');
				modalBox.find('.description_wrap').html(content);
				modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
				modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3>'+title+'</h3><span><a href="#">'+category+'</a></span><div>');
				PicmanInit.BgImg();
				return false;
			});
			closePopup.on('click',function(){
				modalBox.removeClass('opened');
				modalBox.find('.description_wrap').html('');
				$('.picman_tm_portfolio').removeClass('hovered');
				$('.picman_tm_portfolio').find('.image').removeClass('clicked');
				return false;
			});
		},
		
		portfolioHover: function(){
			var moving		= $('.picman_tm_portfolio_titles');
			$('.picman_tm_portfolio .image').on('mouseenter', function() {
				var element = $(this);
				if (element.data('title')) {
					moving.html(element.data('title') + '<span class="work__cat">' + element.data('category') + '</span>');
					moving.addClass('visible');
				}
				$(document).on('mousemove', function(e) {
					moving.css({
						left: e.clientX - 10,
						top: e.clientY + 25
					});
				});
			}).on('mouseleave', function() {
				moving.removeClass('visible');
			});	
		},
		
		triggerMenu: function(){
			var hamburger 		= $('.hamburger');
			var mobileMenu		= $('.picman_tm_mobile_menu .dropdown');
			var mobileMenuList	= mobileMenu.find('a');

			hamburger.on('click',function(){
				var element 	= $(this);

				if(element.hasClass('is-active')){
					element.removeClass('is-active');
					mobileMenu.slideUp();
				}else{
					element.addClass('is-active');
					mobileMenu.slideDown();
				}
				return false;
			});

			mobileMenuList.on('click',function(){
				$('.hamburger').removeClass('is-active');
				mobileMenu.slideUp();
				return false;
			});	
		},
		
		preloader: function(){
			var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
			var preloader = $('#preloader');
			
			setTimeout(function(){
				if (!isMobile) {
					setTimeout(function() {
						preloader.addClass('preloaded');
					}, 800);
					setTimeout(function() {
						preloader.remove();
					}, 2000);

				} else {
					preloader.remove();
				}
			},500);
		},
		
		tilt: function(){
			$('.tilt-effect').tilt({
				maxTilt: 6,
				easing: "cubic-bezier(.03,.98,.52,.99)",
				speed: 500,
				transition: true
			});
		},
		
		testimonials: function(){
			var	interleaveOffset 	= 0.5;
			var quoteSwiper = new Swiper('.quote-slider', {
//			  	direction: "vertical",
			  	effect: "slide",
				speed: 1500,
				spaceBetween: 50,
				navigation: {
					nextEl: $('.left_slider .next'),
					prevEl: $('.left_slider .prev'),
				},
			  	//autoHeight: true,
			  	loop: false, // Not recommended to enable!!!
			  	allowTouchMove: false
			});
			var mainSliderSelector	= $('.image-slider');
			var mainSliderOptions 	= {
				loop: false,
				speed: 1500,
				autoplay:{
					delay: 7000
				},
				slidesPerView: 1,
				watchSlidesProgress: true,
				on: {
					init: function(){
						this.autoplay.stop();
					},
					imagesReady: function(){
						this.autoplay.start();
					},
					progress: function(){
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress 	= swiper.slides[i].progress,
							innerOffset 		= swiper.width * interleaveOffset,
							innerTranslate 		= slideProgress * innerOffset;
							$(swiper.slides[i]).find(".main").css({transform: "translateX(" + innerTranslate + "px)"});
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".main").style.transition =
							speed + "ms";
						}
					}
				}
			};
			var imageSwiper = new Swiper(mainSliderSelector, mainSliderOptions);

			quoteSwiper.controller.control = imageSwiper;
			imageSwiper.controller.control = quoteSwiper;
		},
		
		anchor: function(){
			var topbar;
	
			$('.picman_tm_hero .booking a,.anchor').on('click',function(){
				if($('.picman_tm_header:visible').length){
					topbar = $('.picman_tm_header').outerHeight();
				}else{
					topbar = $('.picman_tm_mobile_menu .mobile_menu_inner').outerHeight();
				}
				if($.attr(this, 'href') !== '#'){
					var element = $($.attr(this, 'href'));
					if(element.length){
						$('html, body').animate({
							scrollTop: element.offset().top-topbar
						}, 800);
					}
						
				}
				return false;
			});	
		},
		
		portfolioItem : function(URL,image){
			var html="";1===image?image="42-29":image="90-113",html+='<div class="image">',html+='<div class="img_in">',html+='<img src="img/thumbs/'+image+'.jpg" alt="">',html+='<div class="main" data-img-url="'+URL+'"></div>',html+="</div>",html+="</div>";return html;
		},
		
		portfolio: function(){
			$('.picman_tm_portfolio').each(function(i){
				var element	= $(this);
				var name	= 'marketifyScroll'+i;
				var width	= element.data('width');
				var gap		= element.data('gap');
				element.html(element.html().repeat(3));
				PicmanInit.BgImg();
				var items	= element.find('.items');
				items.css({minWidth: width + 'px'});
				element.find('.image').css({padding: parseInt(gap/2) + 'px'});
				var item_C	= items.length;
				var n = width*item_C/3;
				element.css({animationName: name});
				$('body').append('<style>@-webkit-keyframes '+name+' { 100% {-webkit-transform:translateX(-'+n+'px);transform: translateX(-'+n+'px);}} @keyframes '+name+' {100% {-webkit-transform: translateX(-'+n+'px);transform: translateX(-'+n+'px);}}</style>');
				PicmanInit.portfolioHover();
				PicmanInit.magnific();
				PicmanInit.portfolioPopup();
				PicmanInit.portfolioPause();
			});
		},
		validateEmail: function (email){
			var re = /\S+@\S+\.\S+/;return re.test(email);
		},
		
		subscribe: function(){
			$(".picman_tm_subscribe a").on('click', function(){
				var parent		= $(this).closest('.picman_tm_subscribe');
				var email		= parent.find('input').val();
				var echoM		= parent.find(".returnmessage");
				var success     = echoM.data('success');
				var message     = echoM.data('message');
				echoM.empty(); //To empty previous error/success message.
				if(email === ''){
					parent.find('.empty_notice').slideDown(500).delay(2000).slideUp(500);
				}
				if(PicmanInit.validateEmail(email)){
					$.post("modal/subscribe.php",{ ajax_email: email, ajax_message: message}, function(data) {
						echoM.append(data);//Append returned message to message paragraph
						echoM.append("<span class='contact_success'>" + success + "</span>");
						echoM.slideDown(500).delay(4000).slideUp(500);
						parent.find('input').val('');
					});
				}
				return false;
			});
		},
		
		contactForm: function(){
			jQuery(".contact_form #send_message").on('click', function(){
				var name 		= jQuery(".contact_form #name").val();
				var email 		= jQuery(".contact_form #email").val();
				var phone 		= jQuery(".contact_form #phone").val();
				var message 	= jQuery(".contact_form #message").val();
				var success     = jQuery(".contact_form .returnmessage").data('success');

				jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
				//checking for blank fields	
				if(name===''||email===''||message===''){

					jQuery('.contact_form div.empty_notice').slideDown(500).delay(2000).slideUp(500);
				}
				else{
					// Returns successful data submission message when the entered information is stored in database.
					jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_phone: phone, ajax_message:message}, function(data) {

						jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


						if(jQuery(".contact_form .returnmessage span.contact_error").length){
							jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
						}else{
							jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
							jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
						}

						if(data===""){
							jQuery("#contact_form")[0].reset();//To reset form fields on success
						}

					});
				}
				return false; 
			});
		},
		
		cursor: function(){
			var myCursor	= $('.mouse-cursor');
	
			if(myCursor.length){
				if ($("body")) {
					const e 	= document.querySelector(".cursor-inner"),
						t 		= document.querySelector(".cursor-outer");
					let n, i 	= 0,
						o 		= !1;
					window.onmousemove = function (s) {
						o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
					}, $("body").on("mouseenter", "a,.picman_tm_settings .picker input, .hamburger, .picman_tm_accordion .acc_head, .cursor-pointer", function () {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
					}), $("body").on("mouseleave", "a,.picman_tm_settings .picker input, .hamburger, .picman_tm_accordion .acc_head, .cursor-pointer", function () {
						$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
					}), e.style.visibility = "visible", t.style.visibility = "visible"
				}
			}	
		},
		
		addModal: function(){
			$('.picman_tm_all_wrap').prepend('<div class="picman_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');	
		},
		
		blogModal: function(){
			var modalBox		= $('.picman_tm_modalbox');
			var button			= $('.picman_tm_blog .picman_tm_full_link,.picman_tm_blog ul li .details .title a');
			var closePopup		= modalBox.find('.close');

			button.on('click',function(){
				var element 	= $(this);
				var parent 		= element.closest('.list_inner');
				var content 	= parent.find('.news_hidden_details').html();
				var image		= element.closest('.list_inner').find('.image .main').data('img-url');
				var category	= parent.find('.details .category').html();
				var title	 	= parent.find('.details .title a').text();
				modalBox.addClass('opened');
				modalBox.find('.description_wrap').html(content);
				modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
				modalBox.find('.news_popup_informations .image').after('<div class="details"><h3>'+title+'</h3><span>'+category+'</span><div>');
				PicmanInit.BgImg();
				return false;
			});
			closePopup.on('click',function(){
				modalBox.removeClass('opened');
				modalBox.find('.description_wrap').html('');
				return false;
			});	
		},
		
		
		serviceModal: function(){
			var modalBox		= jQuery('.picman_tm_modalbox');
			var button			= jQuery('.picman_tm_services .picman_tm_full_link');
			var closePopup		= modalBox.find('.close');

			button.on('click',function(){
				var element = jQuery(this);
				var parent	= element.closest('.picman_tm_services .list li');
				var elImage	= parent.find('.popup_service_image').attr('src');
				var title	= parent.find('.title').text();
				var content = parent.find('.service_hidden_details').html();
				modalBox.addClass('opened');
				modalBox.find('.description_wrap').html(content);
				modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+elImage+'"></div></div>');
				PicmanInit.BgImg();
				modalBox.find('.service_popup_informations .image').after('<div class="main_title"><h3>'+title+'</h3></div>');
				return false;
			});
			closePopup.on('click',function(){
				modalBox.removeClass('opened');
				modalBox.find('.description_wrap').html('');
				return false;
			});
		},
		
		accordion: function(){
			var acc		= $('.picman_tm_accordion'),
				s		= 300,
				a		= 'swing';
			acc.each(function(){
				var element = $(this);
				var active 	= element.data('active');
				element.find('.accordion_in:nth-child('+active+')').addClass('acc_active');
				element.find('.accordion_in:nth-child('+active+') .acc_content').slideDown({duration:s,easing:a});
			});
			var head 	= $('.picman_tm_accordion .acc_head');
			head.off().on('click',function(){
				var e 	= $(this),
					p 	= e.closest('.picman_tm_accordion'),
					c 	= e.closest('.accordion_in'),
					t	= p.data('type');
				if(!c.hasClass('acc_active')){
					if(t === 'accordion'){
						p.find('.acc_active').removeClass('acc_active').find('.acc_content').slideUp({duration:s,easing:a});
					}
					c.addClass('acc_active').find('.acc_content').slideDown({duration:s,easing:a});
				}else{
					c.removeClass('acc_active').find('.acc_content').slideUp({duration:s,easing:a});
				}
			});
		},
		
		calcWidth: function(){
			var rowWidth 	= $('.picman_tm_services .row').outerWidth();
			var leftWidth 	= $('.picman_tm_services .left_part').outerWidth();
			var ww			= $(window).width();
			$('.picman_tm_services .right_part').css({width: ((ww-rowWidth)/2 + leftWidth*2/3) + 'px'});
		},
		
		counter: function(){
			$('.picman_tm_counter').each(function() {
			var el		= $(this);
				el.waypoint({
					handler: function(){
						if(!el.hasClass('stop')){
							el.addClass('stop').countTo({
								refreshInterval: 50,
								formatter: function (value, options) {
									return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
								},	
							});
						}
					},offset:'95%'	
				});
			});	
		},
		
		magnific: function(){
			$('.gallery_zoom').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					delegate: 'a.zoom', // the selector for gallery item
					type: 'image',
					gallery: {
					  enabled:true
					},
					removalDelay: 300,
					mainClass: 'mfp-fade'
				});

			});
			$('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					disableOn: 700,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: true,
					callbacks: {
						open: function() {
						  $.magnificPopup.instance.close = function() {
							// Call the original close method to close the popup
							$.magnificPopup.proto.close.call(this);
							  PicmanInit.portfolioPause('remove');
						  };
						}
				  	}
				});
			});

			$('.soundcloude_link').magnificPopup({
			  type : 'image',
			   gallery: {
				   enabled: true, 
			   },
				callbacks: {
					open: function() {
					  $.magnificPopup.instance.close = function() {
						// Call the original close method to close the popup
						$.magnificPopup.proto.close.call(this);
						  PicmanInit.portfolioPause('remove');
					  };
					}
				}
			});
		},
		
		scrollFunctions: function (){
			var menu	 		= $('.picman_tm_header,.picman_tm_social,.progressbar');
			var WinOffset		= $(window).scrollTop();

			if(WinOffset >= 100){
				menu.addClass('animate');
			}else{
				menu.removeClass('animate');
			}
		},
		
		totopClick: function (){
			var text 			= $('.progressbar .text');
			text.css({bottom: 105 + text.width()});
			$(".progressbar a").off().on('click', function(e) {
				e.preventDefault();    
				$("html, body").animate({ scrollTop: 0 }, 'slow');
				return false;
			});
		},
		
		totopHeight: function (){
			var line			= $('.progressbar .line');
			var documentHeight 	= $(document).height();
			var windowHeight 	= $(window).height();
			var winScroll 		= $(window).scrollTop();
			var value 			= (winScroll/(documentHeight-windowHeight))*100;

			line.css('height',value+"%");
		},
		
		heroInteractive: function(){
			var list			= $('.picman_tm_hero .project_list_wrap .list li');
			
			list.on('mouseenter',function(){
				var element 		= $(this);
				var index 			= element.index(); 	// index starts from 0 (not 1)
				var parent			= element.closest('.picman_tm_hero');
				var galleryList		= parent.find('.gallery_list_wrap ul li');
				var childNumber		= index+1;			// get same child number from second list
				if(!element.hasClass('active')){
					list.removeClass('active');
					element.addClass('active');
					galleryList.removeClass('active');
					parent.find('.gallery_list_wrap ul li:nth-child('+childNumber+')').addClass('active');
				}
			});
		},
		
		imgToSVG: function(){
			$('img.svg').each(function(){
				var img 		= $(this);
				var imgClass	= img.attr('class');
				var imgURL		= img.attr('src');

				$.get(imgURL, function(data) {
					var svg 	= $(data).find('svg');
					if(typeof imgClass !== 'undefined') {
						svg 	= svg.attr('class', imgClass+' ready-svg');
					}
					img.replaceWith(svg);

				}, 'xml');

			});	
		},

	  	BgImg: function(){
			$('*[data-img-url]').each(function(){
				var element = $(this);
				var attrBg	= element.attr('data-img-url');
				if(typeof(attrBg) !== 'undefined' && attrBg !== ''){
					element.css({backgroundImage:'url('+attrBg+')'});
				}
			});
		},
  	};
  	
	
	
	$(document).ready(function(){
		PicmanInit.init();
	});
	
	$(window).on('resize',function(){
		PicmanInit.calcWidth();
	});
	
//	$(window).on('load',function(){
//		PicmanInit.preloader();
//	});
	
	$(window).load('body',function(){
		PicmanInit.preloader();
	});

	$(window).on('scroll',function(){
		PicmanInit.totopHeight();
		PicmanInit.scrollFunctions();
	});
  
})(jQuery);

	jQuery('.anchor_nav').onePageNav();

 	new WOW().init();

$(".glitch").mgGlitch({
	destroy: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: "hue",
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100
});



