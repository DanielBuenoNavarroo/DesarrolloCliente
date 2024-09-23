console.log("Ejercicio 7");

// limitar fecha a dia actual:
const inputFecha = document.getElementById("fecha");
const time = new Date();

let tareas = [];

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
  let input = document.getElementById("insert");
  let valor = input.value;
  if (valor === "") {
    alert("Ingrese un valor");
  } else {
    lista.push(valor);
    input.value = "";
    agregarItem();
  }
});
