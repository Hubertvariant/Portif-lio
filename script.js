function pefil() {
    let menuPerfil = window.document.querySelector("div#menu")
    const chat = window.document.querySelector("div.chat")
    const currentWidth = window.getComputedStyle(menu).width

    if ( currentWidth === "0px" ){
        menuPerfil.style.width = "250px"
        chat.style.left = "290px"
        chat.style.width = "calc(100% - 290px)"
    }else{
        menuPerfil.style.width = "0px"
        chat.style.left = "40px"
        chat.style.width = "calc(100% - 40px)"
    }
}

function projeto() {
    const chat = document.querySelector("div.chat");
    const chatProject = document.querySelector("div.chat-project");
    const isChatVisible = window.getComputedStyle(chat).visibility === "visible";
    if (isChatVisible) {
        chat.style.visibility = "hidden";
        chatProject.style.visibility = "visible";
    } else {
        chat.style.visibility = "visible";
        chatProject.style.visibility = "hidden";
    }
}

function chat() {
    const chat = document.querySelector("div.chat");
    const chatProject = document.querySelector("div.chat-project");
    chat.style.visibility = "visible";
    chat.style.opacity = "1";
    chatProject.style.visibility = "hidden";
    chatProject.style.opacity = "0";
}