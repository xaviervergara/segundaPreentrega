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
  // swalConfig,
  sucCapFederal,
  sucAvellaneda,
  alertaPersonalizada,
} from './objects.js';

///////////////////////////////////////////////////////
//FUNCION PARA PINTAR ESTRUCTURA  DINAMICA EN EL DOM//
/////////////////////////////////////////////////////

function aplicarFiltro(filtro) {
  //traemos el theme del Storage, "containerClass" almacena nombre de clase oscura o clara
  const theme = localStorage.getItem('theme');
  const containerClass =
    theme === 'dark' ? 'mainContainer' : 'lightMainDinamico';

  filtro.forEach((ele) => {
    //Se crea la estructura de bloque contenedora
    let seccion = document.createElement('section');
    seccion.className = 'produDisplay';
    document.body.append(seccion);
    ///////
    let contPrincipal = document.createElement('div');
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

    izqAdentro.innerHTML = `  <div class="left_child col-1">  ${ele.id}</div>
                              <div class="left_child col-2">  ${ele.nombre}</div>
                              <div class="left_child col-2">  ${ele.codigo}</div>
                              <div class="left_child col-6">  ${ele.descripcion}</div>`;

    derAdentro.innerHTML = `  <div class="right_child col-6"> ${ele.cant}</div>
                              <div class="right_child col-6"> ${ele.vendido}</div>`;
  });
}

////////////////////////////////////////////////////////
// FUNCION PARA BORRAR TODAS LAS ETIQUETAS ANTERIORES//
//////////////////////////////////////////////////////

const borrar = (etiqueta) => {
  const secciones = document.querySelectorAll(etiqueta);
  secciones.forEach((ele) => ele.remove());
};

//////////////////////////////////////////////
///////// FUNCION SELECT DE SUCURSAL/////////
////////////////////////////////////////////

//traemos el select sucursal
const selectSucursal = document.getElementById('sucursalSelect');
//traemos el select stock
const selectStock = document.getElementById('stockSelect');

selectSucursal.addEventListener('change', () => {
  const sucursalValue = selectSucursal.value;

  if (sucursalValue === '3') {
    borrar('.produDisplay');
    Swal.fire(alertaPersonalizada('Sucursal no disponible'));
    return;
  } else if (sucursalValue === '4') {
    apiMl();
  }

  borrar('.produDisplay');

  // filtrarPorStock();
  filtroPorCodigo();
});

///////////////////////////////////////////////////
/////////////Funcion filtro x stock///////////////
/////////////////////////////////////////////////

selectStock.addEventListener('change', filtrarPorStock);

function filtrarPorStock() {
  const valorSucursal = selectSucursal.value;

  let sucursalSeleccionada = null;

  if (valorSucursal === '1') {
    sucursalSeleccionada = sucCapFederal;
  } else if (valorSucursal === '2') {
    sucursalSeleccionada = sucAvellaneda;
  }
  //Funcion para obtener la cantidad desde el obj stock interno del producto, e ingresarla
  //en la propiedad "cant" del mismo.

  sucursalSeleccionada.items.forEach((ele) =>
    ele.agregarCant(sucursalSeleccionada)
  );

  const valorStock = selectStock.value;

  borrar('.produDisplay');

  //corta la funcion si no hay ninguna suc seleccionada o si se selecciona
  //martinez, la cual no existe en el "back" y a su vez tira un alert
  if (valorSucursal === '0' || valorSucursal === '3') {
    return;
  }

  ///////////

  if (valorStock === '0') {
    aplicarFiltro(sucursalSeleccionada.items);
    return;
  }

  const productoConStock = sucursalSeleccionada.items.filter(
    (ele) => ele.cant > 0
  );
  const productoSinStock = sucursalSeleccionada.items.filter(
    (ele) => ele.cant == 0
  );

  if (valorStock === '1') {
    aplicarFiltro(productoConStock);
  } else if (valorStock === '2') {
    aplicarFiltro(productoSinStock);
  }
}
///////////////////////////////////////////////////
///////////////////FILTRAR POR CODIGO/////////////
/////////////////////////////////////////////////

//traemos el campo de texto
const textoCodigo = document.getElementById('textoCodigo');
//traemos el boton lupa
const inputCodigo = document.getElementById('button-addon2');

//se escucha evento en el boton lupa y se agrega la funcion para filtrar x codigo
inputCodigo.addEventListener('click', filtroPorCodigo);

//funcion filtro por codigo
function filtroPorCodigo() {
  const valorSucursal = selectSucursal.value;

  let sucursalSeleccionada = null;

  if (valorSucursal === '1') {
    sucursalSeleccionada = sucCapFederal;
  } else if (valorSucursal === '2') {
    sucursalSeleccionada = sucAvellaneda;
  }

  const codigoIngresado = textoCodigo.value;

  const producto = sucursalSeleccionada.items.filter(
    (ele) => ele.codigo === codigoIngresado
  );

  if (sucursalSeleccionada) {
    filtrarPorStock();
  }
  console.log(`valor del input ${!!codigoIngresado}`);

  if (!!codigoIngresado) {
    if (producto.length == 0) {
      borrar('.produDisplay');
      Swal.fire(alertaPersonalizada('Producto sin ingreso'));
    } else if (producto) {
      borrar('.produDisplay');
      aplicarFiltro(producto);
    }
  }
}

//////////////////////////////////////////////////
////////////DARKMODE LOCALSTORAGE////////////////
////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////
//FUNCION ASYNC/AWAIT PETICION PRODUCTOS API MERCADO LIBRE//
///////////////////////////////////////////////////////////

const apiMl = async () => {
  try {
    const response = await fetch(
      'https://api.mercadolibre.com/sites/MLA/search?nickname=ARREDOTIENDAONLINE'
    );
    const data = await response.json();
    aplicarFiltroTiendaOnline(data.results);
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////
//FUNCION PRUEBA PARA PINTAR PRODUCTOS DE LA API ML//
////////////////////////////////////////////////////

function aplicarFiltroTiendaOnline(filtro) {
  const theme = localStorage.getItem('theme');
  const containerClass =
    theme === 'dark' ? 'mainContainer' : 'lightMainDinamico';

  //Agregar cantidad a la prop de cada producto
  // sucursal.items.forEach((ele) => ele.agregarCant(sucursal));
  filtro.forEach((ele) => {
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

    izqAdentro.innerHTML = `  <div class="left_child col-1">  ${ele.id.slice(
      -4
    )}</div>
                              <div class="left_child col-2"> No disponible </div>
                              <div class="left_child col-2">  ${
                                Object.keys(ele.variations_data)[0]
                              }</div>
                              <div class="left_child col-6">  ${
                                ele.title
                              }</div>`;

    derAdentro.innerHTML = `  <div class="right_child col-6"> ${ele.available_quantity}</div>
                              <div class="right_child col-6"> ${ele.sold_quantity}</div>`;
  });
}
