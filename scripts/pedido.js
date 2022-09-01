const $ = document.querySelector.bind(document);
const $menu = $('#menu');
const $opciones = $('#opciones');
const $pedido = $('#pedido');
const $contenedorFinalizar = $('#finalizar');
const $sabor = $('#sabor')
const $cantidad = $('#cantidad');
const $botonSumar = $('#boton-sumar');
const $botonRestar = $('#boton-restar');
const $botonProcesarPedido = $('#procesar-pedido');
const $botonFinalizar = $('#boton-finalizar');
const $contenedorDePago = $('#contenedor-pago');


const API_URL = 'https://6310d48c826b98071a4bd630.mockapi.io/empanadas';
const PRECIO_UNIDAD = 250;


const botonAgregar = document.createElement('button');
botonAgregar.id = 'boton-agregar';
botonAgregar.textContent = 'Agregar Empanadas';

const botonFinalizar = document.createElement('button');
botonFinalizar.id = 'boton-finalizar';
botonFinalizar.textContent = 'Finalizar pedido';


const crearInputSabor = (value, id) => {
    const sabor = document.createElement('input');
    sabor.disabled = true;
    sabor.type = 'text';
    sabor.className = 'sabor';
    sabor.id = id;
    sabor.value = value;
    return sabor;
};

const crearInputCantidad = (value, id) => {
    const cantidad = document.createElement('input');
    cantidad.disabled = true;
    cantidad.type = 'number';
    cantidad.className = 'cantidad';
    cantidad.id = id;
    cantidad.value = value;
    return cantidad;
};

const crearBotonSumar = () => {
    const boton = document.createElement('button');
    boton.textContent = '+';
    boton.className = 'boton-sumar';
    return boton;
};

const crearBotonRestar = () => {
    const boton = document.createElement('button');
    boton.textContent = '-';
    boton.className = 'boton-restar';
    return boton;
};

const agregarOpcionAlMenuOpciones = (value, id) => {
    let cantidadIngresada = 0;

    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-opcion';
    const cantidad = crearInputCantidad(cantidadIngresada, `cantidad${id}`);
    const botonSumar = crearBotonSumar();
    const botonRestar = crearBotonRestar();

    contenedor.append(
        crearInputSabor(value, `sabor${id}`),
        cantidad,
        botonRestar,
        botonSumar
    );

    botonSumar.addEventListener('click',() => {
        cantidadIngresada++;
        cantidad.value = cantidadIngresada;
    });

    botonRestar.addEventListener('click', () => {
        if (cantidadIngresada > 0) {
            cantidadIngresada--;
            cantidad.value = cantidadIngresada;
        }
    });

    return contenedor;
};

const crearMenuDeOpciones = async (url) => {
    
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    
    let id = 0;
    data.empanadas.forEach(empanada => {
        id++;
        const opcion = agregarOpcionAlMenuOpciones(empanada.sabor, id);
        $opciones.append(opcion);
    });
    $opciones.append(botonAgregar);
};


const carrito = [];

const agregarSaboresAlCarrito = () => {
    const saboresIngresados = document.querySelectorAll('.sabor');
    let id = 0;
    saboresIngresados.forEach(sabor => {
        id++;
        const cantidad = Number(document.querySelector(`#cantidad${id}`).value);

        if (cantidad > 0) {
            carrito.push({sabor: sabor.value, cantidad: cantidad});
        }
    })
};

const finalizarPedido = () => {
    swal({
        title: "¡Gracias por tu compra!",
        text: `Abonaste: $${cantidadDelPedido * PRECIO_UNIDAD}`,
        icon: "success",
        button: "Finalizar",
        className: "modal-sweetalert"
      });
};

crearMenuDeOpciones(API_URL);

const $carrito = $('#carrito');
const $saboresElegidos = $('#sabores-elegidos');
const $cantidadesElegidas = $('#cantidades-elegidas');

botonAgregar.addEventListener('click', () => {

    if (carrito.length === 0) {
        agregarSaboresAlCarrito();

        carrito.forEach(producto => {
            const texto = document.createElement('p');
            texto.textContent = producto.sabor;
            $saboresElegidos.append(texto);

            const cantidad = document.createElement('p');
            cantidad.textContent = `x ${producto.cantidad}`;
            $cantidadesElegidas.append(cantidad);
        })
    }
});

let cantidadDelPedido = 0;
let clickBotonIrAPagar = 0;

$botonProcesarPedido.addEventListener('click', () => {

    clickBotonIrAPagar++;

    carrito.forEach(producto => {
        const cantidad = producto.cantidad;
        cantidadDelPedido += cantidad;
    })

    if (clickBotonIrAPagar === 1) {
        if (cantidadDelPedido > 0) {
            const mensajeFinal = document.createElement('p');
            mensajeFinal.textContent = `Tu total es de: $ ${cantidadDelPedido * PRECIO_UNIDAD}`;
            $contenedorDePago.append(mensajeFinal);
            $contenedorDePago.append(botonFinalizar);
            $contenedorDePago.className = 'contenedor-pago';
        } else {
            clickBotonIrAPagar = 0;
        }
    }
});




let clickBotonFinalizar = 0;

botonFinalizar.addEventListener('click', () => {

    clickBotonFinalizar++;

    if (clickBotonFinalizar === 1) {
        if (cantidadDelPedido > 0) {
            finalizarPedido();
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        } else {
            clickBotonFinalizar = 0;
        }
    }
});


