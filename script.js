function pefil() {
    let menu = document.querySelector("div#menu")
    let chat = document.querySelector("div.chat")
    const currentWidth = window.getComputedStyle(menu).width

    if (currentWidth === "0px") {
        menu.style.width = "250px"
        chat.style.left = "290px"
        chat.style.width = "calc(100% - 290px)"
    } else {
        menu.style.width = "0px"
        chat.style.left = "40px"
        chat.style.width = "calc(100% - 40px)"
    }
}