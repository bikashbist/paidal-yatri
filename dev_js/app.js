AOS = require('aos');
AOS.init();
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});

// slick slider banner homepage
$(document).on('ready', function () {
    $('.slider--slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        useTransform: false,
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next'),
    });
});


$('.slider-part').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.slider__prev-a'),
    nextArrow: $('.slider__next-b'),
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});