$(document).ready(function () {
    // mobile menu
    openNav = () => {
        document.getElementById("myNav").style.height = "100%";
    }

    closeNav = () => {
        document.getElementById("myNav").style.height = "0%";
    }
    //owl-carousel-1
    $('.owl-carousel-1').owlCarousel({
        margin: 15,
        autoplay: true,
        nav: true,
        navText: ["<span aria-label='Previous'>‹</span>", "<span aria-label='Next'>›</span>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },


            1000: {
                items: 2,
                nav: false,
                loop: true,
                dots: false
            }
        }
    })
    ///owl-carousel
    $('.owl-carousel').owlCarousel({
        margin: 8,
        autoplay: true,
        nav: true,
        navText: ["<span aria-label='Previous'>‹</span>", "<span aria-label='Next'>›</span>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            400: {
                items: 2,
                nav: false,
                loop: true
            },
            767: {
                items: 3,
                nav: false,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
                dots: false
            }
        }
    })
});