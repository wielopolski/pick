$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 8.7,
        slidesToScroll: 8,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
                ,
                slidesToScroll: 3
            }
        }]
    });
});