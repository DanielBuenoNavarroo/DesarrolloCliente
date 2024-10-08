import Coche from "./Coche.js";

const nameList = "listCoches";
const listCoches = JSON.parse(localStorage.getItem(nameList)) || [];

const select_modelo = document.getElementById("modelo");
const select_color = document.getElementById("color");
const input_fecha = document.getElementById("year");
const input_precio = document.getElementById("cost");
const button_enviar = document.getElementById("enviar");
const ul_coches = document.getElementById("mostrarCoches");

button_enviar.addEventListener("click", () => handleClick());

const handleClick = () => {
  if (!validate()) {
    addToLocalStorage();
    addToList();
  }
};

const validate = () => {
  let continuar = true;
  if (select_modelo.value === "null") {
    select_modelo.classList = "mal";
    continuar = false;
  }
  if (select_color.value === "null") {
    select_color.classList = "mal";
    continuar = false;
  }
  if (input_fecha.value === 0) {
    input_fecha.classList = "mal";
    continuar = false;
  }
  if (input_precio.value === 0) {
    input_precio.classList = "mal";
    continuar = false;
  }
  return continuar;
};

const addToLocalStorage = () => {
  localStorage.removeItem(nameList);
  const coche = new Coche(
    select_modelo.value,
    select_color.value,
    input_fecha.value,
    input_precio.value
  );
  listCoches = listCoches.length ? listCoches.push(coche) : coche;
  localStorage.setItem(nameList, JSON.stringify(listCoches));
};

const addToList = () => {
  const li = document.createElement("li");

  const button_eliminar = document.createElement("button");
  button_eliminar.textContent = "eliminar";
  button_eliminar.classList = "eliminar";
  button_eliminar.addEventListener("click", () => {});

  const coche = new Coche(
    select_modelo.value,
    select_color.value,
    input_fecha.value,
    input_precio.value
  );

  li.appendChild(coche.mostrarCoche());
  li.appendChild(button_eliminar);
};
