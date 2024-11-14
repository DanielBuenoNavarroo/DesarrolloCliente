const url = "http://10.10.13.50/tienda/public/api/v1/api.php/productos";
export const getProducts = async () => {
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
        console.log("error al obtener los productos: ", error);
    }
};
export const getProductByID = async (id) => {
    if (typeof id === "string" && !isNaN(Number(id))) {
        id = parseInt(id, 10);
    }
    if (typeof id === "number") {
        try {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.error("Error al obtener el producto:", error);
            throw error;
        }
    }
    else {
        throw new Error("ID inválido. Debe ser un número o una cadena numérica.");
    }
};
