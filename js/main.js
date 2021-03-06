window.addEventListener('load', function () {

    setTimeout(function () {

        document.getElementById("preloader").classList.add("fuccoff");

        document.getElementById("grid2").classList.add("fuccoff");

    }, 1000);

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

function modal() {
    document.getElementById("modal").classList.add("show");
    setTimeout(function () {
        document.getElementById("modal").classList.remove("show");
    }, 5000);
}
