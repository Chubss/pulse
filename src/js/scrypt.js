$(document).ready(function () {
    $('.carousel__inner').slick({
        slidesToShow: 1,
        adaptiverHeight: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider_arros/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider_arros/right.svg"></button>',
    });
    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function () {
        $(this)
            .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
            .closest('div.catalogue__container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
    });


    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
                $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
            });
        });
    }

    toggleSlide('.catalogue-item__link');
    toggleSlide('.catalogue-item__back');

});
