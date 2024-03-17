// Importar el módulo readline para capturar la entrada del usuario desde la terminal
const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mensaje de bienvenida y explicación
console.log("¡Bienvenido al Convertidor de Moneda!");
console.log("Este programa convierte una cantidad en dólares a euros utilizando una tasa de cambio fija.");

// Definir la tasa de cambio fija
const tasaCambio = 0.85; // 1 dólar = 0.85 euros

// Capturar la cantidad en dólares que el usuario desea convertir
rl.question("Por favor, ingrese la cantidad en dólares: ", (cantidadDolares) => {
    // Convertir la cantidad ingresada a número
    cantidadDolares = parseFloat(cantidadDolares);

    // Realizar el cálculo de conversión
    const cantidadEuros = cantidadDolares * tasaCambio;

    // Mostrar el resultado de la conversión
    console.log(`${cantidadDolares} dólares equivalen a ${cantidadEuros} euros.`);

    // Cerrar la interfaz readline
    rl.close();
});
