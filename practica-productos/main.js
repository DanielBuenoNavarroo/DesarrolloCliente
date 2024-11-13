import { getProducts } from "./js/api";
let products = [];
const searchInput = document.getElementById("searchProduct");
const productList = document.getElementById("product-list");
const displayProduct = ({ nombre, descripcion, imagen, precio, categoria_id, }) => {
    return `<li>
            <h1>${nombre}</h1>
            <p>${descripcion}</p>
            <img src="${imagen}"></img>
            <p>$${precio}</p>
            <p>${categoria_id}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </li>`;
};
const displayAllProducts = async () => {
    productList.innerHTML = "";
    products = (await getProducts()) || [];
    products
        ? products.map((product) => (productList.innerHTML += displayProduct(product)))
        : (productList.innerHTML =
            "<li><h1>No hay productos para mostrar<h1/></li>");
};
// On mounted
displayAllProducts();
