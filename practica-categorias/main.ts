const url = "http://10.10.13.50/tienda/public/api/v1/api.php/categorias";

type Category = {
  id: string;
  nombre: string;
  descripcion: string;
};

const displayCategories = async () => {
  const list = document.getElementById("list-categories");
  const categories = await getCategories();

  if (list && categories) {
    categories.forEach((category) => {
      list.innerHTML += `<li class="card" id="${category.id}">
            <p>Nombre: ${category.nombre}</p>
            <p>Desc: ${category.descripcion}</p>
        </li>`;
    });
  }
};

const getCategories = async (): Promise<Category[] | void> => {
  const id = (
    document.getElementById("getCategory") as HTMLInputElement
  ).value.trim();
  try {
    const response = await fetch(id ? `${url}/${id}` : url);
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
  const name = (
    document.getElementById("createName") as HTMLInputElement
  ).value.trim();
  const desc = (
    document.getElementById("createDesc") as HTMLInputElement
  ).value.trim();

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
      return await response.json();
    } catch (error) {
      console.log("Error al crear la categoría:", error);
    }
  }
};

const updateCategory = async () => {
  const id = (
    document.getElementById("getCategory") as HTMLInputElement
  ).value.trim();
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
        descripcion: desc,
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
  const id = (
    document.getElementById("getCategory") as HTMLInputElement
  ).value.trim();

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
    } catch (error) {
      console.log("Error al eliminar la categoría:", error);
    }
  }
};

displayCategories();
