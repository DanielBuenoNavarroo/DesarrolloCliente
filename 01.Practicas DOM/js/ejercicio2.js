console.log("Ejercicio 2");

function ejercicio2() {
  const p = document.getElementById("pEj2");
  const padre = p.parentElement.outerHTML;
  console.log(`Padre: ${padre}`);
  let hermanoPosterior = p.nextElementSibling;
  let hermanoAnterior = p.previousElementSibling;
  if (hermanoPosterior || hermanoAnterior) {
    console.log(
      hermanoPosterior
        ? `Hermano Posterior:  ${hermanoPosterior.outerHTML}`
        : `Hermano Anterior: ${hermanoAnterior.outerHTML}`
    );
  }
}

ejercicio2();
