// Importamos las ventas
const ventas = require("./datos");

// Mostramos la cantidad de ventas
console.log("Cantidad de ventas:", ventas.length);

// Mostramos la primera venta
console.log("Primera venta:", ventas[0]);

// Mostramos la última venta
console.log("Última venta:", ventas[ventas.length - 1]);

// Producto de la posición 4
console.log("Producto posición 4:", ventas[4].producto);

// Mostramos todas las ventas en una tabla
console.table(ventas);