const ventas = require("./datos");

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM
} = require("./analitica");

if (totalVendido(ventas) === totalVendidoM(ventas)) {
    console.log("Total vendido: OK");
} else {
    console.log("Total vendido: DIFERENTE");
}

if (unidadesVendidas(ventas) === unidadesVendidasM(ventas)) {
    console.log("Unidades vendidas: OK");
} else {
    console.log("Unidades vendidas: DIFERENTE");
}

if (ventasPorCiudad(ventas, "Medellín") === ventasPorCiudadM(ventas, "Medellín")) {
    console.log("Ventas Medellín: OK");
} else {
    console.log("Ventas Medellín: DIFERENTE");
}