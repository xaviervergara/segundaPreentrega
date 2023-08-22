// const { Producto, Sucursal, Empleado, Cliente } = require('./objects');

import {
  sabPrimavera,
  acAniMarinos,
  toaLisa,
  cortCañamo,
  mantRayaDesparejas,
  secaPlatBamboo,
  portMacBamboo,
  espIrregular,
  sucCapFederal,
  sucAvellaneda,
} from './objects.js';

let seleccionarSucursal = function (sucursal) {
  //Agregar cantidad a la prop de cada producto
  sucursal.items.forEach((ele) => ele.agregarCant(sucursal));

  for (const key of sucursal.items) {
    //Se crea la estructura de bloque contenedora
    let seccion = document.createElement('section');
    seccion.className = 'produDisplay';
    document.body.append(seccion);
    ///////
    let contPrincipal = document.createElement('div');
    contPrincipal.className = 'mainContainer row';
    seccion.appendChild(contPrincipal);
    //////
    let contIzquierda = document.createElement('div');
    contIzquierda.className = 'leftContainer col-8';
    contPrincipal.appendChild(contIzquierda);
    // ADENTRO
    let izqAdentro = document.createElement('div');
    izqAdentro.className = 'leftInside row';
    contIzquierda.appendChild(izqAdentro);

    //////
    let contDerecha = document.createElement('div');
    contDerecha.className = 'rightContainer col-4';
    contPrincipal.appendChild(contDerecha);
    // ADENTRO
    let derAdentro = document.createElement('div');
    derAdentro.className = 'rightInside row';
    contDerecha.appendChild(derAdentro);

    izqAdentro.innerHTML = `  <div class="left_child col-1">  ${key.id}</div>
                              <div class="left_child col-2">  ${key.nombre}</div>
                              <div class="left_child col-2">  ${key.codigo}</div>
                              <div class="left_child col-6">  ${key.descripcion}</div>`;

    derAdentro.innerHTML = `  <div class="right_child col-6"> ${key.cant}</div>
                              <div class="right_child col-6"> ${key.vendido}</div>`;
  }
};
////

////

// FUNCION PARA BORRAR TODAS LAS ETIQUETAS ANTERIORES

const borrar = (etiqueta) => {
  const secciones = document.querySelectorAll(etiqueta);
  secciones.forEach((ele) => ele.remove());
};

//traemos el select sucursal

const selectElement = document.getElementById('sucursalSelect');
//traemos el select stock

const selectStock = document.getElementById('stockSelect');

//////////////////////////////////////////////
// FUNCION SELECT DE SUCURSAL
selectElement.addEventListener('change', () => {
  const selectedValue = selectElement.value;

  borrar('.produDisplay');

  if (selectedValue === '1') {
    seleccionarSucursal(sucCapFederal);
  } else if (selectedValue === '2') {
    seleccionarSucursal(sucAvellaneda);
  }
});

////
// FUNCION SELECT DE STOCK
/////////////////////////////////////////////////////////
// FUNCION SELECT DE SUCURSAL

// selectElement.addEventListener('change', () => {
//   const selectedValue = selectElement.value;

//   const secciones = document.querySelectorAll('.produDisplay');

//   secciones.forEach(function (seccion) {
//     seccion.remove();
//   });

//   if (selectedValue === '1') {
//     seleccionarSucursal(sucCapFederal); //aca habiamos quedado
//     selectStock.addEventListener('change', () => {
//       const secciones = document.querySelectorAll('.produDisplay');
//       secciones.forEach(function (seccion) {
//         seccion.remove();
//       });
//       const selectedValue = selectStock.value;
//       if (selectedValue === '1') {
//         filtroPorStock(sucCapFederal);
//       }
//     });
//   } else if (selectedValue === '2') {
//     seleccionarSucursal(sucAvellaneda);
//   }
// });

// const sunButton = document.getElementById('sunButton'); //sun button
// sunButton.addEventListener('click', toggleDarkMode);

// function toggleDarkMode() {
//   const htmlElement = document.getElementById('htmlElement');

//   // Cambiar las clases o estilos según el modo actual
//   if (htmlElement.classList.contains('darkMode')) {
//     htmlElement.classList.remove('darkMode');
//   } else {
//     htmlElement.classList.add('darkMode');
//   }
// }
//////////////////////////////////////////////////////// Este es
const sunButton = document.getElementById('sunButton');
sunButton.addEventListener('click', toggleTheme);

// Obtener el tema actual desde el Local Storage
const currentTheme = localStorage.getItem('theme');

// Aplicar el tema actual al cargar la página
if (currentTheme) {
  applyTheme(currentTheme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('darkMode');
  } else {
    document.documentElement.classList.remove('darkMode');
  }
}
