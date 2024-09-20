console.log("Ejercicio 3");

function ejercicio3() {
  const section3 = document.getElementById("Ejercicio 3");
  const p = section3.getElementsByTagName("p");
  for (let i = 0; i < p.length; i++) {
    p[i].style = "color: red;";
  }
  const lista = section3.getElementsByTagName("li");
  lista[lista.length - 1].className = "clase3"
  console.log(lista[lista.length - 1].className)
}

ejercicio3();
