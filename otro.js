const app = document.getElementById('app');
const boton = document.getElementById('boton-iniciar');

const precioUnidad = 250;
const descuentoMediaDocena = 0.1;
const descuentoDocena = 0.15;
const cantidadDeOpciones = 6;
const limitePedidoOnline = 60;

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
};

const mostrarMenu = () => {
    alert (mensajeMenu);
};

const ingresarCantidad = () => {
    const cantidad = Number(prompt('Ingresa la cantidad de empanadas que vas a llevar:'));
    return cantidad;
};

const verificarCantidadIngresada = (cantidad) => {
    return (cantidad <= 0 || cantidad === null || isNaN(cantidad)) ? 
        false : 
        true;
};

const solicitarCantidad = () => {
    let cantidad = ingresarCantidad();
    while (!verificarCantidadIngresada(cantidad)) {
        cantidad = ingresarCantidad();
    }
    return cantidad;
};

let pedidoUsuario = `Los sabores elegidos son:`;

const solicitarOpcion = () => {
    return Number(prompt(`${mensajeMenu} Ingresa el número de opción elegida:`));
};

const verificarOpcion = (opcion, cantidadDeOpciones) => {
    return (opcion > 0 && opcion <= cantidadDeOpciones && opcion !== null && !isNaN(opcion)) ?
        true :
        false;
};

const ingresarSabor = (sabor) => {
    pedidoUsuario += `
    - ${sabor}`;
};

const agregarOpcionAlPedido = (opcion) => {
    if (opcion === 1) {
        ingresarSabor('Carne Suave');
    } else if (opcion === 2) {
        ingresarSabor('Carne Picante');
    } else if (opcion === 3) {
        ingresarSabor('Verdura');
    } else if (opcion === 4) {
        ingresarSabor('Jamón y Queso');
    } else if (opcion === 5) {
        ingresarSabor('Roquefort y Jamón');
    } else if (opcion === 6) {
        ingresarSabor('Pollo');
    }
};

const solicitarSabores = (cantidad) => {
    let saboresSolicitados = 0;
    while (saboresSolicitados < cantidad) {
        let opcion = solicitarOpcion();
        if (verificarOpcion(opcion, cantidadDeOpciones)) {
            agregarOpcionAlPedido(opcion, pedidoUsuario);
            saboresSolicitados++;
        }
    }
};

const mostrarOpcionesDePago = () => {

};

const procesarPago = (opcion) => {

};

const procesarPagoEfectivo = (cantidad, precio) => {

};

const mostrarPromosBancarias = () => {

};

const procesarPagoTarjeta = (cantidad, precio, descuento) => {

};

const finalizarVenta = () => {

};

function ejecutarPrograma() {
    saludarUsuario();
    mostrarMenu();
    const cantidad = solicitarCantidad();
    console.log(cantidad);
    solicitarSabores(cantidad);
    console.log(pedidoUsuario);
}



boton.onclick = ejecutarPrograma;
