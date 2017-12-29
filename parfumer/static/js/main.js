$(document).ready(function () {

    $('.main-nav .nav-block').find('a').each(function () {
        var location = window.location.href;
        var link = this.href;

        if(location === link){
            $(this).addClass('active');
        }

    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        smartSpeed: 750
    });
    $('.popup-link').magnificPopup({
        type: 'image'
    });

    function tabs() {
        var $tabsLinks = $('.tab-links_wrapper li');
        var $tabsContent = $('.tabs-content');

        $tabsLinks.first().addClass('active');
        $tabsContent.hide();
        $tabsContent.first().show();

        $tabsLinks.click(function () {
            $tabsLinks.removeClass('active');
            $(this).addClass('active');
            $tabsContent.hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
    }

    tabs();

    function toggleMenu(clickElem, openElem) {
        $(document).on('click', clickElem, function () {
            $(this).toggleClass('open');
            $(openElem).slideToggle();
        })
    }

    toggleMenu('.main-nav .nav-icon', '.nav-block');
    toggleMenu('.main-content .nav-icon', '.aside-nav');

    function toggleList(clickElem, openElem) {
        $(document).on('click', clickElem, function () {
            $(this).find(openElem).slideToggle();
        });
    }

    toggleList('.aside-nav', '.aside-nav_list');



});