const setup = () => {
    document.getElementById("button").addEventListener("click", printSplit)

}

const printSplit = () => {
    let string = document.getElementById("input").value;
    let split = string.split("").join(" ");
    document.getElementById("output").textContent = split;
    console.log(printSplit);
}

window.addEventListener("load", setup);