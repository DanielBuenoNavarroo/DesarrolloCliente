const min = 1;
const max = 100;
let numeroAleatorio;

let historial = {};
let intentos = 0;

const input = document.getElementById("numero");
const adivinarBtn = document.getElementById("adivinar");
const respuesta = document.getElementById("respuesta");
const contador = document.getElementById("contador");
const reiniciarBtn = document.getElementById("reiniciar");

contador.textContent = `Número de intentos: ${intentos}`;

adivinarBtn.addEventListener("click", () => {
  const numeroIntroducido = parseInt(input.value, 10);

  if (isNaN(numeroIntroducido)) {
    alert("Introduce un número válido");
  } else if (numeroIntroducido < min || numeroIntroducido > max) {
    alert(`El número debe estar entre ${min} y ${max}`);
  } else {
    procesarIntento(numeroIntroducido);
  }

  input.value = "";
});

const procesarIntento = (numeroIntroducido) => {
  intentos++;
  let resultado = "";

  if (numeroIntroducido < numeroAleatorio) {
    resultado = "menor";
    respuesta.textContent = "El número es demasiado bajo 😜";
    respuesta.style.color = "blue";
  } else if (numeroIntroducido > numeroAleatorio) {
    resultado = "mayor";
    respuesta.textContent = "El número es demasiado alto 😜";
    respuesta.style.color = "blue";
  } else {
    resultado = "adivinado";
    respuesta.textContent = "¡Correcto! 🎉🎉🎉";
    respuesta.style.color = "green";
    adivinarBtn.disabled = true;
    input.disabled = true;
  }

  historial[intentos] = {
    numeroIntroducido,
    resultado,
  };

  contador.textContent = `Número de intentos: ${intentos}`;
};

reiniciarBtn.addEventListener("click", () => iniciarJuego());

const iniciarJuego = () => {
  historial = {};
  intentos = 0;
  numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  contador.textContent = `Número de intentos: ${intentos}`;
  respuesta.textContent = "";
  respuesta.style.color = "";

  adivinarBtn.disabled = false;
  input.disabled = false;
};

iniciarJuego();
console.log(numeroAleatorio);
