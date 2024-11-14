import { getProducts } from "./api/index";
let products = [];
const searchInput = document.getElementById("searchProduct");
const productList = document.getElementById("product-list");
const displayProduct = ({ nombre, descripcion, imagen, precio, categoria_id, }) => {
    return `<li>
            <div class="image" style="background-image: url('${imagen}');"></div>
            <div class="content">
              <h1>${nombre}</h1>
              <p>${descripcion}</p>
              <p>$${precio}</p>
              <p>${categoria_id}</p>
            </div>
            <div>
              <button class="editar">Editar</button>
              <button class="eliminar">Eliminar</button>
            </div>
        </li>`;
};
const displayAllProducts = async () => {
    productList.innerHTML = "";
    products = (await getProducts()) || [];
    products
        ? products.map((product) => (productList.innerHTML += displayProduct(product)))
        : (productList.innerHTML =
            "<div style=''><h1>No hay productos para mostrar<h1/></div>");
};
// On mounted
displayAllProducts();
