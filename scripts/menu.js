const $menuEmpanadas = document.querySelector('#menu-contenedor');
const DATA_LOCAL = './data/data.json';

const generarMenuEmpanadas = (listaDeEmpanadas) => {

    listaDeEmpanadas.forEach(empanada => {

        const contenedor = document.createElement('div');
        const nombre = document.createElement('p');
        const descripcion = document.createElement('p');
    
        nombre.textContent = empanada.sabor;
        descripcion.textContent = `(${empanada.descripcion})`;
    
        contenedor.append(nombre, descripcion);
        $menuEmpanadas.appendChild(contenedor);

    });
};

const listaDeEmpanadas = [];

const obtenerData = async () => {

    const respuesta = await fetch(DATA_LOCAL);
    const data = await respuesta.json();

    data.empanadas.forEach(elemento => {
        listaDeEmpanadas.push(elemento);
    })

    generarMenuEmpanadas(listaDeEmpanadas)
};

obtenerData();

