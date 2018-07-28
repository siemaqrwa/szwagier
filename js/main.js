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

function isIEorEDGE() {
    if (navigator.appName == 'Microsoft Internet Explorer') {
        document.getElementById("grid2").style.marginLeft = "120px";
        return true; // IE
    } else if (navigator.appName == "Netscape") {
        return navigator.appVersion.indexOf('Edge') > -1; // EDGE
    }

    return false;
}

if (isIEorEDGE() == false) {

    $(document).ready(function () {
        $("body").easeScroll();
    });

}

function isIE(userAgent) {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
}

if (isIE() == true) {
    $(".grid2").css({
        "margin-left": "120px"
    });
    
    $(".cell").css({
        "display": "inline-block"
    });
}