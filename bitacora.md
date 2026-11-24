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

### Pseudocódigo - Total vendido

1. Recibir el arreglo de ventas.
2. Crear una variable total que comience en 0.
3. Recorrer todas las ventas.
4. Multiplicar la cantidad por el precio de cada venta.
5. Sumar el resultado al total.
6. Devolver el dinero total vendido.

Resultado esperado: $985.000.

### Pseudocódigo - Venta mayor

1. Recibir el arreglo de ventas.
2. Crear una variable para guardar la venta mayor, inicialmente sin valor (`null`).
3. Recorrer cada venta.
4. Calcular su valor multiplicando la cantidad por el precio.
5. Comparar el resultado con la venta mayor guardada.
6. Si la venta actual es mayor, reemplazar la anterior.
7. Al terminar, devolver la venta con el valor más alto.

**Caso borde:** Si no hay ventas, devolver `null`.

### Pseudocódigo - Ticket promedio

1. Recibir el arreglo de ventas.
2. Crear dos variables en cero: una para el dinero total y otra para contar las ventas válidas.
3. Recorrer todas las ventas.
4. Si la cantidad es mayor que cero, sumar su valor al total y aumentar el contador.
5. Si no hay ventas válidas, devolver cero.
6. Dividir el dinero total entre las ventas válidas.
7. Devolver el promedio.

**Resultado esperado:** $89.545,45 aproximadamente.

**Caso borde:** Si no hay ventas válidas, el resultado será 0 para evitar una división entre cero.

### Pseudocódigo - Ventas por ciudad

1. Recibir el arreglo de ventas y el nombre de la ciudad.
2. Crear una variable total que empiece en cero.
3. Recorrer todas las ventas.
4. Comparar las ciudades ignorando mayúsculas y espacios.
5. Si la ciudad coincide, sumar el valor de esa venta.
6. Devolver el total vendido en la ciudad.

**Caso borde:** Si la ciudad no tiene ventas, devolver cero.

**Prueba manual:**

| Venta | Ciudad   | Valor   | Total acumulado |
|---    |---       |---:     |---:             |
| 1     | Medellín | $84.000 | $84.000         |
| 4     | Medellín | $42.000 | $126.000        |
| 5     | medellín | $135.000| $261.000        |
| 11    | Medellín | $95.000 | $356.000        |

**Resultado:** Medellín tiene un total vendido de $356.000.

### Pruebas y casos borde

Probé las funciones con las 12 ventas, con una sola venta y con un arreglo vacío.

Cuando el arreglo está vacío, las funciones que calculan totales devuelven 0, porque no hay ventas para sumar.

La función que busca la venta mayor devuelve `null`, ya que no existe ningún registro para comparar.

Para el ticket promedio, decidí devolver 0 cuando no hay ventas válidas, evitando una división entre cero.

También comprobé que las ciudades se comparan sin importar las mayúsculas o los espacios sobrantes.

### Resultados principales

- Total vendido: $985.000.
- Unidades vendidas: 21.
- Venta mayor: ID 10, por $168.000.
- Ticket promedio: $89.545,45.
- Ventas en Medellín: $356.000.

## MiniReto 3: Del ciclo al método

### Total vendido con métodos

Recorro todas las ventas utilizando `reduce()`. Calculo el valor de cada venta y lo voy sumando para obtener el dinero total vendido.

**Resultado esperado:** $985.000.

### Unidades vendidas con métodos

Recorro las ventas utilizando `reduce()` y sumo la cantidad de productos vendidos.

**Resultado esperado:** 21 unidades.

### Decisiones

En estas funciones no necesito filtrar ni agrupar los datos, porque quiero sumar la información de todas las ventas.

Utilizo `valorVenta()` para calcular el dinero generado por cada venta y así evitar repetir la multiplicación.

### Verificación de funciones

Comparé las funciones que hice con ciclos `for...of` con las nuevas funciones que utilizan métodos de arreglos.

Utilicé los mismos datos para comprobar que los resultados fueran iguales.

**Resultados esperados:**

- Total vendido: OK.
- Unidades vendidas: OK.
- Ventas por ciudad: OK.

De esta manera puedo comprobar que las nuevas funciones realizan los mismos cálculos que las anteriores.

### Agrupaciones y rankings

**Total por ciudad:** Utilicé `reduce()` para agrupar las ventas por ciudad y sumar el dinero de cada una. También normalicé los nombres para evitar ciudades duplicadas.

**Unidades por producto:** Recorrí las ventas y agrupé los productos para sumar sus cantidades. No necesité filtrar ni transformar los registros antes de acumularlos.

**Top de productos:** Agrupé los productos y calculé cuánto dinero generó cada uno. Después utilicé `Object.entries()`, `sort()` y `slice()` para ordenarlos y seleccionar los primeros. Finalmente, con `map()` obtuve solamente sus nombres.

**Decisión:** Conservé el arreglo original sin modificar su orden.

**Resultados:** El producto con más unidades vendidas fue Origen Huila 500 g, con 7 unidades. También fue el que más dinero generó, con $294.000.

## MiniReto 4: Analítica v0.1

### Error 1: Ciudades duplicadas

**Síntoma:** Una misma ciudad puede aparecer dos veces en el reporte.

**Entrada:** Ventas registradas como "Medellín" y "medellín".

**Hipótesis:** El programa interpreta los nombres como ciudades diferentes.

**Prueba:** Comparar los nombres originales y después normalizarlos.

**Causa:** Las diferencias entre mayúsculas, minúsculas y espacios.

**Corrección:** Utilizar `trim()` y `toLowerCase()` antes de agrupar las ventas.

### Error 2: Ticket promedio NaN

**Síntoma:** El promedio puede mostrar `NaN` cuando no hay ventas.

**Entrada:** Un arreglo vacío.

**Hipótesis:** El programa intenta dividir entre cero.

**Prueba:** Ejecutar `ticketPromedio([])`.

**Causa:** No hay ventas válidas para realizar la división.

**Corrección:** Comprobar que el contador sea mayor que cero. Si no hay ventas válidas, devolver 0.

### Resultado

El reporte permite consultar las ventas generales, los totales por ciudad, las unidades por producto y los productos que más dinero generaron.

También permite consultar fechas específicas sin generar errores cuando no existen ventas.