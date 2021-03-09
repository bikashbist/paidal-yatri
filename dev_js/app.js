AOS = require('aos');
AOS.init();
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
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
