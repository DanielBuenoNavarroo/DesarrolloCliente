import Coche from "./Coche.js";

const nameList = "listCoches";
const listCoches = JSON.parse(localStorage.getItem(nameList)) || [];

const select_modelo = document.getElementById("modelo");
const select_color = document.getElementById("color");
const select_fecha = document.getElementById("year");
const input_precio = document.getElementById("cost");
const button_enviar = document.getElementById("enviar");
const ul_coches = document.getElementById("mostrarCoches");

input_precio.addEventListener("keypress", (e) => {
  const regex = /[0-9]/;
  if (!regex.test(e.key)) {
    console.log(input_precio);
  }
});

button_enviar.addEventListener("click", () => {
  if (validate()) {
    const coche = new Coche(
      select_modelo.value,
      select_color.value,
      select_fecha.value,
      input_precio.value
    );

    addToLocalStorage(coche);
    addToList(coche, listCoches.length - 1);
  }
});

const validate = () => {
  select_modelo.classList.remove("mal");
  select_color.classList.remove("mal");
  select_fecha.classList.remove("mal");
  input_precio.classList.remove("mal");

  let continuar = true;
  if (select_modelo.value === "null") {
    select_modelo.classList.add("mal");
    continuar = false;
  }
  if (select_color.value === "null") {
    select_color.classList.add("mal");
    continuar = false;
  }
  if (select_fecha.value < 2000 || select_fecha.value > 2024) {
    select_fecha.classList.add("mal");
    continuar = false;
  }
  if (input_precio.value === 0) {
    input_precio.classList.add("mal");
    continuar = false;
  }
  console.log(continuar);
  return continuar;
};

const addToLocalStorage = (coche) => {
  localStorage.removeItem(nameList);
  listCoches.push(coche);
  localStorage.setItem(nameList, JSON.stringify(listCoches));
};

const addToList = (coche, index) => {
  const li = document.createElement("li");

  const button_eliminar = document.createElement("button");
  button_eliminar.textContent = "eliminar";
  button_eliminar.classList = "eliminar";
  button_eliminar.addEventListener("click", () => {
    localStorage.removeItem(nameList);
    listCoches.splice(index, 1);
    localStorage.setItem(nameList, JSON.stringify(listCoches));
    li.remove();
  });

  li.appendChild(coche.mostrarCoche());
  li.appendChild(button_eliminar);
  ul_coches.appendChild(li);
};

// Ejecutar al inicio:
if (listCoches.length) {
  console.log(listCoches);
  listCoches.forEach((coche, index) => {
    const newCoche = new Coche(
      coche.modelo,
      coche.color,
      coche.fecha,
      coche.precio
    );
    addToList(newCoche, index);
  });
}

for (let i = 0; i <= 24; i++) {
  let option = document.createElement("option");
  option.textContent = i < 10 ? `200${i}` : `20${i}`;
  select_fecha.appendChild(option);
}
