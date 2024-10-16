const data = [
  { name_ID: "ID", placeholder: "ID" },
  { name_ID: "description", placeholder: "Description" },
  { name_ID: "category", placeholder: "Category" },
  { name_ID: "url", placeholder: "ImageURL" },
  { name_ID: "price", placeholder: "Price" },
  { name_ID: "stock", placeholder: "Stock" },
  {
    type: "submit",
    name_ID: "submit",
    className:
      "w-full text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4",
  },
];

const div_form = document.getElementById("form");

const generarForm = () => {
  const form = document.createElement("form");
  form.className =
    "w-full h-full flex flex-col items-start justify-center gap-4";
  form.action = "";

  // Título
  form.innerHTML +=
    '<h1 class="text-3xl font-semibold w-full text-center mb-8">Insertar Producto</h1>';

  // Insertar inputs
  data.forEach(({ name_ID, placeholder, type = "text", className }) => {
    const input = document.createElement("input");
    input.className =
      className ||
      "rounded-md px-4 py-3 w-full border border-gray-700 bg-gray-900 mb-4";
    input.type = type;
    input.name = name_ID;
    input.id = name_ID;
    if (type === "text") input.placeholder = placeholder;

    form.appendChild(input);
  });

  div_form.appendChild(form);
};

export default generarForm