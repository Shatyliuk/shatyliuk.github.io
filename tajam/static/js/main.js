$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });

    $('.menuButton').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('menu-open');
        $('.menu__item').toggleClass('menu__item-open')
    });
});