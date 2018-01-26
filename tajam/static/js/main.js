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

    var imageEl = document.getElementById('imageTriangle'),
        storyEl = document.getElementById('storyText'),
        itemImageEls = document.getElementsByClassName('item__image'),
        formEl = document.getElementById('form'),
        clientEl = document.getElementById('client');


    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled >= 100 && !imageEl.classList.contains('storyImage__img-show') && !storyEl.classList.contains('storyText-show')){
            imageEl.classList.add('storyImage__img-show');
            storyEl.classList.add('storyText-show');
        }

        if(itemImageEls[0].getBoundingClientRect().top <= 800 && !itemImageEls[0].classList.contains('item__image-show')){
            for(var i = 0; i < 3; i++){
                itemImageEls[i].classList.add('item__image-show');
            }
        }

        if(itemImageEls[3].getBoundingClientRect().top <= 800 && !itemImageEls[3].classList.contains('item__image-show')){
            for(i = 3; i < 6; i++){
                itemImageEls[i].classList.add('item__image-show');
            }
        }

        if(itemImageEls[6].getBoundingClientRect().top <= 800 && !itemImageEls[6].classList.contains('item__image-show')){
            for(i = 6; i < itemImageEls.length; i++){
                itemImageEls[i].classList.add('item__image-show');
            }
        }

        if(formEl.getBoundingClientRect().top <=800 && !formEl.classList.contains('formWrapper-show')){
            formEl.classList.add('formWrapper-show');
        }

        if(clientEl.getBoundingClientRect().top <=800 && !formEl.classList.contains('clients-show')){
            clientEl.classList.add('clients-show');
        }
    }
});