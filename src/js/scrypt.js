$(document).ready(function(){
    $('.carousel__inner').slick({
        slidesToShow: 1,
        adaptiverHeight: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider_arros/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider_arros/right.svg"></button>',
    });
  });