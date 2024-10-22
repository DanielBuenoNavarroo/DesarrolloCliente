import { buttonStyles, inputStyles } from "./styles.js";

export const data = [
  { name_ID: "ID", placeholder: "ID", className: inputStyles.default },
  { name_ID: "description", placeholder: "Description", className: inputStyles.default },
  { name_ID: "category", placeholder: "Category", className: inputStyles.default },
  { name_ID: "url", placeholder: "ImageURL", className: inputStyles.default },
  { name_ID: "price", placeholder: "Price", className: inputStyles.default },
  { name_ID: "stock", placeholder: "Stock", className: inputStyles.default },
  {
    type: "submit",
    name_ID: "submit",
    className: buttonStyles.grey,
  },
];

export const NAME_LIST = "articulos";
export const listProductos = JSON.parse(localStorage.getItem(NAME_LIST)) || [];
