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



$(document).ready(function () {
    $("body").easeScroll();
});
