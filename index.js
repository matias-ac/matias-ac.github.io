const app = document.getElementById('app');
const boton = document.getElementById('boton-iniciar');

const precioUnidad = 250;
const descuentoMediaDocena = 0.10;
const descuentoDocena = 0.15;
const cantidadDeOpciones = 6;

const promoBancoNacion = 0.15;
const promoBancoFrances = 0.05;
const promoBancoHSBC = 0.05;
const promoMercadoPago = 0.10;

const mensajeBienvenida = `¡Bienvenido a Empanadas Online!

Precios:
- Por unidad $${precioUnidad}.
- Llevando 6 o más ${descuentoMediaDocena * 100}% off.
- Llevando 12 o más ${descuentoDocena * 100}% off.

Elegí a continuación la cantidad y los sabores.`;

const mensajeMenu = `Menu:

1. Carne Suave (CS)    4. Jamón y Queso (JQ)
2. Carne Picante (CP)  5. Roquefort y Jamón (RJ)
3. Verdura (VE)        6. Pollo (PO)

`;

const mensajeSolicitarEmpanada = `${mensajeMenu} Ingresa el número de opción elegida:`

const mensajePago = `Modalidad de pago:
- Opción 1: Efectivo
- Opción 2: Crédito`;

const mensajePromos = `Tenemos las siguientes promos bancarias:
- Opción 1: Banco Nación ${promoBancoNacion * 100}%
- Opción 2: Banco Francés ${promoBancoFrances * 100}%
- Opción 3: Banco HSBC ${promoBancoHSBC * 100}%
- Opción 4: MercadoPago ${promoMercadoPago * 100}%`;

const saludarUsuario = () => {
    alert (mensajeBienvenida);
};

const mostrarMenu = () => {
    alert (mensajeMenu);
};

const ingresarCantidad = () => {
    const cantidad = Number(parseInt(prompt('Ingresa la cantidad de empanadas que vas a llevar:')));
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

const solicitarOpcion = (mensaje, cantidad) => {
    let opcion = Number(parseInt(prompt(`${mensaje}`)));
    while (!verificarOpcion(opcion, cantidad)) {
        opcion = Number(parseInt(prompt(`${mensaje}`)));
    }
    return opcion;
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
    for (let i = 0; i < cantidad; i++) {
        let opcion = solicitarOpcion(mensajeSolicitarEmpanada, cantidadDeOpciones);
        agregarOpcionAlPedido(opcion, pedidoUsuario);
        saboresSolicitados++;
    }
};

const calcularTotal = (cantidad) => {
    return cantidad * precioUnidad;
};

const aplicarDescuento = (total, promocion) => {
    const descuento = total * promocion;
    return total - descuento;
};

const calcularDescuentoCantidad = (cantidad, total) => {
    let totalAPagar = total;
    if (cantidad >= 6 && cantidad < 12) {
        totalAPagar = aplicarDescuento(total, descuentoMediaDocena);
    } else if (cantidad >= 12) {
        totalAPagar = aplicarDescuento(total, descuentoDocena);
    }
    return totalAPagar;
};

const mostrarTotal = (cantidad) => {
    const total = calcularTotal(cantidad);
    alert(`Tu total es: $${total}. A continuación elegí tu opción de pago.`);
};

const procesarPagoEfectivo = (total) => {
    alert(`Pago completo, tu total fue de $${total}`);
    console.log(`El pago final fue de: ${total}`);
};

const calcularDescuentoBancario = (opcion, total) => {
    let resultado;
    if (opcion === 1) {
        resultado = aplicarDescuento(total, promoBancoNacion);
    } else if (opcion === 2) {
        resultado = aplicarDescuento(total, promoBancoFrances);
    } else if (opcion === 3) {
        resultado = aplicarDescuento(total, promoBancoHSBC);
    } else if (opcion === 4) {
        resultado = aplicarDescuento(total, promoMercadoPago);
    }
    return resultado;
};

const procesarPagoTarjeta = (opcion, total) => {
    const pago = calcularDescuentoBancario(opcion, total);
    alert(`Pago completo, tu total fue de $${pago}`);
    console.log(`El pago final fue de: ${pago}`);
};

const procesarPago = (total) => {
    const pagoElegido = solicitarOpcion(mensajePago, 2);
    if (pagoElegido === 1) {
        procesarPagoEfectivo(total);
    } else {
        const promoElegida = solicitarOpcion(mensajePromos, 4);
        procesarPagoTarjeta(promoElegida, total);
    }    
};

const finalizarPedido = () => {
    alert('¡Gracias por tu compra!')
};

const resetearPedido = () => {
    pedidoUsuario = `Los sabores elegidos son:`;
};

function ejecutarPrograma() {
    saludarUsuario();
    mostrarMenu();
    const cantidad = solicitarCantidad();
    console.log('La cantidad ingresada fue de: ' + cantidad);
    solicitarSabores(cantidad);
    console.log(pedidoUsuario);
    const totalSinDescuentos = calcularTotal(cantidad);
    console.log('El total sin descuentos es de: ' + totalSinDescuentos);
    const totalSegunCantidad = calcularDescuentoCantidad(cantidad, totalSinDescuentos);
    console.log('El total según la cantidad que lleva es: ' + totalSegunCantidad);
    mostrarTotal(cantidad);
    procesarPago(totalSegunCantidad);
    finalizarPedido();
    resetearPedido();
}

boton.onclick = () => {
    ejecutarPrograma();
}
