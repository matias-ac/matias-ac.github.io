class PromoBancaria {
    constructor(banco, descuento) {
        this.banco = banco;
        this.promocion = descuento;
    }

    mostrarInfo() {
        return `${this.banco} ${(this.promocion * 100)}%`;
    }
}

class Empanada {
    constructor(nombre, sigla, descripcion) {
        this.nombre = nombre;
        this.sigla = sigla;
        this.descripcion = descripcion;
    }
    
    mostrarInfo() {
        return `${this.nombre} (${this.sigla})`;
    }
}

const precioUnidad = 250;
const descuentoMediaDocena = 0.10;
const descuentoDocena = 0.15;
const cantidadDeOpciones = 6;

const listaSabores = [
    new Empanada('Carne Suave', 'CS', 'Carne picada, cebolla, huevo, morrón rojo y verdeo'),
    new Empanada('Carne Picante', 'CP', 'Carne picada, cebolla, verdeo, pimentón y salsa picante'),
    new Empanada('Verdura', 'VE', 'Acelga, cebolla, salsa blanca y queso reggianito'),
    new Empanada('Jamón y Queso', 'JQ', 'Jamón cocido y muzzarella'),
    new Empanada('Roquefort y Jamón', 'RJ', 'Roquefort, jamón y muzzarella'),
    new Empanada('Pollo', 'PO', 'Pollo, cebolla, huevo, verdeo y morrón rojo'),
];

const promocionesBancarias = [
    new PromoBancaria('Banco Nación', 0.15),
    new PromoBancaria('Banco Francés', 0.05),
    new PromoBancaria('Banco HSBC', 0.05),
    new PromoBancaria('Mercado Pago', 0.10),
];
