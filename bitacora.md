# Bitácora - Café Origen

## MiniReto 1: Exploración de datos

### Diccionario de datos

| Propiedad | Tipo de dato | Descripción                              |
| id        | Number       | Identificador único de cada venta        |
| fecha     | String       | Fecha en que se realizó la venta         |
| cliente   | String       | Código del cliente que realizó la compra |
| producto  | String       | Nombre del producto vendido              |
| ciudad    | String       | Ciudad donde se realizó la venta         |
| cantidad  | Number       | Cantidad de unidades vendidas            |
| precio    | Number       | Precio de cada unidad del producto       |

### Casos borde detectados

**1. Ciudades escritas diferente:**  
Encontré que Medellín aparece con mayúscula y minúscula. Para evitar errores, voy a comparar las ciudades en minúsculas.

**2. Ventas con cantidad 0:**  
Hay una venta con cantidad 0, así que no la contaré como una venta válida al calcular el promedio.

**3. Clientes repetidos:**  
Algunos clientes aparecen varias veces, pero no es un error, porque pueden comprar en diferentes días. Por eso, conservaré todos los registros.