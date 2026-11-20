const ventas = require ("./datos")

function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}
console.log("Valor de la primera venta:", valorVenta(ventas[2]));
function totalVendido(ventas) {

    let total = 0;

    for (const venta of ventas) {

        total = total + valorVenta(venta);

    }

    return total;
}
console.log("Total vendido:", totalVendido(ventas));

function ventaMayor(ventas) {

    let mayor = null;

    for (const venta of ventas) {

        if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }

    }

    return mayor;
}
console.log("Venta mayor:", ventaMayor(ventas));

function ticketPromedio(ventas) {

    let total = 0;
    let contador = 0;

    for (const venta of ventas) {

        if (venta.cantidad > 0) {
            total = total + valorVenta(venta);
            contador = contador + 1;
        }

    }

    if (contador === 0) {
        return 0;
    }

    return total / contador;
}
console.log("Ticket promedio:", ticketPromedio(ventas));

function unidadesVendidas(ventas) {

    let total = 0;

    for (const venta of ventas) {
        total = total + venta.cantidad;
    }

    return total;
}
console.log("Unidades vendidas:", unidadesVendidas(ventas));

function ventasPorCiudad(ventas, ciudad) {

    let total = 0;

    for (const venta of ventas) {

        if (venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase()) {

            total = total + valorVenta(venta);

        }
    }

    return total;
}
console.log("Ventas Medellín:", ventasPorCiudad(ventas, "Medellín"));

console.log("Ventas Bogotá:", ventasPorCiudad(ventas, "Bogotá"));

console.log("Ventas Cali:", ventasPorCiudad(ventas, "Cali"));

console.log("Ventas Pereira:", ventasPorCiudad(ventas, "Pereira"));


module.exports = {
    valorVenta,
    unidadesVendidas,
    totalVendido,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
};