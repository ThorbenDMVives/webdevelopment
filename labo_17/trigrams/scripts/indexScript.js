let input;

const setup = () => {
    document.getElementById("button").addEventListener("click", thomas );
    input = document.getElementById("input");
}
const thomas = () => {
    let woord = '';
    let i = 0;
    while (i < input.value.length && input.value.substring(i, i +3).length > 2) {
        woord += input.value.substring(i, i + 3);
        if(i !== input.value.length - 3) {
           woord += " - "
        }
        i++;
    }
    console.log(woord);
}

window.addEventListener("load", setup);