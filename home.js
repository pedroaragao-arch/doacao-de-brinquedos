let btn = document.getElementById("btnMenu");
let menu = document.getElementById("menu");
let menuClose = document.getElementById("menuClose");

btn.addEventListener("click", ()=>{
    menu.classList.add("isOpen");
})

menuClose.addEventListener("click", ()=>{
    menu.classList.remove("isOpen");
})