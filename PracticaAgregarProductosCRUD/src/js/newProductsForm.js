import { data } from "../lib/data.js";

const div_form = document.getElementById("form");

const generarNewProductForm = () => {
  div_form.childNodes.forEach((element) => div_form.removeChild(element));

  const form = document.createElement("form");
  form.className =
    "w-full h-full flex flex-col items-start justify-center gap-4";
  form.action = "";

  // Título
  form.innerHTML += `<h1 class="text-3xl font-semibold w-full text-center mb-8">Insertar Producto</h1>
    <p id="errorMsg" class="w-full hidden bg-red-500 px-4 py-3 rounded-md mb-4 font-bold text-center"></p>
    `;

  // Insertar inputs
  data.forEach(({ name_ID, placeholder, type = "text", className }) => {
    const input = document.createElement("input");
    input.className = className;
    input.type = type;
    input.name = name_ID;
    input.id = name_ID;
    if (type === "text") input.placeholder = placeholder;

    form.appendChild(input);
  });

  div_form.appendChild(form);
};

export default generarNewProductForm;
