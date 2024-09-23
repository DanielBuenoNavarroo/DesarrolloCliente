console.log("Ejercicio 1");

// Con getElementById:
console.log("Seleccion con getElementById: ");
let h1 = document.getElementById("h1-1");
let p = document.getElementById("p-1");
let ul = document.getElementById("ul-1");
console.log(`h1: ${h1.outerHTML}`);
console.log(`p: ${p.outerHTML}`);
console.log(`ul: ${ul.outerHTML}`);

// Con getElementsByClassName
console.log("Seleccion con getElementsByClassName");
const elementsByClassname = document.getElementsByClassName("ejercicio1");
for (let i = 0; i < elementsByClassname.length; i++) {
  console.log(
    `${elementsByClassname[i].tagName}: ${elementsByClassname[i].outerHTML}`
  );
}

// Con getElementsByTagName
console.log("Seleccion con getElementsByTagName");
const h1ByTagName = document.getElementsByTagName("h1");
for (let i = 0; i < h1ByTagName.length; i++) {
  console.log(`${h1ByTagName[i].tagName}: ${h1ByTagName[i].outerHTML}`);
}

const pByTagName = document.getElementsByTagName("p");
for (let i = 0; i < pByTagName.length; i++) {
  console.log(`${pByTagName[i].tagName}: ${pByTagName[i].outerHTML}`);
}

const ulByTagName = document.getElementsByTagName("ul");
for (let i = 0; i < ulByTagName.length; i++) {
  console.log(`${ulByTagName[i].tagName}: ${ulByTagName[i].outerHTML}`);
}
