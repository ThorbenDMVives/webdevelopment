let personen = [];
let huidigeIndex = -1;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorte: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    }


    valideer();
    if(huidigeIndex === -1) {
        personen.push(persoon);
        let option = document.createElement("option");
        option.setAttribute("id", personen.indexOf("persoon").toString());
        option.innerText = persoon.voornaam + " " + persoon.familienaam;
        let lijst = document.getElementById("lstPersonen");
        lijst.appendChild(option);
    }else {
        personen[huidigeIndex] = persoon;
        let lijst = document.getElementById("lstPersonen");
        lijst.options[huidigeIndex].innerText = persoon.voornaam + " " + persoon.familienaam;
    }

};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    huidigeIndex = -1;
    let clear = () => {
        document.querySelectorAll("input").forEach(input => {
                document.getElementById("btnNieuw").value = "Nieuw";
                input.value = "";
                document.getElementById("btnBewaar").value = "Bewaar";
        });
    }
    clear();
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);


    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", () => {
       huidigeIndex = lstPersonen.selectedIndex;
        let persoon = personen[huidigeIndex];

        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboorte;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    });
};

window.addEventListener("load", setup);