// JS BASIC 21
// HTML TO HTML CSS TO CSS JS->logic

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}


function init(){
    title.addEventListener("click", handleClick);
}
init();