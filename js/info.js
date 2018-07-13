function infoBox() {
    var infoIcon = document.getElementById("info-icon");
    var infoBox = document.getElementById("top-right");
    
    infoBox.classList.toggle("active");
    
    infoIcon.classList.toggle("fa-arrow-right");
    infoIcon.classList.toggle("fa-info");
}