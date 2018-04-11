$(document).ready(function(){function e(e){for(var t=document.getElementsByClassName(e),n=0;n<t.length;n++)t[n].addEventListener("click",function(){this.classList.toggle("accordion__button-active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}function t(e){e.classList.add("error")}function n(e){e.classList.contains("error")&&e.classList.remove("error")}function o(e){var t=new RegExp("^[0-9]{16}$");return e=Number(e),!!t.test(e)&&a(e)}function a(e){for(var t=0,n=0;n<e.length;n++){var o=parseInt(e.substr(n,1));n%2==0&&(o*=2)>9&&(o=1+o%10),t+=o}return t%10==0}function r(e){return new RegExp("^[a-zA-Z ]+$").test(e)}function l(e){return!isNaN(parseFloat(e))&&isFinite(e)}function i(e,t){for(var n=document.getElementsByClassName(e),o=document.getElementById("productsWrap"),a=[],r=0;r<n.length;r++)a.push({element:n[r],price:parseFloat(n[r].lastChild.firstChild.lastChild.innerHTML)});for(a.sort(t),o.innerHTML="",r=0;r<a.length;r++)o.appendChild(a[r].element)}function s(e,t){return e.price-t.price}function u(e,t){return t.price-e.price}$(".menuButton").click(function(){$(this).toggleClass("open"),$(".mainNavigation").toggleClass("mainNavigation-open"),$(".mainNavigation__item").toggleClass("menu__item-open"),$("body").toggleClass("overflow")}),$(".productItem__icon").on("click",function(){$("#form").css("display","flex").animate({opacity:1,height:"100%"}),$("body").addClass("overflow")}),$("#modalClose").on("click",function(e){e.preventDefault(),$("#form").css({height:0,opacity:0,display:"none"}),$("body").removeClass("overflow")});var c=$("#header"),d=c.offset().top,m=c.height();$(document).scroll(function(){var e=$(this).scrollTop();e>d+m?c.animate({top:0,paddingTop:15,paddingBottom:5}):e<=d&&c.clearQueue().animate({paddingTop:45,paddingBottom:25})}),e("accordion__button");var v=$("#firstAmount"),g=$("#secondAmount");$("#rangeSlider").slider({range:!0,min:0,max:1e3,values:[70,400],slide:function(e,t){v.val(t.values[0]),g.val(t.values[1])}}),$("#sortButton").on("click",function(e){e.preventDefault(),$(this).next().slideToggle()});var f=document.getElementById("form");f.onsubmit=function(e){e.preventDefault();for(var a=this.elements,i=document.getElementsByClassName("modalForm__input"),s="",u=0;u<i.length;u++)n(i[u]),!i[u].value||i[u].value.length<4||!l(i[u].value)?t(i[u]):s+=i[u].value;if(n(a.cardHolder),(!a.cardHolder.value||a.cardHolder.value.length<4||!r(a.cardHolder.value))&&t(a.cardHolder),n(a.cvvNumber),(!a.cvvNumber.value||a.cvvNumber.value.length<3||!l(a.cvvNumber.value))&&t(a.cvvNumber),!(o(s)&&r(a.cardHolder.value)&&l(a.cvvNumber.value)&&a.month.value&&a.year.value))return!1;f.submit()};var p=document.getElementById("sortUp"),h=document.getElementById("sortDown");p.addEventListener("click",function(e){e.preventDefault(),i("productItem",u)}),h.addEventListener("click",function(e){e.preventDefault(),i("productItem",s)})});; i++) {

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