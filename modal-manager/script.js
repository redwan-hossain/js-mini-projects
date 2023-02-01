"use strict";
let modalCloseButtonSelector = document.querySelector(".close-modal");
const modalButtons = document.querySelectorAll(".show-modal");
let overlaySelector = document.querySelector(".overlay");
let modalSelector = document.querySelector(".modal");

const showModal = function () {
    overlaySelector.classList.remove("hidden");
    modalSelector.classList.remove("hidden");
};

const closeModal = function () {
    overlaySelector.classList.add("hidden");
    modalSelector.classList.add("hidden");
};

const closeModalByESC = function (event) {
    if (event.key === "Escape" && !modalSelector.classList.contains("hidden")) {
        closeModal();
    }
};

for (let i = 0; i < modalButtons.length; ++i) {
    modalButtons[i].onclick = showModal;
}

modalCloseButtonSelector.onclick = closeModal;
overlaySelector.onclick = closeModal;
document.onkeydown = closeModalByESC;
