const setup = () => {
    // deze code wordt pas uitgevoerd
    // als de pagina volledig is ingeladen

    [...document.getElementsByTagName("button")].forEach(button => {
        button.addEventListener("click", () => button.classList.toggle("pressed"));
    });
};
window.addEventListener("load", setup);