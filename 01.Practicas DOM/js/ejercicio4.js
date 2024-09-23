console.log("Ejercicio 4");

let lista = [];

const btn = document.getElementById("boton");
const ul = document.getElementById("lista");

btn.addEventListener("click", function () {
  let input = document.getElementById("insert");
  let valor = input.value;
  if (valor === "") {
    alert("Ingrese un valor");
    return;
  }
  lista.push(valor);
  input.value = "";
  agregarItem();
});

const agregarItem = () => {
  let li = document.createElement("li");
  let removeBtn = document.createElement("button");
  li.textContent = lista[lista.length - 1];
  removeBtn.textContent = "Eliminar";
  removeBtn.onmouseenter = () => {
    removeBtn.style.backgroundColor = "red";
  };
  removeBtn.onmouseleave = () => {
    removeBtn.style.backgroundColor = "white";
  };
  removeBtn.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(removeBtn);
  ul.appendChild(li);
};
