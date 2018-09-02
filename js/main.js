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

function infoBox() {
    var infoIcon = document.getElementById("info-icon");
    var infoBox = document.getElementById("top-right");

    infoBox.classList.toggle("active");

    infoIcon.classList.toggle("fa-arrow-right");
    infoIcon.classList.toggle("fa-info");
}
