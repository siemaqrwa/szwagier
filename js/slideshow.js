var actualSlide = -1;
var translateX = document.getElementById("slideshow");
var allSlides = document.getElementsByClassName("slide");
var slideDots = document.getElementsByClassName("dot");
var slideDuration = setTimeout(slideshow, 5000);

window.addEventListener('load', function () {

    slideshow();

});

function slideshow() {

    actualSlide++;

    if (actualSlide == allSlides.length) {
        actualSlide = 0;
    }

    if (actualSlide <= -1) {
        actualSlide = allSlides.length - 1;
    }

    translateX.style.transform = "translateX(-" + ( actualSlide * ( 100 / Number(allSlides.length) ) ) + "%)";

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
