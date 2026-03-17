
 setup = () => {

    document.getElementById("button").addEventListener("click", toevoegen);
 }


    const toevoegen = () => {

        const ingevuldeGemeentes = invoegen();
        const lijst = document.getElementById("gemeentes");
        ingevuldeGemeentes.forEach((gemeente) => {
            const option = document.createElement("option");
            option.text = gemeente;
            option.value = gemeente;
            lijst.add(option, 0);
        })


}

    const invoegen = () => {
        let blijvenInvoegen = true;
        const gemeentes = [];

        while(blijvenInvoegen){
            let input = prompt("Vul een gemeente in");

            if(input && input === "stop"){
                blijvenInvoegen = false;
            }else{
                gemeentes.push(input);
            }
        }
        return gemeentes;
    }
window.addEventListener("load", setup);