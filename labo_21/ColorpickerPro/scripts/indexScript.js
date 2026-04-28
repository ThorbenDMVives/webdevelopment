const global = {
    huidigeKleur: "rgb(128, 128, 128)"
};

const setup = () => {
    const roodSlider = document.getElementsByClassName("rood_slider")[0];
    const groenSlider = document.getElementsByClassName("groen_slider")[0];
    const blauwSlider = document.getElementsByClassName("blauw_slider")[0];

    const roodValue = document.getElementById("rood_value");
    const groenValue = document.getElementById("groen_value");
    const blauwValue = document.getElementById("blauw_value");

    const colorBox = document.getElementById("color-box");

    const updateColor = () => {
        const r = roodSlider.value;
        const g = groenSlider.value;
        const b = blauwSlider.value;

        roodValue.textContent = r;
        groenValue.textContent = g;
        blauwValue.textContent = b;

        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        global.huidigeKleur = `rgb(${r}, ${g}, ${b})`;
    };

    const opslaanKnop = document.createElement("button");
    opslaanKnop.textContent = "Save";
    document.querySelector(".container").insertAdjacentElement("afterend", opslaanKnop);

    const kleurVlakkenLijst = document.createElement("div");
    document.body.appendChild(kleurVlakkenLijst);


    const opgeslaanKleuren = JSON.parse(localStorage.getItem("kleuren") || "[]");
    opgeslaanKleuren.forEach(({ r, g, b }) => voegKleurToe(r, g, b));

    function voegKleurToe(r, g, b) {
        const kleurVlak = document.createElement("div");
        kleurVlak.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        kleurVlak.style.width = "100px";
        kleurVlak.style.height = "60px";
        kleurVlak.style.display = "inline-block";
        kleurVlak.style.position = "relative";
        kleurVlak.style.cursor = "pointer";

        kleurVlak.addEventListener("click", () => {
            roodSlider.value = r;
            groenSlider.value = g;
            blauwSlider.value = b;
            updateColor();
        });

        const verwijderKnop = document.createElement("button");
        verwijderKnop.textContent = "X";
        verwijderKnop.style.color = "red";
        verwijderKnop.style.position = "absolute";
        verwijderKnop.style.top = "0";
        verwijderKnop.style.right = "0";
        verwijderKnop.addEventListener("click", (e) => {
            e.stopPropagation();
            kleurVlak.remove();


            const kleuren = JSON.parse(localStorage.getItem("kleuren") || "[]");
            const bijgewerkt = kleuren.filter(k => !(k.r == r && k.g == g && k.b == b));
            localStorage.setItem("kleuren", JSON.stringify(bijgewerkt));
        });

        kleurVlak.appendChild(verwijderKnop);
        kleurVlakkenLijst.appendChild(kleurVlak);
    }

    opslaanKnop.addEventListener("click", () => {
        const r = roodSlider.value;
        const g = groenSlider.value;
        const b = blauwSlider.value;

        // Sla op in localStorage
        const kleuren = JSON.parse(localStorage.getItem("kleuren") || "[]");
        kleuren.push({ r, g, b });
        localStorage.setItem("kleuren", JSON.stringify(kleuren));

        voegKleurToe(r, g, b);
    });

    roodSlider.addEventListener("input", updateColor);
    groenSlider.addEventListener("input", updateColor);
    blauwSlider.addEventListener("input", updateColor);

    updateColor();
};

window.addEventListener("load", setup);