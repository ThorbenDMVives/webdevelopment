const setup = () => {
    document.querySelectorAll("li").forEach(e =>{
        e.classList.add("listitem");
})

    const img = document.createElement("img")
    const body = document.querySelector("body");
    img.setAttribute("src", "../Images/punten.jpg")
    img.setAttribute("alt", "photo")
    body.appendChild(img);
    console.log(img.src);
}
window.addEventListener("load", setup);