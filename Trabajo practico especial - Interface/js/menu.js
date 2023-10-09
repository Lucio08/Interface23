document.querySelector(".btn-menu").addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".nav").classList.toggle("show");
}
 
document.querySelector(".btn-usuario").addEventListener("click", toggleMenuUsuario);
function toggleMenuUsuario() {
    document.querySelector(".nav-usuario").classList.toggle("show");
}