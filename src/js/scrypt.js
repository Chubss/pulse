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

    //modals//
    $('[data-modal="consultation"]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.btn_card').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalogue-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    function validateForms(form) {
        $(form).validate({
            rules: {
                // simple rule, converted to {required:true}
                name: "required",
                phone: "required",
                // compound rule
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Please specify your name",
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                }
            },
        });
    }
    validateForms('#consultation form');
    validateForms('.consultation__form');
    validateForms('#order form');

    $('input[name=phone]').mask("+3 (999) 999-99-99");

    //Smooth scroll//
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});