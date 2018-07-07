function Menu(x) {
    var menu = document.getElementById("menu");

    x.classList.toggle("active");
    menu.classList.toggle("active");
}

var actualSlide = 0;
var translateX = document.getElementById("slideshow");
var allSlides = document.getElementsByClassName("slide");
var slideDots = document.getElementsByClassName("dot");
var slideDuration = setTimeout(slideshow, 5000);

function slideshow() {

    translateX.style.transform = "translateX(-" + (actualSlide * 25) + "%)";
    
    for (var i=0; i < slideDots.length; i++) {
        slideDots[i].className = "dot";
    }
    
    slideDots[actualSlide].classList.add("active");

    actualSlide++;

    if (actualSlide == allSlides.length) {
        actualSlide = 0;
    }
    clearTimeout(slideDuration);
    slideDuration = setTimeout(slideshow, 5000);
}

function showSlide(n) {
    actualSlide = n;
    slideshow();
}