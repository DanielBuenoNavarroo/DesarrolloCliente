console.log("Ejercicio 3");

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style = "color: red;";
}
const lista = document.getElementsByTagName("li");
lista[lista.length - 1].className = "clase3";
console.log(lista[lista.length - 1].className);
