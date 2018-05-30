$(document).ready(function () {
    $('.nav__item:has(ul)').on('click', function (e) {
        e.preventDefault();
        $('.nav__item .dropdown').slideToggle();
    });

    $('#navIcon').on('click', function () {
        $(this).toggleClass('open');
        $('#navbar').slideToggle();
    });

    //accordion

    var acc = document.getElementsByClassName('accordion__heading');

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');

            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        })
    }

    $('#countdownTimer').countDown();
});