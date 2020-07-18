//Remplazar elementos

/*const nuevoElemento = document.createElement('h2');
//Agregar id
nuevoElemento.id = 'encabezado';
//Agregar texto
nuevoElemento.appendChild(document.createTextNode('Cursos bien piolas'));
//Remplazar elemento anterior con el nuevo
const elementAnterior = document.querySelector('#encabezado');
//Elemento padre
const elementPadre = document.querySelector('#lista-cursos');
//Remplazar
elementPadre.replaceChild(nuevoElemento, elementAnterior)
console.log(elementAnterior.parentElement);*/


/*//Eliminar elementos
//BUscar el elemento a eliminar
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');
//Se puede usar las dos formas
enlaces[1].remove();
//navegacion.removeChild(enlaces[1]);

console.log(navegacion);*/

//Eliminar y agregar clases
const enlaces = document.querySelector('.enlace');

let elemento;
//Agregar clase
enlaces.classList.add('nueva-clase');
//Eliminar clase
enlaces.classList.remove('nueva-clase');

console.log(elemento);