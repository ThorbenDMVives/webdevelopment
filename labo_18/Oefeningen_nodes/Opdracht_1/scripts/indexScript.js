const setup = () => {


    const verander = () => {
        let inhoud = document.querySelectorAll("p")
        inhoud[0].textContent= "Goed gedaan!"

    }
    document.getElementById("button").addEventListener("click", verander);
}
window.addEventListener("load", setup);