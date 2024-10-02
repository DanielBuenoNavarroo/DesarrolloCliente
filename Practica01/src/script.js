const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo Titulo";

const add = document.getElementById("agregarElemento");
const del = document.getElementById("eliminarElemento");
const lista = document.getElementById("lista");
add.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Nuevo elemento";
  lista.appendChild(li);
});

del.addEventListener("click", () => lista.removeChild(lista.lastChild));
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].className = "resaltado";
}