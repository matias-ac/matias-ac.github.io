# Curso JavaScript Coderhouse

## Clase 15 - AJAX & Fetch

### Fetch en tu proyecto

---

**Tipo de desafío:** 
Desafío entregable.

**Formato:** 
Página HTML y  código fuente en JavaScript. Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por “claseApellido”.

**Consigna:** 
Utiliza fetch() para cargar datos en tu aplicación de forma asincrónica:
- puedes consumir una API que ofrezca recursos relevantes para tu app, o bien,
- crea un archivo .JSON y carga los datos de tu app usando fetch y una ruta relativa.

---

**>> Aspectos a incluir en el entregable:**

Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que realice peticiones http usando fetch.

**>> Ejemplos:**

- Escribir los datos de tus productos en venta en un archivo .json y cargarlo en el inicio usando fetch();

- Si tengo una app sobre películas y series, armar mi catálogo consultando una API que envíe datos sobre ésto;

- Si trabajo con un formulario, al hacer submit puedo hacer una petición POST a alguna API de emails para enviar correos (ej, Email JS).

---

### Descripción del proyecto:

El proyecto trata de un sitio web para venta de distintas opciones de empanadas.

Se utiliza la librería [SweetAlert](https://sweetalert.js.org/) para finalizar la compra con un mensaje al usuario.

Se utiliza [mockAPI](https://mockapi.io/) para generar una fake API que contenga la información de las opciones de empanadas.

El consumo de la API se realiza con **async/await** y **fetch()** para generar el menú de la página principal y el menú donde se elegirán los sabores en la página de pedidos.
