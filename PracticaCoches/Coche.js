export default class Coche {
  constructor(modelo, color, fecha, precio) {
    this.modelo = modelo;
    this.color = color;
    this.fecha = fecha;
    this.precio = precio;
  }

  mostrarCoche() {
    const div = document.createElement("div");

    const p_modelo = document.createElement("p");
    p_modelo.textContent = this.modelo;
    div.appendChild(p_modelo);
    const p_color = document.createElement("p");
    p_color.textContent = this.color;
    div.appendChild(p_color);
    const p_fecha = document.createElement("p");
    p_fecha.textContent = this.fecha;
    div.appendChild(p_fecha);
    const p_precio = document.createElement("p");
    p_precio.textContent = `${this.precio}€`;
    div.appendChild(p_precio);
 
    return div;
  }
}