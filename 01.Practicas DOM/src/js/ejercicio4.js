console.log("Ejercicio 4");

let lista = [];

const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const ul = document.getElementById("lista");

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

removeBtn.addEventListener("click", () => {
  let liList = document.getElementsByTagName("li");
  if (liList.length) {
    ul.removeChild(liList[liList.length - 1]);
  } else {
    alert("No hay más etiquetas para elminar");
  }
});

const agregarItem = () => {
  let li = document.createElement("li");
  li.textContent = lista[lista.length - 1];
  ul.appendChild(li);
};
