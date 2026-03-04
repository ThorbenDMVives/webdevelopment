const setup = () => {
    // deze code wordt pas uitgevoerd
    // als de pagina volledig is ingeladen


let i;
let klasses = document.getElementsByClassName("belangrijk opvallend");

for (i = 0; i < klasses.length; i++) {
    console.log(klasses[i].className);
}

window.addEventListener("load", setup);
}