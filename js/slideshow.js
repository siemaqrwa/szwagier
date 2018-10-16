var actualSlide = -1;
var translateX = document.getElementById("slideshow");
var allSlides = document.getElementsByClassName("slide");
var slideDots = document.getElementsByClassName("dot");
var slideDuration;

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

    translateX.style.transform = "translateX(-" + (actualSlide * (100 / Number(allSlides.length))) + "%)";

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

function detectswipe(el, func) {
    swipe_det = new Object();
    swipe_det.sX = 0;
    swipe_det.sY = 0;
    swipe_det.eX = 0;
    swipe_det.eY = 0;
    var min_x = 20;
    var max_x = 40;
    var min_y = 40;
    var max_y = 50;
    var direc = "";
    ele = document.getElementById(el);
    ele.addEventListener('touchstart', function (e) {
        var t = e.touches[0];
        swipe_det.sX = t.screenX;
        swipe_det.sY = t.screenY;
    }, false);
    ele.addEventListener('touchmove', function (e) {
        e.preventDefault();
        var t = e.touches[0];
        swipe_det.eX = t.screenX;
        swipe_det.eY = t.screenY;
    }, false);
    ele.addEventListener('touchend', function (e) {
        if (swipe_det.eX > swipe_det.sX) direc = "r";
        else direc = "l";

        if (direc != "") {
            if (typeof func == 'function') func(el, direc);
        }
        direc = "";
    }, false);
}

function swipe(el, d) {
    if(d == "l")
        moveSlide(1);
    else if(d == "r")
        moveSlide(-1);
}

detectswipe('slideshow', swipe);
