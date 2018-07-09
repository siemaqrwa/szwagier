window.addEventListener('load', function () {
    var blackCover = document.getElementsByClassName("black-cover");

    document.getElementById("preloader").classList.add("fuccoff");
    
    
    for (var i; i < blackCover.length; i++) {
        blackCover[i].classList.add("fuccoff");
    }

});

function dontFuccOff() {
    document.getElementById("preloader").classList.remove("fuccoff");
    document.getElementById("preloader").innerHTML = "";
}

function Menu(x) {
    var menu = document.getElementById("menu");

    x.classList.toggle("active");
    menu.classList.toggle("active");
}