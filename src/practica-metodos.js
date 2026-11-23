const ventas = require("./datos");
const {
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor
} = require("./analitica");

const productos = ventas.map((venta) => {
    return venta.producto;
});

console.log(productos);

const ventasMedellin = ventas.filter((venta) => {
    return venta.ciudad.trim().toLowerCase() === "medellín";
});

console.log("Ventas de Medellín:");
console.table(ventasMedellin);

const totalVendido = ventas.reduce((acumulador, venta) => {
    return acumulador + venta.cantidad * venta.precio;
}, 0);

console.log("Total vendido:", totalVendido);

console.log("Total vendido con métodos:", totalVendidoM(ventas));

console.log("Unidades vendidas con métodos:", unidadesVendidasM(ventas));

console.log("Ventas Medellín:", ventasPorCiudadM(ventas, "Medellín"));

console.log("Ventas Bogotá:", ventasPorCiudadM(ventas, "Bogotá"));

console.log("Ventas Cali:", ventasPorCiudadM(ventas, "Cali"));

console.log("Ventas Pereira:", ventasPorCiudadM(ventas, "Pereira"));

console.log("Total por ciudad:");

console.log(totalPorCiudad(ventas))

console.log("=== TOTAL POR CIUDAD ===");
console.table(totalPorCiudad(ventas));

console.log("=== UNIDADES POR PRODUCTO ===");
console.table(unidadesPorProducto(ventas));

console.log("=== TOP 3 PRODUCTOS ===");
console.log(topProductosPorValor(ventas, 3));