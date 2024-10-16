import Producto from "./js/Producto.js";
import generarForm from "./js/newProductsForm.js";

// On Mount //
generarForm();

const NAME_LIST = "articulos";
const listProductos = JSON.parse(localStorage.getItem(NAME_LIST)) || [];

const div_lista = document.getElementById("lista");

const input_ID = document.getElementById("ID");
const input_description = document.getElementById("description");
const input_category = document.getElementById("category");
const input_url = document.getElementById("url");
const input_price = document.getElementById("price");
const input_stock = document.getElementById("stock");
const input_submit = document.getElementById("submit");

input_submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate()) {
    const producto = new Producto(
      input_ID.value,
      input_description.value,
      input_category.value,
      input_url.value,
      input_price.value,
      input_stock.value
    );

    // Add to local Storage
    listProductos.push(producto);
    if (listProductos.length > 1) listProductos.short((a, b) => a.ID - b.ID);
    localStorage.setItem(NAME_LIST, JSON.stringify(listProductos));

    displayProducts(producto);
  }
});

const validate = () => {
  let continuar = true;
  return continuar;
};

const displayProducts = (producto) =>
  div_lista.appendChild(producto.mostrarProducto());

// Ejecutar al inicio //
if (listProductos.length) {
  listProductos.forEach((producto) => {
    const newProduct = new Producto(
      producto.ID,
      producto.description,
      producto.category,
      producto.url,
      producto.price,
      producto.stock
    );
    displayProducts(newProduct);
  });
}
