$(document).ready(function () {

    $(window).scroll(function () {

        if($(window).scrollTop() >= 100) {
            $('.header').addClass('fixed', 1000)
        }else {
            $('.header').removeClass('fixed', 1000)
        }

        $('#mouse').addClass('mouse-down');
    });

    $('.works-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 500,
            opener: function(element) {
                return element.find('img');
            }
        }

    });

});

