const min = 1;
const max = 100;
let numeroAleatorio = Math.floor(Math.random() * max) + min;
console.log(numeroAleatorio);

const historial = new Object();
let intentos = 0;

const input = document.getElementById("numero");
const adivinarBtn = document.getElementById("adivinar");
const respuesta = document.getElementById("respuesta");
const contador = document.getElementById("contador");
contador.textContent = "Numero de intentos: 0";
const reiniciarBtn = document.getElementById("reiniciar");

adivinarBtn.addEventListener("click", () => {
  let numeroIntroducido = input.value;
  let isGess = false;
  if (!numeroIntroducido || isNaN(numeroIntroducido)) {
    alert("Introduce un numero válido");
  } else if (numeroIntroducido < 0 || numeroIntroducido > 100) {
    alert(`El numero debe estar entre ${min} y ${max}`);
  } else {
    isGess = numeroValido(numeroIntroducido);
  }
  if (isGess) {
    input.classList = "disabled"
  }
  input.value = "";
});

const numeroValido = (numeroIntroducido) => {
  intentos++;
  let resultado = "";
  const intento = new Object();
  if (numeroIntroducido < numeroAleatorio) {
    resultado = "menor";
    respuesta.textContent = "El número es demasiado bajo 😜";
    respuesta.style = "color: blue";
  } else if (numeroIntroducido > numeroAleatorio) {
    resultado = "mayor";
    respuesta.textContent = "El número es demasiado alto 😜";
    respuesta.style = "color: blue";
  } else {
    console.log(historial);
    respuesta.textContent = "Correcto!! 🎉🎉🎉";
    respuesta.style = "color: green";
    return true;
  }

  intento["numeroIntroducido"] = numeroIntroducido;
  intento["mayor-menor"] = resultado;
  historial[`${intentos}`] = intento;
  contador.textContent = `Numero de intentos: ${intentos}`;
  return false;
};

reiniciarBtn.addEventListener("click", () => {
  intentos = 0;
  contador.textContent = `Numero de intentos: ${intentos}`;
});
