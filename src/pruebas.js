const ventas = require("./datos");
const {
    valorVenta,
    unidadesVendidas,
    totalVendido,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
} = require("./analitica");

console.log("=== PRUEBAS CAFÉ ORIGEN ===");

// Arreglo completo
console.log("Total vendido:", totalVendido(ventas));
console.log("Unidades vendidas:", unidadesVendidas(ventas));
console.log("Venta mayor:", ventaMayor(ventas));
console.log("Ticket promedio:", ticketPromedio(ventas));
console.log("Ventas Medellín:", ventasPorCiudad(ventas, "Medellín"));

// Un solo elemento
console.log("\n=== UNA VENTA ===");

console.log("Total:", totalVendido([ventas[0]]));
console.log("Unidades:", unidadesVendidas([ventas[0]]));
console.log("Mayor:", ventaMayor([ventas[0]]));
console.log("Promedio:", ticketPromedio([ventas[0]]));
console.log("Ciudad:", ventasPorCiudad([ventas[0]], "Medellín"));

// Arreglo vacío
console.log("\n=== ARREGLO VACÍO ===");

console.log("Total:", totalVendido([]));
console.log("Unidades:", unidadesVendidas([]));
console.log("Mayor:", ventaMayor([]));
console.log("Promedio:", ticketPromedio([]));
console.log("Ciudad:", ventasPorCiudad([], "Medellín"));