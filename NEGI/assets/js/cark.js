$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        autoplay:true,
        margin:15,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,

            }
        }
    })
});