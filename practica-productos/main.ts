import { getProducts, getProductByID, Product } from "./api/index";

let products: Product[] = [];

const searchIDInput = <HTMLInputElement>document.getElementById("searchIDProduct");
const productList = <HTMLUListElement>document.getElementById("product-list");

const displayProduct = ({
  id,
  nombre,
  descripcion,
  imagen,
  precio,
  categoria_id,
}: Product) => {
  return `<li id="${id}">
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
    ? products.map(
        (product) => (productList.innerHTML += displayProduct(product))
      )
    : (productList.innerHTML =
        "<div style=''><h1>No hay productos para mostrar<h1/></div>");
};

// On mounted
displayAllProducts();
