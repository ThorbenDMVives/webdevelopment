const setup = () => {

    const getAantaldagen = () => {
        const dateNu = new Date();
        const geboorte = new Date(2007, 8, 17);

        const dag = 1000 * 60 * 60 * 24;

        const tijdsverschil = dateNu.getTime() - geboorte.getTime();

        const verschilInDagen = Math.round(tijdsverschil / dag);

        return verschilInDagen;
    }


    console.log(getAantaldagen());
}
window.addEventListener("load", setup);