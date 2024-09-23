console.log("Ejercicio 6");

const select = document.getElementById("select");
select.addEventListener("change", (event) => {
  changeView(event.target.value);
});

const view = document.getElementById("view");
function changeView(index) {
  const div = document.createElement("div");
  view.appendChild(div);
  switch (index) {
    case "1":
      {
        removeNodes();
        div.style = "width: 100%; height: 100%; background: black;";
      }
      break;
    case "2":
      {
        removeNodes();
        div.style = "width: 100%; height: 100%; background: red;";
      }
      break;
    case "3":
      {
        removeNodes();
        div.style = "width: 100%; height: 100%; background: blue;";
      }
      break;
    case "4":
      {
        removeNodes();
        div.style = "width: 100%; height: 100%; background: green;";
      }
      break;
  }
  view.appendChild(div);
}

const removeNodes = () => {
  if (view.hasChildNodes) {
    let childs = view.childNodes;
    childs.forEach((child) => {
      view.removeChild(child);
    });
  }
};

changeView(select.value);
