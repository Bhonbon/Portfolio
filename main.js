const openham = document.getElementById('openHam');
const closeham = document.getElementById('closeHam');
const menu = document.querySelector('.menu')
const robot = document.querySelector('.robot')

openham.addEventListener("click", () =>{
    menu.style.width = "90%";
    menu.style.marginLeft = "10px";
    menu.style.margin = "0";
    openham.style.display = "none";
    closeham.style.display = "block";
    robot.style.display = "none";
});
closeham.addEventListener('click', () =>{
    menu.style.width = "0";
    openham.style.display = "block";
    closeham.style.display = "none";
    robot.style.display = "flex";
});
window.onscroll = function () {
    stickNavbar();
}
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}