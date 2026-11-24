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

function totalVendidoM(ventas) {

    return ventas.reduce((acumulador, venta) => {
        return acumulador + valorVenta(venta);
    }, 0);

}

function unidadesVendidasM(ventas) {

    return ventas.reduce((acumulador, venta) => {
        return acumulador + venta.cantidad;
    }, 0);

}

function ventasPorCiudadM(ventas, ciudad) {

    const ventasFiltradas = ventas.filter((venta) => {
        return venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase();
    });

    const total = ventasFiltradas.reduce((acumulador, venta) => {
        return acumulador + valorVenta(venta);
    }, 0);

    return total;
}

function totalPorCiudad(ventas) {

    return ventas.reduce((totales, venta) => {

        const ciudad = venta.ciudad.trim().toLowerCase();

        if (totales[ciudad] === undefined) {
            totales[ciudad] = 0;
        }

        totales[ciudad] = totales[ciudad] + valorVenta(venta);

        return totales;

    }, {});
}

function unidadesPorProducto(ventas) {

    return ventas.reduce((totales, venta) => {

        const producto = venta.producto;

        if (totales[producto] === undefined) {
            totales[producto] = 0;
        }

        totales[producto] += venta.cantidad;

        return totales;

    }, {});
}

function topProductosPorValor(ventas, k) {

    const totales = ventas.reduce((acumulador, venta) => {

        const producto = venta.producto;

        if (acumulador[producto] === undefined) {
            acumulador[producto] = 0;
        }

        acumulador[producto] += valorVenta(venta);

        return acumulador;

    }, {});

    const ranking = Object.entries(totales);

    const ordenados = [...ranking].sort((a, b) => b[1] - a[1]);

    const primeros = ordenados.slice(0, k);

    return primeros.map((producto) => producto[0]);
}
console.log("Ventas Medellín:", ventasPorCiudad(ventas, "Medellín"));

console.log("Ventas Bogotá:", ventasPorCiudad(ventas, "Bogotá"));

console.log("Ventas Cali:", ventasPorCiudad(ventas, "Cali"));

console.log("Ventas Pereira:", ventasPorCiudad(ventas, "Pereira"));

function ventasDelDia(ventas, fecha) {

    return ventas.filter((venta) => {
        return venta.fecha === fecha;
    });

}


module.exports = {
    valorVenta,
    unidadesVendidas,
    totalVendido,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia
};



