const setup = () => {
    let student1 = {
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen :
            ["SeppeVuylsteke", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos : 5
    }

    const jsonString = JSON.stringify(student1)
    const namenVanExen = JSON.parse(jsonString).namenVanExen;
    console.log(namenVanExen);

}
window.addEventListener("load", setup);