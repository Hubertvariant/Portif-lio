function deslizar(){
    let menu = window.document.querySelector("nav#menu")
    let borda = window.document.querySelector("div#borda")
    let i = window.document.querySelector("p#icon")
    if (borda.style.left === "250px"){
        i.removeAttribute("class")
        menu.style.width = "0"
        borda.style.left = "0"
        borda.className = "fa-solid fa-arrow-right"
    }else{
        i.removeAttribute("class")
        menu.style.width = "250px"
        borda.style.left = "250px"
        borda.className = "fa-solid fa-arrow-left"
    }
}