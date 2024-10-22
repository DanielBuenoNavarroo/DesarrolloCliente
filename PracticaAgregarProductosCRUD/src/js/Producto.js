import { listProductos, NAME_LIST } from "../lib/data.js";
export default class Producto {
  constructor(ID, description, category, url, price, stock) {
    this.ID = ID;
    this.description = description;
    this.category = category;
    this.url = url;
    this.price = price;
    this.stock = stock;
  }

  mostrarProducto(handleEdit) {
    const div = document.createElement("div");
    div.className = "w-64 h-[350px] border rounded-lg shadow-lg bg-gray-800";

    div.innerHTML = `
    <div class="w-full h-56 rounded-t-md bg-contain bg-no-repeat bg-center" style="background-image: url('${this.url}')"></div>
    <div class="p-4 text-white flex flex-wrap gap-2 items-center justify-between">
      <h2 class="text-xl font-semibold text-center">${this.ID}</h2>
      <h3 class="text-sm">${this.category}</h3>
      <p class="w-full truncate">${this.description}</p>
      <p class="font-bold mt-2">€${this.price}</p>
      <p class="text-gray-400 mt-2">Stock: <span class="font-medium">${this.stock}</span></p>
    </div>
    `;

    const div_buttons = document.createElement("div");
    div_buttons.className = "w-full flex justify-between px-4 py-2";

    const btn_edit = document.createElement("button");
    btn_edit.className =
      "w-24 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-1 transition duration-200";
    btn_edit.textContent = "Editar";
    btn_edit.addEventListener("click", () => handleEdit(this));

    const btn_delete = document.createElement("button");
    btn_delete.className =
      "w-24 bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-1 transition duration-200";
    btn_delete.textContent = "Eliminar";
    btn_delete.addEventListener("click", () => handleDelete(this.ID, div));

    div_buttons.appendChild(btn_edit);
    div_buttons.appendChild(btn_delete);

    div.appendChild(div_buttons);

    return div;
  }
}

const handleDelete = (id, div) => {
  div.remove();
  const index = listProductos.findIndex((e) => e.ID === id);
  listProductos.splice(index, 1);
  localStorage.setItem(NAME_LIST, JSON.stringify(listProductos));
};
