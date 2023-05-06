let pinGuardado = "1408"; //PIN correcto
let ingresoCorrecto = false;

// Mostrar mensaje de bienvenida
alert("Bienvenido a nuestro programa de conversión de millas a kilómetros");

// Pedir al usuario que ingrese su PIN
for (let intentos = 3; intentos > 0; intentos--) {
  let pinIngresado = prompt(`Por favor ingrese su PIN. Le quedan ${intentos} intentos:`);
  if (pinIngresado === pinGuardado) {
    // Si el PIN es correcto, mostrar mensaje de bienvenida y continuar con el programa
    alert("Ahora si! ingrese la cantidad de millas que desea convertir a Kilometros.");
    ingresoCorrecto = true;
    break;
  } else {
    // Si el PIN es incorrecto, mostrar mensaje de error
    alert("Hubo un error. Por favor inténtelo de nuevo.");
  }
}

// Función para convertir millas a kilómetros
function convertirMillasAKilometros(millas) {
  return millas * 1.609;
}

if (ingresoCorrecto) {
  // Si el PIN es correcto, mostrar opciones para conversión de millas a kilómetros
  let millasIngresadas = parseFloat(prompt("Ingrese la cantidad de millas que desea convertir:"));
  let kilometrosObtenidos = convertirMillasAKilometros(millasIngresadas).toFixed(2); // Convertir a 2 decimales
  alert(`${millasIngresadas} millas son equivalentes a ${kilometrosObtenidos} kilómetros.`);
}

// Mostrar mensaje de despedida
alert("Gracias por utilizar nuestro programa. Que tenga un buen día!");
