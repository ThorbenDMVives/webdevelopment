const setup = () => {
    // deze code wordt pas uitgevoerd
    // als de pagina volledig is ingeladen

    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        let p = document.getElementById("txtOutput");
        p.textContent = tekst
    }

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);


}
window.addEventListener("load", setup);