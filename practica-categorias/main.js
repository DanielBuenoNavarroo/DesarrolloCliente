"use strict";
const url = "http://10.10.13.50/tienda/public/api/v1/api.php/categorias";
const select = document.getElementById("select-categories");
const nameCategory = document.getElementById("nameCategory");
const descCategory = document.getElementById("descCategory");
let categories = [];
const displayCategories = async () => {
    changeFormType();
    categories = (await getCategories()) || [];
    select.innerHTML = "";
    select.innerHTML += `<option value="" selected>Escoge una categoria</option>`;
    if (categories) {
        categories.forEach((category) => {
            const option = document.createElement("option");
            option.id = category.id;
            option.value = category.id;
            option.text = category.nombre;
            select?.appendChild(option);
        });
    }
    else {
        console.log("no hay categorias");
    }
};
const changeFormType = (isEdit = false) => {
    const title = document.getElementById("tipo");
    const button_editar = document.getElementById("editar");
    const button_add = document.getElementById("add");
    if (isEdit) {
        const id = select.value;
        title && (title.textContent = "Editar categoria");
        const index = categories.findIndex((category) => category.id.toString() === id);
        if (index !== -1) {
            nameCategory.value = categories[index].nombre;
            descCategory.value = categories[index].descripcion;
        }
        button_add?.classList.remove("disabled");
        button_editar?.classList.add("disabled");
    }
    else {
        title && (title.textContent = "Añadir categoría");
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
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("Error al obtener las categorías:", error);
    }
};
const handleCategory = async () => {
    const id = select?.value;
    const name = nameCategory.value.trim();
    const desc = descCategory.value.trim();
    const options = {
        method: id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: name,
            descripcion: desc || "",
        }),
    };
    try {
        const response = await fetch(id ? `${url}/${id}` : url, options);
        if (!response.ok)
            throw new Error(`Error al ${id ? "actualizar" : "crear"} la categoría`);
        displayCategories();
    }
    catch (error) {
        console.log("Error al eliminar la categoría:", error);
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
        }
        catch (error) {
            console.log("Error al eliminar la categoría:", error);
        }
    }
    else {
        console.log("no hay categoria seleccionada");
    }
};
// On mounted
displayCategories();
changeFormType();
select.addEventListener("change", (event) => {
    select.value ? changeFormType(true) : changeFormType();
});
