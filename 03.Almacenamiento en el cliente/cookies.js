// Función para crear una cookie:
function crearCookie(nombre, valor, dias) {
  let fecha = new Date();
  // Si se especifican días, calcular la fecha de expiración
  if (dias) {
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    // Convertir días a milisegundos
    let expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
  } else {
    // Si no se especifica el tiempo de expiración, la cookie será de sesión
    document.cookie = nombre + "=" + valor + ";path=/";
  }
}

// Función para obtener una cookie
function obtenerCookie(nombre) {
  let nombreEQ = nombre + "=";
  let cookiesArray = document.cookie.split(";"); // Dividir todas las cookies
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    // Si la cookie empieza con el nombre buscado, devolver su
    valor;
    if (cookie.indexOf(nombreEQ) === 0) {
      return cookie.substring(nombreEQ.length, cookie.length);
    }
  }
  return null; // Si no se encuentra, devolver null
}
// Función Para eliminar cookies
function eliminarCookie(nombre) {
  // Establecer la cookie con el mismo nombre y una fecha de expiración pasada
  document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
