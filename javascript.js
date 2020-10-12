const toggle=document.querySelector(".nav-button");
const menu=document.querySelector("#main-nav-list");


function toggleMenu(){
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class=fas fa-bars"
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars";
    }
}
toggle.addEventListener("click", toggleMenu, false);