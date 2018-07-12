window.addEventListener('load', function () {

    document.getElementById("preloader").classList.add("fuccoff");

    document.getElementById("grid2").classList.add("fuccoff");

});

function delay(URL) {
    document.getElementById("preloader").classList.remove("fuccoff");
    document.getElementById("preloader").innerHTML = "";
    setTimeout(function () {
        window.location = URL;
    }, 700);
}

function Menu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.getElementById("menu-icon");

    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
}

$("html").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: !0,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: !0,
  arrowScroll: 50
});
