window.addEventListener('load', function () {
        setTimeout( function () {
        document.getElementById("preloader").classList.add("fuccoff");
    }, 2000);
});

function dontFuccOff () {
    document.getElementById("preloader").classList.remove("fuccoff");
    
    setTimeout( function () {
        document.getElementById("preloader").classList.add("fuccoff");
    }, 5000);
    
}

function Menu(x) {
    var menu = document.getElementById("menu");

    x.classList.toggle("active");
    menu.classList.toggle("active");
}

var actualSlide = -1;
var translateX = document.getElementById("slideshow");
var allSlides = document.getElementsByClassName("slide");
var slideDots = document.getElementsByClassName("dot");
var slideDuration = setTimeout(slideshow, 5000);

function slideshow() {

    actualSlide++;

    if (actualSlide == allSlides.length) {
        actualSlide = 0;
    }

    if (actualSlide <= -1) {
        actualSlide = allSlides.length - 1;
    }

    translateX.style.transform = "translateX(-" + (actualSlide * 25) + "%)";

    for (var i = 0; i < slideDots.length; i++) {
        slideDots[i].className = "dot";
    }

    slideDots[actualSlide].classList.add("active");

    clearTimeout(slideDuration);
    slideDuration = setTimeout(slideshow, 5000);
}

function showSlide(n) {
    actualSlide = n - 1;
    slideshow();
}

function moveSlide(n) {
    actualSlide = actualSlide - 1 + n;

    slideshow();
}
