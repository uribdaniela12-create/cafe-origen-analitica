const ventas = require("./datos");

const {
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia
} = require("./analitica");

console.log("\n================================");
console.log("     REPORTE CAFÉ ORIGEN V0.1");
console.log("================================");

console.log("\n=== RESUMEN GENERAL ===");

console.log(
    "Total vendido: $",
    totalVendido(ventas).toLocaleString("es-CO")
);

console.log(
    "Unidades vendidas:",
    unidadesVendidas(ventas)
);

console.log(
    "Ticket promedio: $",
    ticketPromedio(ventas).toLocaleString("es-CO")
);

console.log(
    "Venta mayor:",
    ventaMayor(ventas)
);

console.log("\n=== VENTAS POR CIUDAD ===");

const ciudades = totalPorCiudad(ventas);

console.table(ciudades);

console.log("\n=== UNIDADES POR PRODUCTO ===");

const productos = unidadesPorProducto(ventas);

console.table(productos);

console.log("\n=== TOP 3 PRODUCTOS ===");

const top3 = topProductosPorValor(ventas, 3);

console.table(top3);

console.log("\n=== REPORTE POR FECHA ===");

// Día con ventas
const diaConVentas = ventasDelDia(ventas, "2026-09-01");

console.log("\nFecha: 2026-09-01");

console.log(
    "Total vendido: $",
    totalVendido(diaConVentas).toLocaleString("es-CO")
);

console.log(
    "Ticket promedio: $",
    ticketPromedio(diaConVentas).toLocaleString("es-CO")
);

// Día sin ventas
const diaSinVentas = ventasDelDia(ventas, "2026-09-10");

console.log("\nFecha: 2026-09-10");

console.log(
    "Total vendido: $",
    totalVendido(diaSinVentas).toLocaleString("es-CO")
);

console.log(
    "Ticket promedio: $",
    ticketPromedio(diaSinVentas).toLocaleString("es-CO")
);