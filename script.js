let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

    
menu.onclick = function() {
    navbar.style.cssText = "display: block; top: 70px;"
}

navbar.onmouseleave = function() {
    navbar.style.cssText = "display: none;"
}