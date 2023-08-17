(function ($) {

        "use strict";

        const wind = $(window);
        const body = $("body");


        preloader();
        const effectScroll = effectScroller();
        const animate = effectAnimate();
        const prSlider = projectSlider();
        var menuP;


        wind.on("load", function () {
            navMenu().init();
            dsnGrid.removeWhiteSpace(".site-header ul.extend-container li > a");
            effectBackForward();
            reloadAjax();
            $(".day-night").on("click", function () {
                body.toggleClass("v-light");
            });
        });


        /**
         * Execute data after ajax
         */
        function reloadAjax($off) {
            changeColor();
            effectScroll.start();
            animate.allInt();
            slider().run();
            justifiedGallery();
            zoomGallery();
            magnificPopup();
            $("a.vid").YouTubePopUp();
            dsnAjax().ajaxLoad();
            data_overlay();
            background();
            initMap();
            work($off);
            loadMore();
            prSlider.run();
            mouseCirMove($off);
            accordion($off);
            services_tab($off);
            contactValidator();

            $(".embed-3d-dimensions").on("click", function (e) {
                $(this).toggleClass("active-3d-dimensions");
            });

            $("[data-dsn-cutter=\"html\"]").each(function () {
                dsnGrid.getData(this, "cutter");
                dsnGrid.cutterHtml(this);
            });
            ImgPosition();
            setTimeout(function () {
                dropHash();

                animate.dsnScrollTop();
                if (!$off)
                    menuP = effctStickyNavBar();
                else if (menuP) {
                    menuP.t1.kill();
                    menuP.t2.kill();
                    $(".site-header").css({
                        paddingTop: "",
                        paddingBottom: "",
                        backgroundColor: "",
                        top: "",
                    });

                    menuP = effctStickyNavBar();
                }

            }, 500);
        }


        function ImgPosition() {
            $("[data-dsn-position]").each(function () {
                if (this.nodeName === "IMG")
                    $(this).css("object-position", dsnGrid.getData(this, "position", "center"));
                else
                    $(this).css("background-position", dsnGrid.getData(this, "position", "center"));
            });
        }

        function dropHash() {

            $("a[href=\"#\"]").on("click", function (e) {
                e.preventDefault();
            });

            $("[href*=\"#\"]:not([href=\"#\"])").on("click", function (e) {
                e.preventDefault();
                let href = $($(this).attr("href"));
                if (!href.length) {
                    href = null;
                    return false;
                }

                dsnGrid.scrollTop(href.get(0).offsetTop, 1, -100);
                href = null;

            });

            if (window.location.hash.length) {
                wind.scrollTop(0);
                dsnGrid.scrollTop(window.location.hash, 1, -100);
            }


        }

        function accordion($off) {
            let acc = $(".accordion__question");
            if (!acc.length) {
                acc = null;
                return;
            }
            if ($off)
                acc.off("click");
            acc.on("click", function () {
                let content = $(this).next();
                $(".accordion__answer").not(content).slideUp(400);
                $(".accordion__question").not(this).removeClass("expanded");
                $(this).toggleClass("expanded");
                content.slideToggle(400);
                content = null;
            });
        }

        function changeColor() {
            $("[data-dsn-bg]").each(function () {
                let bg = dsnGrid.getData(this, "bg");
                let color = dsnGrid.getData(this, "color");
                if (bg)
                    $(this).css("background-color", bg);
                if (bg) {
                    $(this).css("color", color);
                    $(this).addClass("section-dsn-color");

                }


                bg = null;
            });
        }

        function projectSlider() {
            let dsnSwiper = [],
                dsnslick = [];

            return {
                destory: function () {

                    for (let s of dsnslick) {
                        s.slick("unslick");
                        s = null;
                    }

                    for (let s of dsnSwiper) {
                        s.destroy();
                        s = null;
                    }


                    dsnSwiper = [];
                    dsnslick = [];

                },
                bySwiper: function ($id, $obj) {

                    dsnGrid.convertToJQuery($id).each(function () {
                        let $s = new Swiper($(this).find(".swiper-container"), {
                            slidesPerView: "auto",
                            spaceBetween: 80,
                            allowTouchMove: true,
                            grabCursor: true,

                            resistanceRatio: 0.65,
                            watchSlidesProgress: true,
                            slidesPerViewFit: false,
                            roundLengths: "false",
                            speed: 1000,
                            navigation: {
                                nextEl: $(this).find("[data-cursor=\"next\"]"),
                                prevEl: $(this).find("[data-cursor=\"prev\"]"),
                            },
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: true,
                            },
                        });
                        dsnSwiper.push($s);
                        $s = $obj = null;
                    });

                },
                bySlick: function ($id, $obj) {
                    dsnGrid.convertToJQuery($id).each(function () {
                        $obj = $.extend(true, {
                            speed: 700,
                            prevArrow: "<div data-cursor=\"prev\"></div>",
                            nextArrow: "<div data-cursor=\"next\"></div>",
                            responsive: [
                                {
                                    breakpoint: 992,
                                    settings: {
                                        dots: !$(this).hasClass("dsn-not-dot"),
                                    },
                                },
                            ],

                        }, $obj || {});
                        if ($(this).hasClass("dsn-is-not-fade"))
                            $obj["fade"] = false;
                        let $s = $(this).slick($obj);
                        dsnslick.push($s);
                        $s = $obj = null;
                    });
                },
                run: function () {
                    this.destory();
                    this.bySwiper(".slider-project-swiper");

                    this.bySlick(".proj-slider-image");
                    this.bySlick("[data-dsn-col=\"3\"]:not(.dsn-not-dot) .slick-slider", {
                        infinite: true,
                        slidesToShow: 3,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ],
                    });
                    this.bySlick("[data-dsn-col=\"3\"].dsn-not-dot .slick-slider", {
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        slidesToShow: 3,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    dots: false,
                                },
                            },
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                    dots: false,
                                },
                            },
                        ],
                    });
                    this.bySlick(".testimonials-main-content", {
                        slidesToShow: 1,
                        // arrows : false,
                        asNavFor: ".testimonials-nav",
                        loop: true,
                        autoplay: false,
                        centerMode: true,
                        infinite: true,
                        speed: 700,
                        adaptiveHeight: true,
                        fade: true,
                        cssEase: "cubic-bezier(.9, .03, .41, .49)",
                        nextArrow: "<i class=\"fas fa-angle-right\"></i>",
                        prevArrow: "<i class=\"fas fa-angle-left\"></i>",
                    });
                    this.bySlick(".testimonials-nav", {
                        slidesToShow: 3,
                        asNavFor: ".testimonials-main-content",
                        vertical: true,
                        focusOnSelect: true,
                        loop: true,
                        autoplay: false,
                        arrows: false,
                        centerMode: true,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    vertical: false,
                                    centerMode: false,
                                    dots: false,
                                },
                            },
                            {
                                breakpoint: 576,
                                settings: {
                                    slidesToShow: 2,
                                    vertical: false,
                                    centerMode: false,
                                },
                            }, {
                                breakpoint: 400,
                                settings: {
                                    slidesToShow: 2,
                                    vertical: true,
                                    centerMode: false,
                                },
                            },
                        ],
                    });
                    this.bySlick(".testimonials-slider", {
                        ariableWidth: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                    });
                    this.bySlick("[data-dsn-col=\"1\"] .slick-slider", {
                        infinite: true,
                        slidesToShow: 1,
                    });
                    this.bySlick("[data-dsn-col=\"2\"] .slick-slider", {
                        infinite: true,
                        slidesToShow: 2,
                        arrows: false,
                        responsive: [

                            {
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },

                        ],
                    });
                    this.bySlick("[data-dsn-col=\"5\"] .slick-slider", {
                        autoplay: true,
                        infinite: true,
                        slidesToShow: 5,
                        arrows: false,
                        responsive: [

                            {
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                },
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                },
                            },

                        ],
                    });


                },
            };

        }


        /***
         *
         * Loading Page
         *
         */
        function preloader() {
            let preloader = $(".preloader"),
                progress_number = preloader.find(".percent"),
                progress_title = preloader.find(".title .text-fill"),
                persent = {value: 0},
                preloader_bar = preloader.find(".preloader-bar"),
                preloader_progress = preloader_bar.find(".preloader-progress");


            let timer = dsnGrid.pageLoad(0, 100, 1000, function (val) {
                progress_number.text(val);
                persent.value = val;
                progress_title.css("clip-path", "inset(" + (100 - val) + "% 0% 0% 0%)");
                preloader_progress.css("width", val + "%");

            });


            wind.on("load", function () {

                clearInterval(timer);
                new TimelineLite()
                    .to(persent, 1, {
                        value: 100, onUpdate: function () {
                            progress_number.text(persent.value.toFixed(0));
                            progress_title.css("clip-path", "inset(" + (100 - persent.value) + "% 0% 0% 0%)");
                            preloader_progress.css("width", persent.value + "%");
                        },
                    })
                    .set(preloader_progress, {backgroundColor: "#090909"})
                    .to(preloader_bar, 0.5, {height: "100%"})
                    .to(persent, 0.4, {
                        value: 0, onUpdate: function () {
                            progress_title.css("clip-path", "inset(" + (100 - persent.value) + "% 0% 0% 0%)");
                        },
                    }, "-=0.4")
                    .to(persent, 0.8, {
                        value: 100, onUpdate: function () {
                            preloader.css("clip-path", "inset(" + (persent.value) + "% 0% 0% 0%)");
                        },
                        ease: Power2.easeInOut,
                    }, "+=0.1")
                    .call(function () {
                        preloader.remove();
                        timer = preloader = progress_number = progress_title = persent = preloader_bar = preloader_progress = null;
                    })
                ;

            });


        }

        /**
         * Ajax Load More
         */
        function loadMore() {

            const button = $(".button-loadmore");
            if (!button.length) return;


            button.off("click");
            button.on("click", function () {
                let page = $(this).attr("data-page"),
                    layout = $(this).attr("data-layout"),
                    progress = button.find(".dsn-load-progress-ajax"),
                    progress_text_load_more = button.find(".progress-text.progress-load-more"),
                    progress_text_no_more = button.find(".progress-text.progress-no-more"),
                    old_text = progress_text_load_more.text();


                $(this).attr("data-page", parseInt(page, 10) + 1);
                $.ajax({
                    url: "ajax/" + layout + "-" + page + ".html",
                    beforeSend: function () {
                        button.addClass("dsn-loading");
                    },
                    success: function (data) {
                        data = $(data).filter(".work-item-box");
                        TweenLite.fromTo(data, 1, {autoAlpha: 0, scale: 0}, {
                            autoAlpha: 1,
                            scale: 1,
                            ease: Back.easeOut.config(1.7),
                        });
                        button.prev().append(data);
                        button.removeClass("dsn-loading");
                        progress.css("width", 0);
                        button.find(".progress-text.progress-load-more").text(old_text);
                        progress_text_no_more.hide();
                        setTimeout(function () {
                            animate.parallaxImg();
                            work(true);
                            dsnAjax().ajaxLoad();
                            zoomGallery();
                            mouseCirMove(true);
                        }, 100);

                    },
                    error: function (error) {
                        button.removeClass("dsn-loading");
                        progress.css("width", 0);
                        progress_text_load_more.text(old_text);
                        progress_text_no_more.hide();
                        button.off("click");
                        progress_text_load_more.hide();
                        progress_text_no_more.show();


                    },
                    xhrFields: {
                        onprogress: function (e) {
                            if (e.lengthComputable) {
                                let p = e.loaded / e.total * 100;
                                progress.css("width", p + "%");
                                progress_text_load_more.text(p + "%");
                            }
                        },
                    },
                }).done(function () {
                    page = layout = progress = progress_text_load_more = progress_text_no_more = old_text = null;
                });
            });


        }


        function work($off) {
            let filterButton = $(".filterings"),
                filterBox = $(".filters-content"),
                tl;


            if ($off) filterButton.off("click");
            filterButton.on("click", function () {
                tl = new TimelineLite();
                tl.set(filterBox, {y: "0%"});
                tl.to(filterBox, 1, {autoAlpha: 1});
                tl.staggerFromTo(filterBox.find("button"), 0.4, {opacity: 0, y: 30}, {
                    opacity: 1,
                    y: 0,
                    ease: Back.easeOut.config(1.7),
                }, 0.1);

                dsnGrid.scrollTop(".work-inner", 1);

            });

            if ($off) filterBox.find("> .close-wind").off("click");
            filterBox.find("> .close-wind").on("click", function () {
                tl.reverse();
                tl.call(function () {
                    tl = null;
                });
            });


            /* filter items on button click
                -------------------------------------------------------*/
            if ($off) filterBox.find("button").off("click");
            filterBox.find("button").on("click", function () {
                $(this).siblings().removeClass("active");
                TweenMax.to(this, 0.5, {
                    css: {className: "+=active"}, ease: Back.easeOut.config(1.7),
                });

                $(".projects-list").isotope({
                    filter: $(this).attr("data-filter"),
                });

            });

            $(".projects-list , .our-work").find("video").each(function () {
                this.pause();
                let $this = $(this);
                if ($off) $this.off("mouseenter").off("mouseleave");
                $this.parents(".work-item").on("mouseenter", function () {
                    $(this).find("video").get(0).play();
                }).on("mouseleave", function () {
                    $(this).find("video").get(0).pause();
                });
                $this = null;
            });


        }


        /**
         *  -   event will be triggered by doing browser action such as
         *  a click on the back or forward button
         */


        function effectBackForward() {
            wind.on("popstate", function (e) {
                if (window.location.hash.length) {
                    wind.scrollTop(0);
                    dsnGrid.scrollTop(window.location.hash, 1, -100);
                    return;
                }
                if (document.location.href.indexOf("#") > -1) {
                    return;
                }
                setTimeout(function () {
                    dsnAjax().backAnimate(document.location);
                }, 100);
            });
        }


        function dsnAjax() {

            let main_root = "main.main-root",
                text_e_img = "[data-dsn-ajax=\"img\"]",
                text_e_title = "[data-dsn-ajax=\"title\"]",
                img_move, title_move,
                tl = new TimelineLite();


            return {
                mainRoot: $(main_root),
                ajaxClick: $("a.effect-ajax "),
                effectAjax: function ($add) {
                    if ($add)
                        body.addClass("dsn-ajax-effect");
                    else if ($add === false)
                        body.removeClass("dsn-ajax-effect");
                    else
                        return body.hasClass("dsn-ajax-effect");
                },

                setTitle: function (data) {
                    let title = data.match(/<title[^>]*>(.+)<\/title>/);
                    if (title)
                        $("head title").html(title[1]);
                    title = null;
                },
                setBodyClass: function (data) {
                    let cls = data.match(/<body[^>]*class="(.+)">/);
                    if (cls)
                        body.attr("class", cls[1]);
                    cls = null;
                },
                ajaxNormal: function () {
                    let elemnt_ajax = $("<div class=\"dsn-ajax-loader dsn-ajax-normal\"></div>");
                    body.append(elemnt_ajax);
                    tl.to(elemnt_ajax, 0.5, {scaleY: 1, ease: Circ.easeIn}, 0);
                    elemnt_ajax = null;
                },
                ajaxSlider: function ($e) {

                    let
                        active = $e.parents(".slide-content"),
                        id = active.data("dsn-id"),
                        img = $(".main-slider .slide-item[data-dsn-id=\"" + id + "\"] .cover-bg").first(),
                        title = active.find(".title");
                    img.removeClass("hidden");

                    this.dsnCreateElement(img, $(".bg-container"), title, title.find("a"));


                },
                ajaxNextProject: function ($e) {

                    let
                        active = $e.parents(".next-project"),
                        img = active.find(".img-next-box"),
                        title = active.find(".title");

                    active.addClass("dsn-active");
                    this.dsnCreateElement(img, active, title, title.find("a"));
                    active = img = title = null;

                },
                ajaxWork: function ($e) {

                    let
                        active = $e.parents(".work-item"),
                        img = active.find(".img-next-box"),
                        title = active.find("h4").addClass("dsn-cutter");


                    title.addClass("fw-600");
                    img.addClass("before-z-index");
                    active.addClass("dsn-active");

                    this.dsnCreateElement(img, active, title, title.find("a"));
                    tl.to(img_move.find("img"), 1, {height: "100%", top: "0%", y: "0"});

                    active = img = title = null;

                },
                addElement: function (container, $e, $target) {
                    if ($e === undefined || $e.length <= 0) return undefined;


                    if ($target === undefined || $target.length <= 0) {
                        $target = $e;
                    }

                    let $section = $e.clone();
                    let position = $target[0].getBoundingClientRect();
                    if (position === undefined) {
                        position = {
                            left: 0,
                            top: 0,
                        };
                    }
                    $section.css({
                        position: "absolute",
                        display: "block",
                        transform: "",
                        transition: "",
                        objectFit: "cover",
                    });
                    $section.css(dsnGrid.getBoundingClientRect($target[0]));


                    container.append($section);
                    return $section;
                },
                dsnCreateElement: function ($e, $target, $letter, $targetLtter) {

                    let container = $("<div class=\"dsn-ajax-loader\"></div>");
                    container.css("background-color", body.css("background-color"));
                    img_move = this.addElement(container, $e, $target);
                    title_move = this.addElement(container, $letter, $targetLtter);

                    if (title_move.hasClass("dsn-cutter")) dsnGrid.convertTextLine(title_move);

                    if (title_move) {
                        title_move.css("width", "max-content");
                        title_move.css("z-index", 2);
                    }

                    if (img_move)
                        img_move.css("z-index", 1);
                    body.append(container);
                    tl.to(container, 1, {autoAlpha: 1, ease: Power4.easeInOut});

                },
                completeElement: function (elAjax) {
                    let img = $(text_e_img);
                    let title = $(text_e_title);
                    if (!img.length && !title.length) {
                        let webkitClipPath = {value: "0%"};
                        tl.to(webkitClipPath, 1, {
                            value: "100%",
                            onUpdate: function () {
                                elAjax.css("clip-path", "inset(0% 0% " + webkitClipPath.value + " 0%)");
                            },
                            onComplete: function () {
                                webkitClipPath = null;
                            },
                            ease: Circ.easeIn,
                        });

                        return;
                    }

                    img = img.first();
                    let position = img.offset();
                    if (position === undefined) {
                        position = {
                            top: 0,
                            left: 0,
                        };
                    }

                    if (img_move.length)
                        tl.to(img_move, 0.8, {
                            top: position.top,
                            left: position.left,
                            width: img.width(),
                            height: img.height(),
                            objectFit: "cover",
                            borderRadius: 0,
                        });


                    if (title_move.length) {
                        title = title.first();
                        position = title.offset();
                        if (position === undefined) {
                            position = {
                                top: 0,
                                left: 0,
                            };
                        }


                        tl.to(title_move, 0.8, {
                            top: position.top,
                            left: position.left,

                        }, "-=0.8");

                        tl.to(title_move, 0.8, {
                            css: {className: "+=" + title.attr("class")},
                        }, "-=0.8");

                        if (title.parents(".v-middle-horizontal").length)
                            title_move.css("width", "max-content");
                        else
                            title_move.css("width", title.width());

                        if (title.find(".dsn-chars-wrapper").length) {
                            let currTrans = title.find(".dsn-chars-wrapper").css("transform").split(/[()]/)[1];
                            if (currTrans)
                                currTrans = currTrans.split(",")[5];
                            if (currTrans)
                                tl.staggerTo(
                                    dsnGrid.randomObjectArray(title_move.find(".dsn-chars-wrapper"), 0.5),
                                    0.6,
                                    {
                                        force3D: true,
                                        y: currTrans,
                                        ease: Back.easeOut.config(1.7),
                                    }, 0.04, "-=0.8");
                        }

                    }


                    let webkitClipPath = {value: "0%"};
                    tl.to(webkitClipPath, 0.5, {
                        value: "100%",
                        onUpdate: function () {
                            elAjax.css("clip-path", "inset(0% 0% " + webkitClipPath.value + " 0%)");
                        },
                        onComplete: function () {
                            webkitClipPath = null;
                        },
                        ease: Circ.easeIn,
                    });


                },
                animateAjaxStart: function (_type, _that) {
                    tl = new TimelineMax();
                    if (_type === "slider")
                        this.ajaxSlider(_that);
                    else if (_type === "next")
                        this.ajaxNextProject(_that);
                    else if (_type === "work")
                        this.ajaxWork(_that);
                    else
                        this.ajaxNormal();

                    effectScroll.locked();
                    tl.call(function () {
                        dsnGrid.scrollTop(0, 0.01);
                    });
                },

                animateAjaxEnd: function (data) {
                    this.setTitle(data);
                    this.setBodyClass(data);
                    this.mainRoot.html($(data).filter(main_root).html());
                    reloadAjax(true);

                    setTimeout(function () {
                        // let video = $( "header video" );
                        // if ( video.length ) {
                        //     video.get( 0 ).pause();
                        //     video.get( 0 ).currentTime = 0;
                        // }
                        let elAjax = $(".dsn-ajax-loader");
                        if (elAjax.hasClass("dsn-ajax-normal"))
                            tl.to(elAjax, 1, {scaleY: 0});
                        else
                            this.completeElement(elAjax);


                        tl.call(function () {

                            elAjax.remove();
                            // if ( video.length ) {
                            //     video.get( 0 ).play();
                            // }
                            this.effectAjax(false);
                            tl = text_e_img = main_root = null;
                        }.bind(this));
                    }.bind(this), 100);


                },
                backAnimate: function (url) {
                    if (!url) return;
                    let $parent = this;
                    $.ajax({
                        url: url,
                        dataType: "html",
                        beforeSend: $parent.animateAjaxStart.bind($parent),
                        success: function (data) {
                            tl.call($parent.animateAjaxEnd.bind($parent, data), null, null, "+=0.2");
                        }, error: function (error) {
                            window.location = url;
                            // tl.call( $parent.animateAjaxEnd.bind( $parent, error.responseText || "" ), null, null, "+=0.2" );
                        },
                    });

                },

                ajaxLoad: function () {
                    if (!body.hasClass("dsn-ajax")) return;
                    let $parent = this;
                    this.ajaxClick.off("click");
                    this.ajaxClick.on("click", function (e) {
                        e.preventDefault();
                        let _that = $(this),
                            url = _that.attr("href"),
                            _type = _that.data("dsn-ajax");

                        if (url.indexOf("#") >= 0 || url === undefined) {
                            _that = url = _type = null;
                            return;
                        }


                        if ($parent.effectAjax()) return;
                        $parent.effectAjax(true);


                        $.ajax({
                            url: url,
                            dataType: "html",
                            beforeSend: $parent.animateAjaxStart.bind($parent, _type, _that),
                            success: function (data) {
                                try {
                                    history.pushState(null, "", url);
                                    tl.call($parent.animateAjaxEnd.bind($parent, data), null, null, "+=0.2");
                                } catch (e) {
                                    window.location = url;
                                }

                            }, error: function (error) {
                                window.location = url;
                                // tl.call( $parent.animateAjaxEnd.bind( $parent, error.responseText || "" ), null, null, "+=0.2" );
                            },
                        });

                    });

                },

            };
        }

        function effctStickyNavBar() {
            let headerSmall = $(".site-header");
            headerSmall.removeClass("header-stickytop");
            let bodyScroll = 0;
            var $ofContent = $(".wrapper").offset();
            var header = $(".header-single-post .containers").offset();

            var post_full_content = $(".post-full-content").offset();
            var scrDown = 0;

            if (header !== undefined) {
                $ofContent = header;
            } else if ($ofContent.top <= 70) {
                $ofContent = post_full_content;
            }


            var tl = new TimelineMax({paused: true});
            var t2 = new TimelineMax({paused: true});
            tl.to(".header-top .header-container, .site-header ", .5, {
                backgroundColor: "#000",
                paddingTop: 15,
                paddingBottom: 15,
            });
            tl.reverse();

            t2.to(".header-top .header-container,  .site-header , .dsn-multi-lang", 0.5, {top: -70});
            t2.reverse();

            effectScroll.getListener(function (e) {

                if (e.type === "scroll") {
                    bodyScroll = wind.scrollTop();
                } else {
                    bodyScroll = e.offset.y;
                }


                let $top = 70;
                if ($ofContent !== undefined) {
                    $top = $ofContent.top - 100;
                }
                if (bodyScroll > $top) {
                    tl.play();
                    if (scrDown < bodyScroll) {
                        t2.play();

                    } else {
                        t2.reverse();
                    }
                } else {
                    tl.reverse();
                }


                scrDown = bodyScroll;
            });

            return {
                "t1": tl,
                "t2": t2,
            };
        }

        /**
         *
         *  - Create an high quality justified gallery
         *    of image
         *
         */
        function justifiedGallery() {

            $(".gallery-portfolio").each(function () {
                let $this = $(this);

                $this.justifiedGallery({
                    rowHeight: 300,
                    margins: 15,

                });

                let p = $this.parents(".work-masonry").find(".filterings-t");
                if (p.length) {
                    p.find("button").off("click");
                    p.find("button").on("click", function () {
                        $(this).addClass("active").siblings().removeClass("active");
                        let b = $(this).data("filter");
                        $this.justifiedGallery({
                            filter: function (entry, index, array) {

                                if (!$(entry).is(b)) TweenLite.to(entry, 0.1, {
                                    scale: 0,
                                    ease: Back.easeIn.config(1.2),
                                });
                                else TweenLite.to(entry, 0.6, {
                                    scale: 1, ease: Back.easeOut.config(1.2),
                                    delay: index * 0.1,
                                });
                                return $(entry).is(b);
                            },
                        });
                        b = null;

                    });
                }

                p = null;


            });

        }

        function zoomGallery() {
            $(".zoom-gallery").magnificPopup({
                delegate: "a:not(.effect-ajax)",
                type: "image",
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: "mfp-with-zoom mfp-img-mobile",
                image: {
                    verticalFit: true,
                    titleSrc: function (item) {
                        return item.el.attr("title") + " &middot; <a class=\"image-source-link\" href=\"" + item.el.attr("data-source") + "\" target=\"_blank\">image source</a>";
                    },
                },
                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function (element) {
                        return element.find("img");
                    },
                },

            });
        }

        function magnificPopup() {
            let option = {
                delegate: "a:not(.effect-ajax)",
                type: "image",
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: "mfp-with-zoom", // this class is for CSS animation below

                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 400, // don't foget to change the duration also in CSS
                    easing: "cubic-bezier(0.36, 0, 0.66, -0.56)", // CSS transition easing function
                    opener: function (element) {
                        return element.find("img");
                    },

                },
                callbacks: {
                    open: function () {
                        // Will fire when this exact popup is opened
                        // this - is Magnific Popup object
                        $("html").css({margin: 0});
                    },
                    close: function () {
                        // Will fire when popup is closed
                    },
                    // e.t.c.
                },

            };
            $(".gallery-portfolio").each(function () {
                $(this).magnificPopup(option);
            });

            if ($(".has-popup .pop-up").length) option.delegate = "a.pop-up";
            $(".has-popup").magnificPopup(option);

        }


        /**
         *  - the function that move the cursor of an input element to the end
         *
         * @param $off
         *      $off is true stop event listener
         *
         */
        function mouseCirMove($off) {
            let $elemnet = $(".cursor");
            if (dsnGrid.isMobile() || !body.hasClass("dsn-cursor-effect")) {
                if ($elemnet.length) {
                    $elemnet.css("display", "none");
                    body.removeClass("dsn-cursor-effect");
                }
                $elemnet = null;
                return;
            }


            if ($off === true) {
                $elemnet.attr("class", "cursor");
                cursorEffect();
                return;
            }

            dsnGrid.mouseMove($elemnet);
            cursorEffect();

            function cursorEffect() {


                dsnGrid.elementHover($elemnet, "a:not(> img):not(.vid) , .dsn-button-sidebar,  button , .mfp-container", "cursor-scale-full");
                dsnGrid.elementHover($elemnet, ".c-hidden", "no-scale");
                dsnGrid.elementHover($elemnet, ".has-popup a , .work-item-box a:not(.effect-ajax)", "cursor-scale-half cursor-open");

                dsnGrid.elementHover($elemnet, "[data-cursor=\"close\"]", "cursor-scale-full cursor-close");


                dsnGrid.elementHover($elemnet, "a.link-pop ", "cursor-scale-full cursor-view");

                dsnGrid.elementHover($elemnet, ".proj-slider-image > .slick-list ,.our-work .slick-slider > .slick-list, .slider-project-swiper .swiper-wrapper ", "cursor-scale-half cursor-drag cursor-next cursor-prev");
                dsnGrid.elementHover($elemnet, ".main-slider:not(.has-horizontal) .slide-item", "cursor-scale-half cursor-up-down cursor-drag cursor-next cursor-prev");
                dsnGrid.elementHover($elemnet, ".main-slider.has-horizontal .slide-item", "cursor-scale-half cursor-drag cursor-next cursor-prev");
                dsnGrid.elementHover($elemnet, "[data-cursor=\"next\"]", "cursor-scale-half cursor-next");
                dsnGrid.elementHover($elemnet, "[data-cursor=\"prev\"]", "cursor-scale-half cursor-prev");

                dsnGrid.elementHover($elemnet, ".our-work .work-item a ", "no-drag");

                //--> Mouse Hover Icon
                dsnGrid.moveIcon(".img-box-parallax", ".title-popup");
            }


        }


        function navMenu() {
            const siteHeader = $(".site-header");
            return {

                lineActive: function () {
                    let activeNav = siteHeader.find("ul.extend-container > li.dsn-active");
                    if (activeNav.length)
                        this.setLine(activeNav.offset().left);
                    activeNav = null;

                },
                lineMove: function () {
                    let $parent = this;
                    siteHeader.find("ul.extend-container > li").off("mouseenter");
                    siteHeader.find("ul.extend-container > li").on("mouseenter", function () {
                        if (body.hasClass("hamburger-menu")) return;
                        let $this = $(this);
                        let ul = $this.find(" > ul");
                        if (ul.length) {
                            $parent.setLine(ul.offset().left, 65, ul.width(), $this.offset().left);
                        } else {
                            $parent.setLine($(this).offset().left);
                        }

                        $this = null;
                        ul = null;

                    });
                    siteHeader.find("ul.extend-container").off("mouseleave");
                    siteHeader.find("ul.extend-container").on("mouseleave", function () {
                        $parent.lineActive();
                    });
                },
                setLine: function (left, top = 65, width = 25, leftO) {
                    TweenMax.to(".nav-border-bottom", 0.3, {
                        left: left, top: top, width: width, onComplete: function () {
                            $(".nav-border-bottom").css({
                                left: leftO || left,
                                width: 25,
                            });
                        },
                    });
                },
                cutterText: function () {
                    let text_menu = siteHeader.find(".menu-icon .text-menu");
                    if (text_menu.length <= 0) return;
                    let text_button = text_menu.find(".text-button");
                    let text_open = text_menu.find(".text-open");
                    let text_close = text_menu.find(".text-close");

                    dsnGrid.convertTextLine(text_button, text_button);
                    dsnGrid.convertTextLine(text_open, text_open);
                    dsnGrid.convertTextLine(text_close, text_close);
                    text_close = null;
                    text_open = null;
                    text_button = null;
                    text_menu = null;
                },
                hamburgerOpen: function () {
                    const mainIcon = siteHeader.find(".menu-icon");
                    const mainNav = siteHeader.find(".main-navigation");


                    let tl = new TimelineMax({
                        paused: true, onReverseComplete: function () {
                            setTimeout(function () {
                                mainIcon.find(".icon-top , .icon-bottom").css("transform", "").css("display", "");
                                body.css("overflow", "");
                            }, 50);


                        },
                    });


                    var menuClick = new TimelineMax();
                    // let Ease = Expo.easeInOut;
                    let Ease = Power3.easeOut;

                    //--> Open Menu

                    tl.set(mainIcon.find(".icon-center"), {display: "none"});
                    tl.to(mainIcon.find(".icon-top"), 0.5, {width: 23, rotation: 45, top: 6, ease: Ease});
                    tl.to(mainIcon.find(".icon-bottom"), 0.5, {
                        width: 23,
                        rotation: -45,
                        top: -5,
                        ease: Ease,
                    }, 0);
                    tl.to(mainIcon, 0.01, {css: {className: "+=nav-active"}}, 0);

                    tl.to(body, 0.01, {overflow: "hidden"}, 0);

                    tl.to(mainNav, 0.5, {y: "0%", autoAlpha: 1, ease: Ease}, 0);
                    tl.fromTo(mainNav, 0.5, {y: "-100%", autoAlpha: 0}, {
                        y: "0%",
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                    }, 0);

                    tl.staggerTo(mainNav.find("ul.extend-container > li > a .dsn-title-menu"), 0.5, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Back.easeOut.config(1.7),
                    }, 0.1);


                    tl.to(mainNav.find("ul.extend-container > li > a .dsn-meta-menu"), 0.5,
                        {autoAlpha: 1, ease: Ease});
                    tl.to(mainNav.find(".container-content"), 1, {autoAlpha: 1}, "-=1");
                    tl.reverse();


                    mainNav.find("ul.extend-container > li.dsn-drop-down").on("click", function (e) {
                        e.stopPropagation();
                        if (menuClick._totalDuration > 0) return;
                        menuClick = new TimelineMax({
                            onReverseComplete: function () {
                                menuClick = new TimelineMax();
                            },
                        });
                        menuClick.set($(this).find("ul"), {display: "flex"});
                        menuClick.staggerTo(mainNav.find("ul.extend-container > li > a .dsn-title-menu"), 0.5,
                            {y: -30, autoAlpha: 0, ease: Back.easeIn.config(1.7)}, 0.1);

                        menuClick.to(mainNav.find("ul.extend-container > li > a .dsn-meta-menu"), 0.5, {autoAlpha: 0}, .5);

                        menuClick.staggerFromTo($(this).find("ul li"), 0.5, {x: 50, autoAlpha: 0}, {
                            x: 0,
                            autoAlpha: 1,
                            ease: Back.easeOut.config(1.7),
                        }, 0.1);


                    });

                    mainIcon.off("click");
                    mainIcon.on("click", function () {
                        menuClick.reverse(-1);
                        tl.reversed(!tl.reversed());
                        menuClick = new TimelineMax();

                    });
                    let backMenu = $(".dsn-back-menu");
                    backMenu.off("click");
                    backMenu.on("click", function () {
                        menuClick.reverse();
                    });
                    backMenu = null;

                },


                init: function () {
                    if (!siteHeader.length) return;
                    let $parent = this;
                    this.cutterText();
                    if (wind.width() > 991 && body.hasClass("classic-menu")) {
                        siteHeader.find("ul.extend-container > li").off("mouseenter");
                        siteHeader.find("ul.extend-container").off("mouseleave");
                        $parent.lineMove();
                        setTimeout($parent.lineActive.bind($parent), 500);

                    }
                    $parent.hamburgerOpen();


                },
            };


        }


        /**
         *
         * @returns {{getScrollbar: getScrollbar, scrollNavigate: scrollNavigate, start: start, isScroller: (function(*=): boolean), locked: locked, getListener: getListener}}
         */
        function effectScroller() {
            const Scrollbar = window.Scrollbar;
            const locked_scroll = "locked-scroll";
            var myScrollbar = document.querySelector("#dsn-scrollbar");


            return {
                isScroller: function ($print) {
                    if ($print)
                        myScrollbar = document.querySelector("#dsn-scrollbar");

                    let hasSc = !body.hasClass("dsn-effect-scroll") || dsnGrid.isMobile() || myScrollbar === null;
                    if (hasSc && $print) {
                        body.addClass("dsn-mobile");
                    }

                    return !hasSc;
                },
                locked: function () {
                    body.addClass(locked_scroll);
                    if (this.isScroller()) {
                        let scroll = this.getScrollbar();
                        if (scroll !== undefined) {
                            scroll.destroy();
                        }
                        scroll = null;
                    }
                },
                getScrollbar: function ($id) {
                    if ($id === undefined) {
                        return Scrollbar.get(myScrollbar);
                    }
                    return Scrollbar.get(document.querySelector($id));
                },
                getListener: function ($obj, $useWin = true) {
                    if ($obj === undefined) return;
                    let $this = this;
                    if ($this.isScroller()) {
                        $this.getScrollbar().addListener($obj);
                    } else {
                        if ($useWin)
                            wind.on("scroll", $obj);
                    }
                    $this = null;
                },
                scrollNavigate: function () {
                    let top = $(".wrapper").offset();
                    top = top ? top.top : 0;
                    $(".scroll-top , .scroll-to-top").on("click", function () {
                        dsnGrid.scrollTop(0, 2);
                    });

                    $(".scroll-d").on("click", function () {
                        dsnGrid.scrollTop(top, 2,
                            ($(".scrollmagic-pin-spacer").height() * -1) - 200 || -200);
                    });

                },

                start: function () {
                    body.removeClass(locked_scroll);
                    dsnGrid.scrollTop(0, 1);
                    if (!this.isScroller(true)) return;
                    Scrollbar.init(myScrollbar, {
                        damping: 0.05,
                    });
                },


            };

        }

        function effectAnimate() {
            let controller = new ScrollMagic.Controller();
            let scene = [];

            return {
                clearControl: function () {
                    controller.destroy(true);
                    controller = new ScrollMagic.Controller();
                    for (let s of scene) {
                        s.destroy(true);
                        s = null;
                    }
                    scene = [];

                },
                allInt: function () {
                    this.clearControl();
                    this.headerProject();
                    this.nextProject();
                    this.changeColor();
                    this.headerPages();

                    this.animateFade();
                    this.animateSkills();
                    this.animateNumbers();
                    this.sectionWork();
                    this.parallaxImg();
                    this.parallaxImgHover();
                    this.moveSection();


                    effectScroll.scrollNavigate();
                    effectScroll.getListener(function () {
                        for (let s of scene) {
                            s.refresh();
                        }
                    });

                },
                headerPages: function () {
                    let eHeaderProject = "[data-dsn-header=\"parallax\"]";
                    if ($(eHeaderProject).length <= 0) return false;
                    let heroImg = $("#dsn-hero-parallax-img"),
                        heroTitle = $("#dsn-hero-parallax-title"),
                        holder = $(eHeaderProject).find("a[target=\"_blank\"] , .scroll-d");

                    let parallax = new TimelineLite();

                    //--> Hero Image Project
                    if (heroImg.length > 0) {
                        parallax.to(heroImg, 1, {y: "30%", scale: 1}, 0);
                    }

                    //--> Hero Title
                    if (heroTitle.length > 0) {
                        parallax.to(heroTitle, .8, {
                            force3D: true,
                            y: "100%",
                            autoAlpha: 0,
                            scale: heroImg.hasClass("header-scale-hero") ? 0.9 : heroImg.hasClass("header-no-scale-hero") ? 1 : 1.08,
                        }, 0);
                    }


                    //--> Hero Fill Title
                    if (holder.length > 0)
                        parallax.to(holder, .8, {
                            force3D: true,
                            y: 60,
                            autoAlpha: 0,
                        }, 0);


                    let parallaxProject = dsnGrid.tweenMaxParallax(effectScroll, controller).addParrlax({
                        id: eHeaderProject,
                        triggerHook: 0,
                        tween: parallax,
                    });


                    let video = heroImg.find("video");
                    if (video.length) {
                        parallaxProject.on("enter", function () {
                            if (video.length)
                                video.get(0).play();
                        });
                        parallaxProject.on("leave", function () {
                            if (video.length)
                                video.get(0).pause();
                        });

                        $(eHeaderProject).find(".icon-sound").on("click", function (e) {
                            e.stopPropagation();
                            if ($(this).hasClass("sound-no-mute")) {
                                video.get(0).muted = true;
                                TweenMax.to($(this).find("svg"), 0.8, {x: 4});
                                TweenMax.staggerTo($(this).find(".wave-line"), 0.8, {autoAlpha: 0}, 0.2);
                            } else {
                                video.get(0).muted = false;
                                TweenMax.to($(this).find("svg"), 0.8, {x: 0});
                                TweenMax.staggerTo($(this).find(".wave-line"), 0.8, {autoAlpha: 1}, 0.2);
                            }
                            $(this).toggleClass("sound-no-mute");


                        });


                    } else {
                        video = null;
                    }
                    if (parallaxProject)
                        scene.push(parallaxProject);
                    eHeaderProject = parallax = parallaxProject = null;

                },
                parallaxImgHover: function () {
                    let parallax = $("[data-dsn=\"parallax\"]");
                    if (parallax.length <= 0 || dsnGrid.isMobile()) {
                        parallax = null;
                        return;
                    }

                    parallax.each(function () {
                        let _that = $(this),
                            dsn_grid = dsnGrid.removeAttr(_that, "data-dsn"),
                            speed = dsnGrid.getData(_that, "speed", 0.5),
                            move = dsnGrid.getData(_that, "move", 20);


                        dsnGrid.parallaxMoveElement(_that, move, speed, _that.find(".dsn-parallax-rev").get(0), _that.hasClass("image-zoom"));
                        _that = dsn_grid = speed = move = null;

                    });
                },
                headerProject: function () {
                    let eHeaderProject = "[data-dsn-header=\"project\"]";
                    if ($(eHeaderProject).length <= 0 || $(eHeaderProject).hasClass("dsn-end-animate")) {
                        eHeaderProject = null;
                        return false;
                    }
                    let heroImg = $("#dsn-hero-parallax-img"),
                        heroTitle = $("#dsn-hero-title"),
                        heroDec = $("#dsn-hero-description"),
                        heroDecItem = $("#dsn-hero-desc-items"),
                        heroDecItems = heroDecItem.find(".descrption-item"),
                        scrollD = $(eHeaderProject).find(".scroll-d img");

                    let parallax = new TimelineLite();


                    //--> Hero Image Project
                    if (heroImg.length > 0 && !dsnGrid.isMobile()) {
                        parallax.to(heroImg, 2, {width: "40%", left: "60%"});
                    }


                    //--> Hero Title
                    if (heroTitle.length) {

                        dsnGrid.convertTextLine(heroTitle.find(".title"));
                        if (heroDec.length)
                            TweenLite.set(heroTitle.find(".dsn-chars-wrapper , .metas"), {y: "+=" + heroDec.height()});
                        if (heroDecItem.length)
                            TweenLite.set(heroTitle.find(".dsn-chars-wrapper , .metas"), {y: "+=" + (heroDecItem.height() - 30)});

                        parallax.to(heroTitle.find(".metas"), 1, {
                            force3D: true,
                            y: "0",
                            ease: Back.easeOut.config(1.7),
                        }, 0);

                        parallax.staggerTo(
                            dsnGrid.randomObjectArray(heroTitle.find(".dsn-chars-wrapper"), 0.8),
                            1.5,
                            {
                                force3D: true,
                                y: "0",
                                ease: Back.easeOut.config(1.7),
                            }, 0.1, 0);
                    }


                    //--> Hero Fill Title
                    if (heroDec.length)
                        parallax.fromTo(heroDec, .8, {y: "15%", autoAlpha: 0}, {y: "0%", autoAlpha: 1});

                    //--> Hero Fill Title
                    if (heroDecItem.length)
                        parallax.fromTo(heroDecItem, .3, {y: "15%", autoAlpha: 0}, {y: "0%", autoAlpha: 1});

                    //--> Hero Fill Title
                    if (heroDecItems.length)
                        parallax.staggerFromTo(heroDecItems, 1, {y: "15%", autoAlpha: 0}, {
                            y: "0%",
                            autoAlpha: 1,
                        }, 0.2);


                    let parallaxProject = dsnGrid.tweenMaxParallax(effectScroll, controller).addParrlax({
                        id: eHeaderProject,
                        triggerHook: 0,
                        duration: 2100,
                        tween: parallax,
                        _fixed: true,
                    });

                    if (scrollD.length) {
                        parallaxProject.on("progress", function ($num) {
                            TweenLite.to($("[data-dsn-header=\"project\"]").find(".scroll-d img"), 0.3, {rotation: $num.progress * 500});
                        });
                    }

                    if (parallaxProject)
                        scene.push(parallaxProject);

                    eHeaderProject = scrollD = scrollD = parallax = parallaxProject = heroImg = heroDecItems = heroDecItem = heroDec = heroTitle = null;

                },
                nextProject: function () {
                    let eFooterProject = $("[data-dsn-footer=\"project\"]");
                    if (!eFooterProject.length) return false;

                    let
                        heroTitle = $("#dsn-footer-title"),
                        heroImg = eFooterProject.find(".img-box-shadow");
                    let parallax = new TimelineLite();
                    if (heroImg.length) {
                        let parX = {value: "20%"};
                        parallax.to(parX, 2, {
                            value: "75%", onUpdate: function () {
                                heroImg.css("background-image",
                                    "linear-gradient(to left, #000 " + parX.value + ", rgba(0, 0, 0, 0.26) 100%)",
                                );
                            },
                        }, 0);
                    }


                    //--> Hero Title
                    if (heroTitle.length) {
                        dsnGrid.convertTextLine(heroTitle);
                        TweenLite.set(heroTitle.find(".dsn-chars-wrapper"), {y: 50, autoAlpha: 0});

                        parallax.staggerTo(
                            dsnGrid.randomObjectArray(heroTitle.find(".dsn-chars-wrapper"), 0.8),
                            1,
                            {
                                force3D: true,
                                y: "0",
                                autoAlpha: 1,
                                ease: Back.easeOut.config(1.7),
                            }, 0.1, 0);
                    }


                    let parallaxProject = dsnGrid.tweenMaxParallax(effectScroll, controller).addParrlax({
                        id: eFooterProject,
                        triggerHook: 0.7,
                        duration: eFooterProject.height() + 33,
                        tween: parallax,
                    });

                    if (parallaxProject)
                        scene.push(parallaxProject);

                    parallax = parallaxProject = heroTitle = null;

                },
                animateFade: function () {
                    let $element = $("[data-dsn-animate=\"section\"]");
                    dsnGrid.getData($element, "animate");
                    $element.each(function () {
                        let controllerFade = new ScrollMagic.Controller(),
                            tl = new TimelineLite({paused: true}),
                            $this = $(this),
                            fadeUp = $this.find(".dsn-up"),
                            text = $this.find(".dsn-text");

                        $this.addClass("transform-3d overflow-hidden");
                        if ($this.hasClass("dsn-animate"))
                            tl.fromTo(this, 1, {y: 50, opacity: 0}, {y: 0, opacity: 1});

                        if (text.length) {
                            text.each(function () {
                                dsnGrid.convertTextLine(this, this);
                                $(this).addClass("overflow-hidden");


                                tl.staggerFromTo($(this).find(".dsn-word-wrapper"), 0.6,
                                    {
                                        willChange: "transform",
                                        transformOrigin: "0 100%",
                                        x: 8,
                                        y: 13,
                                        rotation: 20,
                                        opacity: 0,
                                    },
                                    {
                                        x: 0,
                                        y: 0,
                                        rotation: 0,
                                        opacity: 1,
                                        ease: Back.easeOut.config(2),
                                    }, 0.1);
                            });

                        }

                        if (fadeUp.length) {
                            tl.staggerFromTo(fadeUp, 0.8, {y: 20, opacity: 0}, {
                                y: 0,
                                opacity: 1,
                                delay: $this.hasClass("dsn-animate") ? 0.5 : 0,
                                ease: Back.easeOut.config(1.7),
                            }, 0.2, 0);
                        }


                        tl._totalDuration = 1;
                        dsnGrid.tweenMaxParallax(effectScroll, controllerFade).addParrlax({
                            id: this,
                            reverse: false,
                            triggerHook: 0.5,
                            duration: 0,
                            tween: tl,
                        });

                        controllerFade = tl = $this = fadeUp = text = null;
                    });
                    $element = null;
                },
                animateSkills: function () {
                    let $element = $(".skills-personal");
                    $element.each(function () {
                        let controllerFade = new ScrollMagic.Controller(),
                            tl = new TimelineLite({paused: true}),
                            $this = $(this),
                            skills = $this.find(".skills-item .fill");

                        if (skills.length) {
                            skills.each(function ($index) {
                                let c = $(this);
                                tl.to(c, 1, {
                                    width: c.data("width"), ease: Power0.easeNone,
                                    onUpdate: function () {
                                        c.find(".number").text((c.width() / c.parent().width() * 100).toFixed(0) + "%");
                                    },
                                    onComplete: function () {
                                        c = null;
                                    },
                                }, $index * 0.2);

                            });


                            tl._totalDuration = 1;
                        }


                        dsnGrid.tweenMaxParallax(effectScroll, controllerFade).addParrlax({
                            id: this,
                            reverse: false,
                            triggerHook: 0.5,
                            duration: 0,
                            tween: tl,
                        });

                        controllerFade = tl = null;
                    });
                    $element = null;
                },
                animateNumbers: function () {
                    let $element = $(".have-dsn-animate-number");
                    $element.each(function () {
                        let numbers = $(this).find(".has-animate-number");
                        if (!numbers.length) {
                            numbers = null;
                            return;
                        }
                        let tl = new TimelineLite({paused: true});

                        numbers.each(function ($index) {
                            let c = $(this);
                            let numbers = {value: 0};
                            tl.to(numbers, 4, {
                                value: c.text(), ease: Back.easeOut.config(1.2),
                                onUpdate: function () {
                                    c.text(dsnGrid.numberText(numbers.value.toFixed(0)));
                                },
                                onComplete: function () {
                                    c = numbers = null;
                                },
                            }, $index * 0.2);

                        });


                        tl._totalDuration = 1;


                        dsnGrid.tweenMaxParallax(effectScroll, new ScrollMagic.Controller()).addParrlax({
                            id: this,
                            reverse: false,
                            triggerHook: 0.5,
                            duration: 0,
                            tween: tl,
                        });

                        tl = null;
                    });
                    $element = null;
                },
                sectionWork: function () {
                    let containerWork = $(".work-container[data-dsn-animate=\"work\"]"),
                        sectionWork = containerWork.find(".d-block"),
                        allSection = sectionWork.find(".work-item");
                    if (sectionWork.length) {
                        let widtSection = wind.width() / 2.5;
                        if (dsnGrid.isMobile() && wind.width() < 768 && wind.width() >= 576)
                            widtSection = wind.width() / 1.5;
                        else if (dsnGrid.isMobile() && wind.width() < 576)
                            widtSection = wind.width() / 1.15;

                        allSection.each(function () {
                            $(this).css({
                                width: widtSection,
                                float: "left",
                                minHeight: 1,
                            });
                        });
                        sectionWork.css("width", (widtSection * allSection.length));
                        widtSection = null;

                        let parallaxIt = dsnGrid.tweenMaxParallax(effectScroll, controller).addParrlax({
                            id: containerWork,
                            triggerHook: 0,
                            _fixed: true,
                            duration: allSection.length * 350,
                            refreshParallax: true,
                            tween: TweenLite.to(sectionWork, 0.5, {
                                force3D: true,
                                x: (allSection.last().offset().left - (allSection.last().width()) * 1.5) * -1,
                                ease: Linear.easeNone,
                            }),
                        });
                        if (parallaxIt)
                            scene.push(parallaxIt);
                        parallaxIt = null;
                    }
                    containerWork = sectionWork = allSection = null;
                },
                parallaxImg: function () {
                    let ease = Linear.easeNone;
                    let timer = 0.01;
                    $("[data-dsn-grid=\"move-up\"]").each(function ($index) {
                        let _that = $(this);

                        _that.attr("data-dsn-grid", "moveUp");
                        let img = _that.find("img:not(.hidden) , video");

                        let triggerHook = dsnGrid.getData(this, "triggerhook", 1),
                            duration = dsnGrid.getData(this, "duration", "200%"),
                            top = dsnGrid.getData(this, "top");

                        if (img.length > 0) {
                            if (top) img.css("top", top);
                            let parallax,
                                pers = dsnGrid.getData(img, "y", img.hasClass("has-opposite-direction") ? "-20%" : "30%"),
                                objAnimate = {y: pers, skewX: 0, ease: ease, scale: 1};
                            if (img.hasClass("has-top-bottom")) {
                                parallax = TweenMax.to(img, timer, objAnimate);
                            } else {
                                objAnimate.scale = dsnGrid.getData(img, "scale", 1.1);
                                parallax = TweenMax.to(img, timer, objAnimate);
                            }


                            img.css("perspective", _that.width() > 1000 ? 1000 : _that.width());

                            let parallaxIt = dsnGrid.tweenMaxParallax(effectScroll, controller).addParrlax({
                                id: this,
                                triggerHook: triggerHook,
                                duration: duration,
                                tween: parallax,
                            });


                            if (parallaxIt)
                                scene.push(parallaxIt);


                            parallaxIt = parallax = pers = duration = triggerHook = img = _that = objAnimate = null;

                        }

                    });
                    ease = timer = null;
                },
                dsnScrollTop: function () {

                    let wrap = $(".wrapper");
                    if (!wrap.length || !$(".scroll-to-top").length) {
                        wrap = null;
                        return;
                    }

                    TweenLite.to(".scroll-to-top", 1, {right: -100, autoAlpha: 0});
                    TweenLite.to(".stories-sticky-footer", 1, {autoAlpha: 0});

                    let parallaxIt = dsnGrid.tweenMaxParallax(effectScroll, controller).addParrlax({
                        id: wrap,
                        triggerHook: 0.5,
                        duration: (wrap.height() - (wind.height() * 0.5)) + ($(".next-project").outerHeight() || 0),
                        tween: TweenLite.to(".scroll-to-top > img", 0.3, {rotation: wrap.height() / 2}),
                    });

                    parallaxIt.on("progress", function ($s) {
                        $(".scroll-to-top .box-numper span").text((($s.progress) * 100).toFixed(0) + "%");
                    });

                    parallaxIt.on("enter", function ($s) {
                        TweenLite.to(".scroll-to-top", 1, {right: 20, autoAlpha: 1});
                        TweenLite.to(".stories-sticky-footer", 1, {autoAlpha: 1});

                    });

                    parallaxIt.on("leave", function ($s) {
                        TweenLite.to(".scroll-to-top", 1, {right: -100, autoAlpha: 0});
                        TweenLite.to(".stories-sticky-footer", 1, {autoAlpha: 0});

                    });

                    if (parallaxIt)
                        scene.push(parallaxIt);

                    parallaxIt = wrap = null;

                },
                moveSection: function () {
                    let moveUp = $("[data-dsn-grid=\"move-section\"]");
                    let ease = Linear.easeNone;
                    let timer = 0.01;
                    moveUp.each(function () {
                        let _that = $(this);
                        _that.removeAttr("data-dsn-grid");
                        _that.addClass("dsn-move-section");
                        if (_that.data("dsn-responsive") === "tablet" && wind.width() < 992) return;

                        let move = dsnGrid.getData(_that, "move", -100),
                            triggerHook = dsnGrid.getData(_that, "triggerhook", 1),
                            opacity = dsnGrid.getData(_that, "opacity", _that.css("opacity")),
                            duration = dsnGrid.getData(_that, "duration", "150%");
                        let parallaxIt = dsnGrid.tweenMaxParallax(effectScroll, controller).addParrlax({
                            id: this,
                            triggerHook: triggerHook,
                            duration: duration,
                            tween: TweenMax.to(_that, timer, {y: move, autoAlpha: opacity, ease: ease}),
                        });
                        scene.push(parallaxIt);
                        _that = move = triggerHook = opacity = duration = null;
                    });
                    moveUp = ease = timer = null;

                },
                changeColor: function () {
                    $("[data-dsn=\"color\"]").each(function () {

                        let duration = dsnGrid.getData(this, "duration", $(this).outerHeight() + 50);


                        let parallaxIt = new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: 0.05,
                            duration: duration,
                        })
                            .addTo(controller);

                        parallaxIt.on("enter", function () {
                            body.toggleClass("v-light");
                        });
                        parallaxIt.on("leave", function () {
                            body.toggleClass("v-light");
                        });

                        if (parallaxIt)
                            scene.push(parallaxIt);

                    });
                },

            };


        }


    }

)(jQuery);

function slider() {
    const dsn_slider = $(".main-slider");
    let targetNavSlider = $(".nav-slider");
    let tl = new TimelineLite();
    return {
        isDemoSlide: function () {
            return dsn_slider.hasClass("demo-3");
        },
        initSlider: function () {
            let slid_items = dsn_slider.find(".slide-item");
            let dsn_slider_content = dsn_slider.find(".dsn-slider-content > .content-slider");
            let $parent = this;
            let $object = [];
            slid_items.each(function ($index) {
                let $this = $(this);
                $this.attr("data-dsn-id", $index);
                let slide_content = $(this).find(".slide-content");
                slide_content.attr("data-dsn-id", $index);
                if ($index === 0) slide_content.addClass("dsn-active dsn-active-cat");
                dsn_slider_content.append(slide_content);
                let title = slide_content.find(".title a");
                if (!$parent.isDemoSlide())
                    $object.push($parent.nextSlide(title.text(), slide_content.find(".metas").html(), $(this).find(".image-bg").clone()));
                dsnGrid.convertTextLine(title, title);

                $this = slide_content = title = null;
            });

            if (!$parent.isDemoSlide()) {
                $object.push($object.shift());
                $(".box-next > .swiper-wrapper").append($object);
            }
            $object = $parent = dsn_slider_content = slid_items = null;


        },
        swiperObject: function (isDemo, $isVertical = true) {

            return new Swiper(".main-slider .slide-inner", {
                speed: 1500,
                grabCursor: true,
                allowTouchMove: true,
                direction: $isVertical ? "vertical" : "horizontal",
                slidesPerView: isDemo ? "auto" : 1,
                centeredSlides: isDemo,
                slideToClickedSlide: isDemo,
                loop: dsn_slider.hasClass("has-loop"),
                pagination: {
                    el: ".main-slider .dsn-controls .dsn-numbers span:not(.full-number)",
                    type: "custom",
                    clickable: true,
                    renderCustom: function (swiper, current, total) {
                        $(".main-slider .dsn-controls .dsn-numbers span.full-number").html(dsnGrid.numberText(total));
                        TweenLite.to(".main-slider .dsn-controls .dsn-progress .dsn-progress-indicator", 1, {height: (current / total) * 100 + "%"});
                        return dsnGrid.numberText(current);
                    },
                },
                spaceBetween: 50,
                on: {
                    init: function () {
                        this.autoplay.stop();
                        dsn_slider.find("[data-dsn=\"video\"] video").each(function () {
                            this.pause();
                        });
                    },
                    imagesReady: function () {
                        let v = $(this.slides[this.activeIndex]).find("[data-dsn=\"video\"] video");
                        if (v.length) v.get(0).play();
                        v = null;
                    },
                },
            });


        },
        progress: function (swiper, $isVertical = true) {
            swiper.on("progress", function () {
                let swiper = this;

                for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress,
                        innerOffset = ($isVertical ? swiper.height : swiper.width) * 0.5,
                        innerTranslate = slideProgress * innerOffset,
                        trns = $isVertical ? "Y" : "X";
                    swiper.slides[i].querySelector(".image-bg").style.transform =
                        "translate" + trns + "(" + innerTranslate + "px) " + "skew" + trns + "(" + innerTranslate / 50 + "deg)";

                    innerTranslate = trns = innerOffset = slideProgress = null;
                }
                swiper = null;
            });
        },
        touchStart: function (swiper) {
            swiper.on("touchStart", function () {
                $(this.slides).css("transition", "");
            });
        },
        setTransition: function (swiper) {
            swiper.on("setTransition", function (speed) {
                $(this.slides).find(".image-bg").css("transition", speed - 100 + "ms  ");
            });
        },
        slideChange: function (swiper) {
            let $this = this;
            swiper.on("slideChange", start);

            function start() {

                //--> Slider before change
                let contentOld = dsn_slider.find(".dsn-slider-content .dsn-active");
                let numOld = contentOld.data("dsn-id");

                //--> Slider current change
                let slider = $(swiper.slides[swiper.activeIndex]);

                let id = slider.data("dsn-id");
                if (numOld === id) return;
                dsn_slider.find("[data-dsn=\"video\"] video").each(function () {
                    this.pause();
                });
                let v = $(this.slides[this.activeIndex]).find("[data-dsn=\"video\"] video");
                if (v.length) v.get(0).play();


                //--> Content Old
                let content_letterOld = contentOld.find(".dsn-chars-wrapper");
                contentOld.removeClass("dsn-active-cat");

                //--> Content New
                let contentNew = dsn_slider.find(".dsn-slider-content [data-dsn-id=\"" + id + "\"]");
                let content_letterNew = contentNew.find(".dsn-chars-wrapper");


                let $isRight = numOld > id;

                tl.progress(1);
                tl = new TimelineLite();

                tl.staggerFromTo(
                    content_letterOld,
                    0.3,
                    $this.showText().title,
                    $this.hideText($isRight).title,
                    0.05,
                    0,
                    function () {
                        dsn_slider.find(".dsn-slider-content .slide-content").removeClass("dsn-active").removeClass("dsn-active-cat");
                        contentNew.addClass("dsn-active");
                        contentNew.addClass("dsn-active-cat");
                    },
                );

                tl.staggerFromTo(
                    dsnGrid.randomObjectArray(content_letterNew, 0.8),
                    0.8,
                    $this.hideText(!$isRight).title,
                    $this.showText().title,
                    0.05,
                    "-=.1",
                );

                contentOld = numOld = slider = id = v = content_letterOld = content_letterNew = $isRight = null;

            }
        },
        showText: function () {
            return {
                title: {
                    autoAlpha: 1,
                    y: "0%",
                    scale: 1,
                    rotation: 0,
                    // ease: Elastic.easeInOut,
                    ease: Back.easeOut.config(4),
                    yoyo: true,

                },
                subtitle: {
                    autoAlpha: 1,
                    y: "0%",
                    ease: Elastic.easeOut,
                },
            };
        },
        hideText: function ($isRigth) {
            return {
                title: {
                    autoAlpha: 0,
                    y: ($isRigth) ? "20%" : "-20%",
                    rotation: 8,
                    ease: Back.easeIn.config(4),
                    yoyo: true,
                },
                subtitle: {
                    autoAlpha: 0,
                    y: ($isRigth) ? "50%" : "-50%",
                    ease: Elastic.easeOut,
                },
            };
        },
        nextSlide: function ($title, $cat, $img) {


            return " <div class=\"swiper-slide\">\n" +
                "                    <div class=\"d-flex a-item-center h-100\">\n" +
                "                        <div class=\"content-box-next\">\n" +
                "                            <span>Next</span>\n" +
                "                            <h3 class=\"title-next\">" + $title + "</h3>\n" +
                "                            <div class=\"metas\">\n" + $cat +
                "                            </div>\n" +
                "                        </div>\n" +
                "                        <div class=\"img-box-next p-relative h-100 overflow-hidden\">\n" + $img.addClass("p-absolute").removeClass("hidden").get(0).outerHTML +

                "                            <div class=\"arrow v-middle\">\n" +
                "                                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n" +
                "                                     x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" class=\"\">\n" +
                "                            <g>\n" +
                "                                <g>\n" +
                "                                    <g>\n" +
                "                                        <path\n" +
                "                                                d=\"M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    \"\n" +
                "                                                data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\"\n" +
                "                                                fill=\"#FFFFFF\"/>\n" +
                "                                    </g>\n" +
                "                                </g>\n" +
                "                            </g>\n" +
                "                        </svg>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>";
        },

        run: function () {
            if (dsn_slider.length <= 0) return;
            let horizontal = dsn_slider.hasClass("has-horizontal");
            this.initSlider();
            let swiper = this.swiperObject(this.isDemoSlide(), !horizontal);
            if (!this.isDemoSlide()) {
                this.progress(swiper, !horizontal);
                this.touchStart(swiper);
                this.setTransition(swiper);
            }
            this.slideChange(swiper);

            if (this.isDemoSlide() && !dsn_slider.hasClass("has-loop"))
                swiper.slideTo(1);


            if (targetNavSlider.length <= 0 || this.isDemoSlide()) {
                swiper = null;
                return;
            }

            //--> Navigation Slider
            let navSlider = new Swiper(".nav-slider", {
                speed: 1500,
                centeredSlides: true,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                direction: (horizontal) ? "horizontal" : "vertical",
                resistanceRatio: 0.65,
                spaceBetween: 10,
                loop: dsn_slider.hasClass("has-loop"),


            });

            //--> Matching sliders
            swiper.controller.control = navSlider;
            navSlider.controller.control = swiper;
            this.progress(navSlider, !horizontal);
            this.setTransition(navSlider);

            targetNavSlider.on("click", function () {
                if (tl.isActive()) return;
                if (navSlider.slides.length === (navSlider.activeIndex + 1)) {
                    swiper.slideTo(0);
                } else {
                    swiper.slideNext();
                }

            });


            targetNavSlider = null;


        },
    };
}


/**
 * Attr data overlay
 */
function data_overlay() {
    $("[data-overlay-color]").each(function ($index) {
        var _that = $(this);
        var _color = dsnGrid.removeAttr(_that, "data-overlay-color");
        _that.addClass("dsn-overlay-" + $index);
        $("body").append("<style>.dsn-overlay-" + $index + "[data-overlay]:before{background: " + _color + ";}</style>");
    });
}


/**
 *
 * Function set background image from data background
 *
 */
function background() {

    var cover = $(".cover-bg, section , [data-image-src]");
    cover.each(function () {
        var attr = $(this).attr("data-image-src");

        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background-image", "url(" + attr + ")");
        }

    });
}


function initMap() {
    toggleButton();
    let map_att = $(".map-custom");
    if (!map_att.length) {
        map_att = null;
        return;
    }
    let mapScriptId = $("#map_api");


    // Styles a map in night mode.
    if (!mapScriptId.length) {
        let GOOGLE_MAP_KEY = "AIzaSyA5bpEs3xlB8vhxNFErwoo3MXR64uavf6Y";

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "map_api";
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAP_KEY; //& needed
        document.body.appendChild(script);
        GOOGLE_MAP_KEY = script = null;
    }

    setTimeout(function () {
        try {
            let lat = map_att.data("dsn-lat"),
                leg = map_att.data("dsn-len"),
                zoom = map_att.data("dsn-zoom"),
                letLeng = new google.maps.LatLng(lat, leg);
            let map = new google.maps.Map(map_att.get(0), {
                center: {
                    lat: lat,
                    lng: leg,
                },
                mapTypeControl: false,
                scrollwheel: false,
                draggable: true,
                streetViewControl: false,
                navigationControl: false,
                zoom: zoom,
                styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e9e9e9",
                            },
                            {
                                "lightness": 17,
                            },
                        ],
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5",
                            },
                            {
                                "lightness": 20,
                            },
                        ],
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff",
                            },
                            {
                                "lightness": 17,
                            },
                        ],
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff",
                            },
                            {
                                "lightness": 29,
                            },
                            {
                                "weight": 0.2,
                            },
                        ],
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff",
                            },
                            {
                                "lightness": 18,
                            },
                        ],
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff",
                            },
                            {
                                "lightness": 16,
                            },
                        ],
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5",
                            },
                            {
                                "lightness": 21,
                            },
                        ],
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dedede",
                            },
                            {
                                "lightness": 21,
                            },
                        ],
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on",
                            },
                            {
                                "color": "#ffffff",
                            },
                            {
                                "lightness": 16,
                            },
                        ],
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36,
                            },
                            {
                                "color": "#333333",
                            },
                            {
                                "lightness": 40,
                            },
                        ],
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off",
                            },
                        ],
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2",
                            },
                            {
                                "lightness": 19,
                            },
                        ],
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fefefe",
                            },
                            {
                                "lightness": 20,
                            },
                        ],
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#fefefe",
                            },
                            {
                                "lightness": 17,
                            },
                            {
                                "weight": 1.2,
                            },
                        ],
                    },
                ],
            });
            google.maps.event.addDomListener(window, "resize", function () {
                let center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
                center = null;
            });
            new google.maps.Marker({
                position: letLeng,
                animation: google.maps.Animation.BOUNCE,
                icon: "assets/img/map-marker.png",
                title: "ASL",
                map: map,
            });

            lat = leg = zoom = letLeng = null;

        } catch (e) {
            console.log(e);
        }
    }, 500);

}

function toggleButton() {

    $(".image-head-contact").each(function () {
        let tl = new TimelineLite({paused: true});
        tl.to($(this).find(".box-overlay"), 0.5, {autoAlpha: 0});

        tl.staggerTo($(this).find(".contact-info-item"), 0.8, {
            y: 20,
            autoAlpha: 0,
            ease: Back.easeInOut.config(4),
        }, 0.3, 0);
        tl.to($(this).find(".box-text"), 0.5, {autoAlpha: 0}, "-=0.5");
        tl.reverse();

        $(this).find("input[type=\"checkbox\"]").off("change");
        $(this).find("input[type=\"checkbox\"]").on("change", function () {
            tl.reversed(!tl.reversed());
        });

    });


}


/**
 *
 * servicestab
 *
 */
function services_tab($off) {

    if ($off)
        $(".services-about .link-click").off("click");

    $(".services-about").each(function () {
        let _taht = $(this);
        _taht.on("click", ".link-click", function () {
            $(this).addClass("active").siblings().removeClass("active");
            _taht.find("#" + $(this).attr("id") + "-content").fadeIn(1000).siblings().hide();
        });
    });
}

function contactValidator() {
    var contact_form = $("#contact-form");
    if (contact_form < 1) {
        return;
    }
    contact_form.validator();
    // when the form is submitted
    contact_form.on("submit", function (e) {
        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = "alert-" + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = "<div class=\"alert " + messageAlert + " alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" + messageText + "</div>";

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        contact_form.find(".messages").html(alertBox);
                        // empty the form
                        contact_form[0].reset();
                    }
                    setTimeout(function () {
                        contact_form.find(".messages").html("");
                    }, 3000);

                },
                error: function (error) {
                    console.log(error);
                },
            });
            return false;
        }
    });
}