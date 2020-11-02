$(document).ready(function() {
    slickHeader();
    ourwork();
    //slick_menu();

    slidetoggle_header();
    fancybox();
    headerTop();
    //countDown();

});


function slickHeader() {
    // -----------------slick----------

    $(".banner__slide").slick({
        autoplay: false,

        arrows: true,

        dots: false,

        fade: true,

        slidesToShow: 1,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 1500,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        responsive: [{
            breakpoint: 767.5,
            settings: {
                arrows: false,
            },
        }, ],
    });
}

function ourwork() {
    $(".internal__slide").slick({
        autoplay: false,

        arrows: true,

        dots: false,

        slidesToShow: 1,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 1000,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        centerMode: true,
        centerPadding: "27%",
        responsive: [{
                breakpoint: 991.5,
                settings: {
                    centerPadding: "20%",
                },
            },
            {
                breakpoint: 767.5,
                settings: {
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 413.5,
                settings: {
                    centerPadding: "0",
                },
            },
        ],
    });
    // $("#ser-prev").click(function(event) {
    //     event.preventDefault();

    //     $(".collum-photo").slick("slickPrev");
    // });

    // $("#ser-next").click(function(event) {
    //     event.preventDefault();

    //     $(".collum-photo").slick("slickNext");
    // });
}

function slick_menu() {
    $(".ourmenu__slick")
        .on("afterChange init", function(event, slick, direction) {
            //console.log('afterChange/init', event, slick, slick.$slides);

            // remove all prev/next

            slick.$slides.removeClass("prevdiva");

            // find current slide

            for (var i = 0; i < slick.$slides.length; i++) {
                var $slide = $(slick.$slides[i]);

                if ($slide.hasClass("slick-current")) {
                    // update DOM siblings

                    $(".slick-current").prev().addClass("prevdiva");

                    break;
                }
            }
        })

    .on("beforeChange", function(event, slick) {
            // optional, but cleaner maybe

            // remove all prev/next

            slick.$slides.removeClass("prevdiva");
        })
        .slick({
            autoplay: false,

            arrows: true,

            dots: false,

            slidesToShow: 2,

            slidesToScroll: 2,

            // draggable: false,

            infinite: true,

            //pauseOnHover: false,

            //swipe: true,

            // touchMove: true,

            speed: 1500,

            autoplaySpeed: 3000,

            useTransform: true,

            cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

            //adaptiveHeight: true,

            //focusOnSelect: true,
            centerMode: true,
            centerPadding: "300px",
            responsive: [{
                    breakpoint: 1199.5,
                    settings: {
                        centerPadding: "100px",
                    },
                },
                {
                    breakpoint: 767.5,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "80px",
                    },
                },
                {
                    breakpoint: 575.5,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "40px",
                    },
                },
                {
                    breakpoint: 375.5,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "0px",
                    },
                },
            ],
        });
}

function slidetoggle_header() {
    // var link_panel = $('.menu-mobile');

    // link_panel.click(function(){

    // 	$(this).parent().find('.main-menu').slideToggle('active');

    // })
    jQuery(".header__bar-button-mobile a").click(function() {
        jQuery(".header__bar-nav").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".header__bar-button-mobile a, .header__bar-nav.active").is(e.target) &&
            jQuery(".header__bar-button-mobile a, .header__bar-nav.active").has(e.target).length === 0
        ) {
            jQuery(".header__bar-nav").removeClass("active");
            jQuery("body").removeClass("show-scroll");
        }
    });
}

function fancybox() {
    var gallery_row = jQuery(".p__row");

    gallery_row.each(function() {
        jQuery(this)
            .find(".p__collum-photo a")

        .attr("data-fancybox", "images");

        jQuery('[data-fancybox="images"]').fancybox({
            thumbs: {
                showOnStart: true,
            },
        });
    });

    if ($(window).width() > 767.5) {
        var itemclass = "img-overlay";
        $(".p__collum-photo").append('<div class="' + itemclass + '"></div>');
    }
}

function headerTop() {
    var header = $(".header__scroll");
    if (header.length) {
        var offset = header.offset().top;
        header_height = $(".header__top").height();
        containerwidth = $(window).width();
        $(window).scroll(function() {
            if ($(window).scrollTop() > header_height) {
                header.addClass("active");
                $("#header").addClass("hide-top");
            } else {
                header.removeClass("active");
                $("#header").removeClass("hide-top");
            }
        });
    }
}
// window.addEventListener("load", () => {
//     const results = Splitting({
//         target: ".image",
//         by: "cells",
//         image: true,
//         rows: 8,
//     });

//     function myCallback(el) {
//         var a = new TimelineMax();
//         return a.staggerFromTo(
//             ".cell",
//             0.5, {
//                 x: 400,
//                 opacity: 0,
//             }, {
//                 x: 0,
//                 opacity: 1,
//                 ease: Power2.ease,
//             },
//             0.05
//         );
//     }

//     $(".image").waypoint(
//         function(direction) {
//             if (direction === "down") {
//                 /* add this.destroy() if you want the animation to only play once */
//                 myCallback();
//             }
//         }, {
//             offset: "100%",
//         }
//     );
// });