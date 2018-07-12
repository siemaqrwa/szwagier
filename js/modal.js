var Modal = document.getElementById("modal");
var ModalContent = document.getElementById("modal-content");

function showModal2(x) {
    Modal.classList.add("show");
    ModalContent.src = x;
}

function closeModal() {
    Modal.classList.remove("show");
}