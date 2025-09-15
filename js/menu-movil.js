const boton = document.getElementById("menu-bot");
const menu = document.getElementById("bar");

boton.addEventListener("click", () => {
  menu.classList.toggle("menu-active"); 
});