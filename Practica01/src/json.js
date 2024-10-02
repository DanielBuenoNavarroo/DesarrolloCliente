const nombre = document.getElementById("nombre");
const correo = document.getElementById("email");
const resultado = document.getElementById("resultado");

const guardar = document.getElementById("guardar");
guardar.addEventListener("click", () => {
  console.log("hola");
  const json = {
    nombre: nombre.value,
    correo: correo.value,
  };
  localStorage.setItem("JSON", JSON.stringify(json));
});
const mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", () => {
  const json = JSON.parse(localStorage.getItem("JSON"));
  resultado.textContent = `Nombre: ${json.nombre}, Correo: ${json.correo}`;
});
const borrar = document.getElementById("borrar");
borrar.addEventListener("click", () => {
  localStorage.removeItem("JSON");
});
