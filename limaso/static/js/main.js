$(document).ready(function () {

    //hamburger menu

    $(".menuButton").click(function () {
        $(this).toggleClass("open");
        $(".mainNavigation").toggleClass("mainNavigation-open");
        $(".mainNavigation__item").toggleClass("menu__item-open");
        $("body").toggleClass("overflow");
    });

    //modal window

    $(".productItem__icon").on("click", function () {
        $("#form").css("display", "flex").animate({
            opacity: 1,
            height: "100%"
        });

        $("body").addClass("overflow");
    });

    $("#modalClose").on("click", function (ev) {
        ev.preventDefault();

        $("#form").css({
            height: 0,
            opacity: 0,
            display: "none"
        });

        $("body").removeClass("overflow");
    });

    //sticky header

    var $navbar = $("#header"),
        yPos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > yPos + height) {
            $navbar.addClass("header-sticky").animate({
                top: 0,
                paddingTop: 15,
                paddingBottom: 5
            });
        } else if (scrollTop <= yPos) {
            $navbar.removeClass("header-sticky").clearQueue().animate({
                paddingTop: 45,
                paddingBottom: 25
            });
        }
    });

    //accordion

    function accordion(cls) {

        var accordion = document.getElementsByClassName(cls);

        for (var i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function () {

                this.classList.toggle("accordion__button-active");
                var panel = this.nextElementSibling;

                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }

            })
        }

    }

    accordion("accordion__button");

    //range slider

    var $firstAmount = $("#firstAmount");
    var $secondAmount = $("#secondAmount");

    $("#rangeSlider").slider({
        range: true,
        min: 0,
        max: 1000,
        values: [70, 400],
        slide: function (event, ui) {
            $firstAmount.val(ui.values[0]);
            $secondAmount.val(ui.values[1]);
        }
    });


    $("#sortButton").on("click", function (evt) {
        evt.preventDefault();

        $(this).next().slideToggle();
    });

    //form validation

    var form = document.getElementById("form");

    form.onsubmit = function (ev) {
        ev.preventDefault();

        var elements = this.elements;
        var cardNumbers = document.getElementsByClassName("modalForm__input");
        var number = "";

        for (var i = 0; i < cardNumbers.length; i++) {

            resetError(cardNumbers[i]);

            if (!cardNumbers[i].value || cardNumbers[i].value.length < 4 || !validateCvv(cardNumbers[i].value)) {
                showError(cardNumbers[i]);
            } else {
                number += cardNumbers[i].value;
            }
        }

        resetError(elements.cardHolder);

        if (!elements.cardHolder.value || elements.cardHolder.value.length < 4 || !validateCardHolder(elements.cardHolder.value)) {
            showError(elements.cardHolder);
        }

        resetError(elements.cvvNumber);

        if (!elements.cvvNumber.value || elements.cvvNumber.value.length < 3 || !validateCvv(elements.cvvNumber.value)) {
            showError(elements.cvvNumber);
        }

        if (!validateCardNumber(number) || !validateCardHolder(elements.cardHolder.value) || !validateCvv(elements.cvvNumber.value) || !elements.month.value || !elements.year.value) {
            return false;
        } else {
            form.submit();
        }
    };

    function showError(element) {
        element.classList.add("error")
    }

    function resetError(element) {
        if (element.classList.contains("error")) {
            element.classList.remove("error")
        }
    }

    function validateCardNumber(number) {
        var regEx = new RegExp("^[0-9]{16}$");
        number = Number(number);

        if (!regEx.test(number))
            return false;

        return luhnCheck(number);

    }

    function luhnCheck(val) {
        var sum = 0;
        for (var i = 0; i < val.length; i++) {
            var intVal = parseInt(val.substr(i, 1));
            if (i % 2 == 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        return (sum % 10) == 0;
    }

    function validateCardHolder(cardHolder) {
        var regEx = new RegExp("^[a-zA-Z ]+$");

        return regEx.test(cardHolder);
    }

    function validateCvv(cvvNumber) {
        return !isNaN(parseFloat(cvvNumber)) && isFinite(cvvNumber);
    }

    //sort by price

    function sortItems(cls, sortRule) {

        var items = document.getElementsByClassName(cls);
        var productsWrap = document.getElementById("productsWrap");
        var prices = [];

        for (var i = 0; i < items.length; i++) {

            prices.push({
                element: items[i],
                price: parseFloat(items[i].lastChild.firstChild.lastChild.innerHTML)
            });
        }

        prices.sort(sortRule);

        productsWrap.innerHTML = "";

        for (i = 0; i < prices.length; i++) {
            productsWrap.appendChild(prices[i].element);
        }
    }

    function sortRuleDown(firstNumber, secondNumber) {
        return firstNumber.price - secondNumber.price;
    }

    function sortRuleUp(firstNumber, secondNumber) {
        return secondNumber.price - firstNumber.price ;
    }

    var sortButtonUp = document.getElementById('sortUp');
    var sortButtonDown = document.getElementById('sortDown');

    sortButtonUp.addEventListener('click', function (evt) {
        evt.preventDefault();

        sortItems("productItem", sortRuleUp);
    });

    sortButtonDown.addEventListener('click', function (evt) {
        evt.preventDefault();

        sortItems("productItem", sortRuleDown);
    });
});