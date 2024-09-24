console.log("Ejercicio 7");

let tareas = [];
const toDo = document.getElementById("toDo");
const completed = document.getElementById("completed");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  let input = document.getElementById("insert");
  let valor = input.value;
  if (!valor.trim()) {
    alert("Ingrese un valor");
    input.value = "";
  } else {
    tareas.push(valor);
    input.value = "";
    agregarItem();
  }
});

const agregarItem = () => {
  let li = document.createElement("li");
  let div = document.createElement("div");
  li.textContent = tareas[tareas.length - 1];
  div.appendChild(createRemoveButton(li));
  div.appendChild(createCompleteButton(li));
  li.appendChild(div);
  toDo.appendChild(li);
};

const createRemoveButton = (li) => {
  let removeBtn = document.createElement("button");
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
  return removeBtn;
};

const createCompleteButton = (li) => {
  let completeButon = document.createElement("button");
  completeButon.textContent = "Completada";
  completeButon.onmouseenter = () => {
    completeButon.style.backgroundColor = "green";
  };
  completeButon.onmouseleave = () => {
    completeButon.style.backgroundColor = "white";
  };
  completeButon.addEventListener("click", () => {
    const newLi = document.createElement("li");
    newLi.textContent = li.childNodes[0].data;
    completed.appendChild(newLi);
    li.remove();
  });
  return completeButon;
};
