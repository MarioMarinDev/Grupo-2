
const el_tarjetas = document.querySelectorAll("div.tarjeta");
const el_nombres = document.querySelectorAll("div.tarjeta h3");
const el_heroes = document.querySelectorAll("div.tarjeta img");
const btn_hulk = document.querySelector("#seccion-hulk button");

btn_hulk.addEventListener("click", hulk_todos);

function hulk_todos() {
  for(let i = 0; i < el_heroes.length; i++) {
    el_heroes[i].src = "imagenes/heroes/hulk.png";
    el_nombres[i].innerHTML = "HULK";
    el_tarjetas[i].classList.add("hulk");
  }
}

