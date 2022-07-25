const precioUnidad = 250;
const descuentoMediaDocena = 0.1;
const descuentoDocena = 0.15;

const mensajeBienvenida = `¡Bienvenido a Empanadas Online!

Precios:
- Por unidad $${precioUnidad}.
- Promo media docena ${descuentoMediaDocena * 100}% off.
- Promo docena ${descuentoDocena * 100}% off.

Elegí a continuación la cantidad y los sabores.`;

const mensajeMenu = `Menu:

1. Carne Suave (CS)    4. Jamón y Queso (JQ)
2. Carne Picante (CP)  5. Roquefort y Jamón (RJ)
3. Verdura (VE)        6. Pollo (PO)

`;

const saludarUsuario = () => {
    alert (mensajeBienvenida);
}

const mostrarMenu = () => {
    alert (mensajeMenu);
}

const ingresarCantidad = () => {
    const cantidad = Number(prompt('Ingresa la cantidad de empanadas que vas a llevar:'));
    return cantidad;
}

const verificarCantidadIngresada = (cantidad) => {
    let cantidadEsCorrecta;
    const condicion = cantidad <= 0 || cantidad === null || isNaN(cantidad); 
    return (condicion) ? cantidadEsCorrecta = false : cantidadEsCorrecta = true;
}

const solicitarCantidad = () => {
    let cantidad = ingresarCantidad();
    while (!verificarCantidadIngresada(cantidad)) {
        cantidad = ingresarCantidad();
    }
    return cantidad;
}

// alert(`Elegí los ${cantidadDeEmpanadas} sabores que vas a llevar.`)
// console.log(`El cliente ingresó ${cantidadDeEmpanadas} empanadas.`);

let sabores = `Los sabores elegidos son:`;
let esIngresoCorrecto = false;
let pedidoCompleto = 0;

const solicitarSabores = () => {
    
    while (pedidoCompleto < cantidadDeEmpanadas) {
        let saborIngresado = Number(prompt(`${mensajeMenu} Ingresa el número de opción elegida:`));
        let verificarValor = saborIngresado > 0 && saborIngresado <= 6 && saborIngresado !== null && !isNaN(saborIngresado);

        const ingresarSabor = (sabor) => {
            sabores += `
            - ${sabor}`;
            pedidoCompleto++;
        }

        if (verificarValor) {
            if (saborIngresado === 1) {
                ingresarSabor('Carne Suave');
            } else if (saborIngresado === 2) {
                ingresarSabor('Carne Picante');
            } else if (saborIngresado === 3) {
                ingresarSabor('Verdura');
            } else if (saborIngresado === 4) {
                ingresarSabor('Jamón y Queso');
            } else if (saborIngresado === 5) {
                ingresarSabor('Roquefort y Jamón');
            } else if (saborIngresado === 6) {
                ingresarSabor('Pollo');
            } 
        } else {
            alert('Ingreso incorrecto');
        }

        if (pedidoCompleto === cantidadDeEmpanadas) {
            esIngresoCorrecto = true;
            break;
        }
    }

    alert(`${sabores}

    Continua con tu pago.`);
    console.log(`Ingreso correcto: ${esIngresoCorrecto}.`);
    console.log(sabores);
}

const mostrarOpcionesDePago = () => {

}

const procesarPago = (opcion) => {

}

const procesarPagoEfectivo = (cantidad, precio) => {

}

const mostrarPromosBancarias = () => {

}

const procesarPagoTarjeta = (cantidad, precio, descuento) => {

}

const finalizarVenta = () => {

}

function ejecutarPrograma() {
    saludarUsuario();
    mostrarMenu();
    const cantidad = solicitarCantidad();
    console.log(cantidad);
}

const app = document.getElementById('app');
const boton = document.getElementById('boton-iniciar');

boton.onclick = ejecutarPrograma;
