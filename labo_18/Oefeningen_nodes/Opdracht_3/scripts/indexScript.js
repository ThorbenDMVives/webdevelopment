const setup = () => {


    document.getElementById("knop").addEventListener("click", addParagraaf);
}

const addParagraaf = () =>{
    const p = document.createElement("p")
    p.textContent = "Het werkt normaalgezien";
    document.querySelector("#myDIV").appendChild(p);
}



window.addEventListener("load", setup);