import Producto from "./js/Producto.js";
import generarNewProductForm from "./js/newProductsForm.js";
import { listProductos, NAME_LIST } from "./lib/data.js";
import { buttonStyles } from "./lib/styles.js";

generarNewProductForm();

const div_lista = document.getElementById("lista");
const p_error = document.getElementById("errorMsg");
const input_ID = document.getElementById("ID");
const input_description = document.getElementById("description");
const input_category = document.getElementById("category");
const input_url = document.getElementById("url");
const input_price = document.getElementById("price");
const input_stock = document.getElementById("stock");
const input_submit = document.getElementById("submit");

let isEditing = false;
let editProduct = null;

const changeEditMode = (product = null) => {
  const form = document.getElementById("form").firstChild;
  if (product) {
    form.firstChild.textContent = "Editar Producto";
    input_ID.value = product.ID;
    input_description.value = product.description;
    input_category.value = product.category;
    input_url.value = product.url;
    input_price.value = product.price;
    input_stock.value = product.stock;
    if (!isEditing) {
      const buttonChangeEdit = document.createElement("button");
      buttonChangeEdit.textContent = "New Product";
      (buttonChangeEdit.className = buttonStyles.green),
        buttonChangeEdit.addEventListener("click", () => {
          buttonChangeEdit.remove();
          changeEditMode();
        });
      form.appendChild(buttonChangeEdit);
    }
    editProduct = product;
    isEditing = true;
  } else {
    generarNewProductForm();
    isEditing = false;
    editProduct = null;
  }
};

input_submit.addEventListener("click", (e) => {
  e.preventDefault();
  const product = new Producto(
    input_ID.value,
    input_description.value,
    input_category.value,
    input_url.value,
    input_price.value,
    input_stock.value
  );

  const isValid = validate(product);

  if (isValid && !isEditing) {
    listProductos.push(product);
    displayProducts(product);
    generarNewProductForm();
  } else if (isValid && isEditing) {
    const div_data = document.getElementById("lista");
    const nodeList = div_data.childNodes;
    const index = listProductos.findIndex((e) => e.ID === producto.ID);
    nodeList[index].replaceWith(producto.mostrarProducto());
    listProductos[index] = product;
    generarNewProductForm();
  }
  localStorage.setItem(NAME_LIST, JSON.stringify(listProductos));
});

const validate = (product) => {
  let continuar = true;
  p_error.classList.add("hidden");
  p_error.textContent = "";

  if (
    !input_ID.value ||
    !input_description.value ||
    !input_category.value ||
    !input_url.value ||
    !input_price.value
  ) {
    p_error.textContent = "Faltan campos por rellenar";
    p_error.classList.remove("hidden");
    continuar = false;
  }

  if (!isEditing || (isEditing && product.ID !== editProduct.ID)) {
    if (listProductos.some((e) => e.ID === product.ID)) {
      p_error.textContent = "El ID ya existe";
      p_error.classList.remove("hidden");
      continuar = false;
    }
  }

  return continuar;
};

const displayProducts = (product) => {
  div_lista.appendChild(product.mostrarProducto(changeEditMode));
};

// Ejecutar al inicio //
if (listProductos.length) {
  listProductos.forEach((product) => {
    displayProducts(
      new Producto(
        product.ID,
        product.description,
        product.category,
        product.url,
        product.price,
        product.stock
      )
    );
  });
}
