const botonlen = document.getElementById("len-btn");
const botonsist = document.getElementById("sist-btn");
const len = document.getElementById("len");
const sist = document.getElementById("sist");


botonlen.addEventListener("click", () => {
  len.classList.remove("oculto"); 
  sist.classList.add("oculto"); 
  botonlen.classList.add("btn-active");
  botonsist.classList.remove("btn-active");
});

botonsist.addEventListener("click", () => {
    sist.classList.remove("oculto"); 
    len.classList.add("oculto"); 
    botonsist.classList.add("btn-active");
    botonlen.classList.remove("btn-active");
});

