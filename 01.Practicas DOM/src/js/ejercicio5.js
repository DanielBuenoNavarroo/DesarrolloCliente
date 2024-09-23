console.log("Ejercicio 5");

const text = document.querySelector("[type='text']");
console.log(text);
const btn = document.getElementById("button");
const listOfRequired = document.querySelectorAll("[required]");
listOfRequired.forEach((element) => {
  element.addEventListener("change", () => {
    btn.ariaDisabled = false;
  });
});
