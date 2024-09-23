console.log("Ejercicio 5");

const text = document.querySelector("[type='text']");
console.log(text);

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

const checkForm = () => {
  const required = document.querySelectorAll("[required]");
  required.forEach((element) => {
    if (element.value === "") {
      element.style.border = "1px solid red";
    } else {
      element.style.border = "1px solid green";
    }
  });
};
