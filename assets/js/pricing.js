$(document).ready(function () {
    ///owl-carousel
    $('.owl-carousel').owlCarousel({
        margin: 30,
        autoplay: true,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                items: 2,
                nav: false,
                loop: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
                dots: false
            }
        }
    })
});