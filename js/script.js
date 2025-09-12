const botonlen = document.getElementById("len-btn");
const botonsist = document.getElementById("sist-btn");
const botonsoft = document.getElementById("soft-btn");
const len = document.getElementById("len");
const sist = document.getElementById("sist");
const soft = document.getElementById("soft");


botonlen.addEventListener("click", () => {
  len.classList.remove("oculto"); 
  sist.classList.add("oculto"); 
  soft.classList.add("oculto"); 
  botonlen.classList.add("btn-active");
  botonsist.classList.remove("btn-active");
  botonsoft.classList.remove("btn-active");
});

botonsist.addEventListener("click", () => {
    sist.classList.remove("oculto"); 
    len.classList.add("oculto"); 
    soft.classList.add("oculto"); 
    botonsist.classList.add("btn-active");
    botonlen.classList.remove("btn-active");
    botonsoft.classList.remove("btn-active");
});

botonsoft.addEventListener("click", () => {
    soft.classList.remove("oculto"); 
    len.classList.add("oculto"); 
    sist.classList.add("oculto"); 
    botonsoft.classList.add("btn-active");
    botonsist.classList.remove("btn-active");
    botonlen.classList.remove("btn-active");
});

