var Modal = document.getElementById("modal");
var ModalContent = document.getElementById("modal-content");

function showModal2(x) {
    Modal.classList.add("show");
    ModalContent.src = x;
}

function closeModal() {
    Modal.classList.remove("show");
}

/*
var Images;
var currentImage = document.getElementById("currentImage");
*/
function showModal(background, year, current) {
    /*
    var allImages = document.getElementById("allImages");
    
    Images = document.getElementsByClassName("stuff-" + year);
    currentImage.innerHTML = current;
    
    if (Images.length > 9) {
        allImages.innerHTML = Images.length;
    }
    
    else {
        allImages.innerHTML = "0" + Images.length;
    }
    */
    
    
    Modal.classList.add("show");
    ModalContent.style.backgroundImage = background;
}

function moveModal(n){
    
}