const setup = () => {
    // deze code wordt pas uitgevoerd
    // als de pagina volledig is ingeladen
   let naam = window.prompt("Wat is uw naam", "onbekend");
    console.log(naam);
}
window.addEventListener("load", setup);