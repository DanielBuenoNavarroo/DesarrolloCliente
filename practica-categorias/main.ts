const url = "http://10.10.13.50/tienda/public/api/v1/api.php/categorias";

type Category = {
  id: string;
  nombre: string;
  descripcion: string;
};

const select = <HTMLSelectElement>document.getElementById("select-categories");
const nameCategory = <HTMLInputElement>document.getElementById("nameCategory");
const descCategory = <HTMLInputElement>document.getElementById("descCategory");

let categories: Category[] = [];

const displayCategories = async () => {
  categories = (await getCategories()) || [];
  select.innerHTML = "";

  if (categories) {
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.id = category.id;
      option.value = category.id;
      option.text = category.nombre;

      select?.appendChild(option);
    });
  } else {
    console.log("no hay categorias");
  }
};

const changeFormType = (isEdit = false) => {
  const title = document.getElementById("tipo");
  const button = document.getElementById("enviar");
  const button_editar = document.getElementById("editar");
  const button_add = document.getElementById("add");

  if (isEdit) {
    const id = select.value;
    title && (title.textContent = "Editar categoria");
    button && (button.onclick = updateCategory);
    const index = categories.findIndex(
      (category) => category.id.toString() === id
    );
    if (index !== -1) {
      nameCategory.value = categories[index].nombre;
      descCategory.value = categories[index].descripcion;
    }
    button_add?.classList.remove("disabled");
    button_editar?.classList.add("disabled");
  } else {
    title && (title.textContent = "Añadir categoría");
    button && (button.onclick = postCategory);
    nameCategory.value = "";
    descCategory.value = "";
    button_add?.classList.add("disabled");
    button_editar?.classList.remove("disabled");
  }
};

const getCategories = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data: Category[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error al obtener las categorías:", error);
  }
};

const postCategory = async () => {
  const name = nameCategory.value.trim();
  const desc = descCategory.value.trim();

  if (name) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        descripcion: desc,
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const newCategory = await response.json();
      categories.push(newCategory);
    } catch (error) {
      console.log("Error al crear la categoría:", error);
    }
  }
};

const updateCategory = async () => {
  const id = select?.value;
  const name = (
    document.getElementById("createName") as HTMLInputElement
  ).value.trim();
  const desc = (
    document.getElementById("createDesc") as HTMLInputElement
  ).value.trim();

  if (id && name) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        descripcion: desc || "",
      }),
    };

    try {
      const response = await fetch(`${url}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log("Error al actualizar la categoría:", error);
    }
  }
};

const deleteCategory = async () => {
  const id = select?.value;
  if (id) {
    const options = {
      method: "DELETE",
    };

    try {
      const response = await fetch(`${url}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      console.log("Categoría eliminada con éxito");
      displayCategories();
    } catch (error) {
      console.log("Error al eliminar la categoría:", error);
    }
  } else {
    console.log("no hay categoria seleccionada");
  }
};

displayCategories();
changeFormType();
