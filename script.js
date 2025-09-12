function pefil() {
    const menu = document.querySelector("div#menu");
    const currentWidth = window.getComputedStyle(menu).width;

    if (currentWidth === "0px") {
        menu.style.width = "250px";
    } else {
        menu.style.width = "0px";
    }
}