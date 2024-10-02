const resultado = document.getElementById("resultado");
const inputNombre = document.getElementById("nombre");

const guardarNombre_btn = document.getElementById("guardarNombre");
guardarNombre_btn.addEventListener("click", () => {
  localStorage.setItem("nombre", inputNombre.value);
});
const mostrarNombre_btn = document.getElementById("mostrarNombre");
mostrarNombre_btn.addEventListener("click", () => {
  resultado.textContent = localStorage.getItem("nombre");
});
const borrarNombre_btn = document.getElementById("borrarNombre");
borrarNombre_btn.addEventListener("click", () => {
  localStorage.removeItem("nombre");
});

const inputEdad = document.getElementById("edad");
const guardarEdad_btn = document.getElementById("guardarEdad");
guardarEdad_btn.addEventListener("click", () => {
  sessionStorage.setItem("edad", inputEdad.value);
});
const mostrarEdad_btn = document.getElementById("mostrarEdad");
mostrarEdad_btn.addEventListener("click", () => {
  resultado.textContent = sessionStorage.getItem("edad");
});
const borrarEdad_btn = document.getElementById("borrarEdad");
borrarEdad_btn.addEventListener("click", () => {
  sessionStorage.removeItem("edad");
});
