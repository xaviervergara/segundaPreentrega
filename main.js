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

//Funcion cambio de sucursal
function seleccionarSucursal(sucursal) {
  const theme = localStorage.getItem('theme');
  const containerClass =
    theme === 'dark' ? 'mainContainer' : 'lightMainDinamico';

  //Agregar cantidad a la prop de cada producto
  sucursal.items.forEach((ele) => ele.agregarCant(sucursal));

  for (const key of sucursal.items) {
    //Se crea la estructura de bloque contenedora
    let seccion = document.createElement('section');
    seccion.className = 'produDisplay';
    document.body.append(seccion);
    ///////
    let contPrincipal = document.createElement('div');
    // contPrincipal.className = `${containerClass} row`;
    contPrincipal.classList.add(containerClass, 'mainContainer', 'row');
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
}
////Funcion filtrado x stock
/////////////////////////////////PRUEBA
function aplicarFiltro(sucursal, filtro) {
  const theme = localStorage.getItem('theme');
  const containerClass =
    theme === 'dark' ? 'mainContainer' : 'lightMainDinamico';

  //Agregar cantidad a la prop de cada producto
  sucursal.items.forEach((ele) => ele.agregarCant(sucursal));

  for (const key of filtro) {
    //Se crea la estructura de bloque contenedora
    let seccion = document.createElement('section');
    seccion.className = 'produDisplay';
    document.body.append(seccion);
    ///////
    let contPrincipal = document.createElement('div');
    // contPrincipal.className = `${containerClass} row`;
    contPrincipal.classList.add(containerClass, 'mainContainer', 'row');
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
}

/////////////////////////////////PRUEBA
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
///////////////

//////////////////////////////////////////////

///////////////////////////////////////////////////////////
///Funcion filtro x stock

selectStock.addEventListener('change', filtrarPorStock);

function filtrarPorStock() {
  //obtiene valor numerico de la sucursal seleccionada
  const valorSucursal = selectElement.value;
  //valor numerico usado para obtener variable de sucursal
  const sucursalSeleccionada =
    valorSucursal === '1' ? sucCapFederal : sucAvellaneda;
  const valorStock = selectStock.value;
  //Productos con stock
  const productoConStock = sucursalSeleccionada.items.filter(
    (ele) => ele.cant > 0
  );
  //Productos sin stock
  const productoSinStock = sucursalSeleccionada.items.filter(
    (ele) => ele.cant == 0
  );
  //borrar contenido
  borrar('.produDisplay');

  if (valorStock === '0') {
    seleccionarSucursal(sucursalSeleccionada);
  } else if (valorStock === '1') {
    aplicarFiltro(sucursalSeleccionada, productoConStock);
  } else if (valorStock === '2') {
    aplicarFiltro(sucursalSeleccionada, productoSinStock);
  }
}

////////////DARKMODE LOCALSTORAGE////////////////
//traemos la etiqueta body del html
const body = document.getElementById('cuerpo');
//traemos el display fijo donde esta el formulario
const mDisplayC = document.getElementById('mDisplay-content');
//traemos el boton para cambiar de tema
const sunButton = document.getElementById('sunButton');
//le agregamos un escuchador de eventos tipo click al boton de tema
sunButton.addEventListener('click', cambiarTema); //=====>> EVENTO

const temaActual = localStorage.getItem('theme');

if (temaActual) {
  aplicarTema(temaActual);
}

function cambiarTema() {
  const temaActual = localStorage.getItem('theme');

  let temaNuevo;

  if (temaActual === 'dark') {
    temaNuevo = 'light';
  } else {
    temaNuevo = 'dark';
  }

  aplicarTema(temaNuevo);

  localStorage.setItem('theme', temaNuevo);
}

function aplicarTema(theme) {
  const mainContainerDinamico =
    document.getElementsByClassName('mainContainer');
  if (theme === 'light') {
    body.classList.add('lightBody');
    mDisplayC.classList.add('lightMdisplayC');
    for (const ele of mainContainerDinamico) {
      ele.classList.add('lightMainDinamico');
    }
  } else {
    body.classList.remove('lightBody');
    mDisplayC.classList.remove('lightMdisplayC');
    for (const ele of mainContainerDinamico) {
      ele.classList.remove('lightMainDinamico');
    }
  }
}
