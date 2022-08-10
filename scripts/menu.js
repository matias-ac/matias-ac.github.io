const $menuEmpanadas = document.querySelector('#menu-contenedor');

const generarMenuEmpanadas = (listaDeEmpanadas) => {
    listaDeEmpanadas.forEach(empanada => {
        const contenedor = document.createElement('div');
        const nombre = document.createElement('p');
        const descripcion = document.createElement('p');
    
        nombre.textContent = empanada.nombre;
        descripcion.textContent = `(${empanada.descripcion})`;
    
        contenedor.append(nombre, descripcion);
        $menuEmpanadas.appendChild(contenedor);
    });
};

generarMenuEmpanadas(listaSabores);

