// const { Producto, Sucursal, Empleado, Cliente } = require('./objects');
import { Sucursal, Producto, Empleado, Cliente } from './objects.js';

///////////////////////////////////////////////////////////////////
///////////////////INSTANCIAS DE PRODUCTOS////////////////////////
/////////////////////////////////////////////////////////////////

////////////////////////////////
////CATEGORIA: ROPA DE CAMA////
//////////////////////////////

const sabPrimavera = new Producto({
  id: '0001',
  articulo: 'sabanas',
  codigo: '10113T08278%ME',
  nombre: 'sabPrimavera',
  descripcion: 'SAB-TWIN C/FAJA/VIVO ALG PEI PRIMAVERA',
  precio: 33000,
  medida: 'twin',
  categoria: 'ropa de cama',
  color: 'me',
  composicion: '100% algodon',
  stock: [],
  vendido: 0,
});

const acAniMarinos = new Producto({
  id: '0002',
  articulo: 'acolchados',
  codigo: '20021U08227%CC',
  nombre: 'acAniMarinos',
  descripcion: 'ACOL-1PL REV ANIMALES MARINOS',
  precio: 16495,
  medida: '1pza',
  categoria: 'ropa de cama',
  color: 'cc',
  composicion: '100% poliester',
  stock: [],
  vendido: 0,
});

////////////////////////
////CATEGORIA: BAÑO////
//////////////////////

const toaLisa = new Producto({
  id: '0003',
  articulo: 'toallas',
  codigo: '30012E76394%KN',
  nombre: 'toaLisa',
  descripcion: 'JGO T-44X80 70X140 LISA 400G CLASSIC TDF',
  precio: 8792,
  medida: '70 x 140 cm / 44 x 80 cm',
  categoria: 'baño',
  color: 'kn',
  composicion: '100% algodon',
  stock: [],
  vendido: 0,
});

const cortCañamo = new Producto({
  id: '0004',
  articulo: 'cortinas',
  codigo: '50201Z08151%KN',
  nombre: 'cortCañamo',
  descripcion: 'CORT-BANO C/P C/OJAL CAÑAMO',
  precio: 13993,
  medida: '185 x 185 cm',
  categoria: 'baño',
  color: 'kn',
  composicion: '55% cáñamo, 45% algodón',
  stock: [],
  vendido: 0,
});

//////////////////////////
////CATEGORIA: COCINA////
////////////////////////

const mantRayaDesparejas = new Producto({
  id: '0005',
  articulo: 'manteles',
  codigo: '51311G08136%A',
  nombre: 'mantRayaDesparejas',
  descripcion: 'CARP.RECT-2.00 ST POL CUERINA RAYAS DESPAREJA',
  precio: 10392,
  medida: '185 x 185 cm',
  categoria: 'cocina',
  color: 'a',
  composicion: 'poliester cuerina',
  stock: [],
  vendido: 0,
});

const secaPlatBamboo = new Producto({
  id: '0006',
  articulo: 'seca platos',
  codigo: '86001Z60557%KN',
  nombre: 'secaPlatBamboo',
  descripcion: 'NT-SECAPLATOS BAMBOO CH',
  precio: 14990,
  medida: '40 x 23 x 25 cm',
  categoria: 'cocina',
  color: 'kn',
  composicion: 'bamboo',
  stock: [],
  vendido: 0,
});

////////////////////////
////CATEGORIA: DECO////
//////////////////////

const portMacBamboo = new Producto({
  id: '0007',
  articulo: 'porta macetas',
  codigo: '86061U00033%KN',
  nombre: 'portMacBamboo',
  descripcion: 'NT-PORTA MACETA BAMBOO CH',
  precio: 7499,
  medida: '15 x 15 x 15 cm',
  categoria: 'deco',
  color: 'kn',
  composicion: 'bamboo',
  stock: [],
  vendido: 0,
});

const espIrregular = new Producto({
  id: '0008',
  articulo: 'espejos',
  codigo: '86061U00108%FD',
  nombre: 'espIrregular',
  descripcion: 'NT-ESPEJO FORMA VARIADA MARCO METAL',
  precio: 22990,
  medida: ' 60 x 58.5 x 1 cm',
  categoria: 'deco',
  color: 'fd',
  composicion: 'metal',
  stock: [],
  vendido: 0,
});

///////////////////////////////////////////////////////////////////
///////////////////INSTANCIAS DE SUCURSALES///////////////////////
/////////////////////////////////////////////////////////////////

const sucCapFederal = new Sucursal({
  nombre: 'sucCapFederal',
  stockTotal: 0,
  ventaDia: 0,
  items: [],
  empleados: [],
  cliente: [],
});

const sucAvellaneda = new Sucursal({
  nombre: 'sucAvellaneda',
  stockTotal: 0,
  ventaDia: 0,
  items: [],
  empleados: [],
  cliente: [],
});

///////////////////////////////////////////////////////////////////
///////////////////INSTANCIAS DE EMPLEADOS////////////////////////
/////////////////////////////////////////////////////////////////

// (SE AGREGAN CON METODO AGREGARempleado DESDE LA SUCURSAL)

///////////////////////////////////////////////////////////////////
///////////////////INSTANCIAS DE CLIENTES/////////////////////////
/////////////////////////////////////////////////////////////////

// (SE AGREGAN CON METODO AGREGARcliente DESDE LA SUCURSAL)

///////////////////////////////////////////////////////////////////
///////////////////////////EJECUCIONES////////////////////////////
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
/////////////////INGRESO DE MERCADERIA CAPITAL FEDERAL////////////////

sucCapFederal.ingreso(sabPrimavera, 10);
sucCapFederal.ingreso(acAniMarinos, 10);
sucCapFederal.ingreso(toaLisa, 10);
sucCapFederal.ingreso(cortCañamo, 10);
sucCapFederal.ingreso(mantRayaDesparejas, 10);
sucCapFederal.ingreso(secaPlatBamboo, 10);
sucCapFederal.ingreso(portMacBamboo, 10);
sucCapFederal.ingreso(espIrregular, 10);

//////////////////////////////////////////////////////////////////////
//////////////MOVIMENTO MERCADERIA DE CAPITAL A AVELLANEDA////////////

//////////////////////////////////////////////////////////////////////
/////////////////INGRESOS MERCADERIA AVELLANEDA//////////////////////
sucAvellaneda.ingreso(mantRayaDesparejas, 10);
sucAvellaneda.ingreso(secaPlatBamboo, 10);
sucAvellaneda.ingreso(portMacBamboo, 10);
sucAvellaneda.ingreso(espIrregular, 10);
//////////////////////////////////////////////////////////////////////
/////////////////VENTA DE MERCADERIA EN CAPITAL//////////////////////

sucCapFederal.venta(sabPrimavera, 5, 0);
sucCapFederal.venta(acAniMarinos, 5, 0);
sucCapFederal.venta(toaLisa, 5, 0);
sucCapFederal.venta(cortCañamo, 5, 0);
sucCapFederal.venta(mantRayaDesparejas, 5, 0);
sucCapFederal.venta(secaPlatBamboo, 5, 0);
sucCapFederal.venta(portMacBamboo, 5, 0);
sucCapFederal.venta(espIrregular, 5, 0);

//////////////////////////////////////////////////////////////////////
/////////////////INGRESO DE EMPLEADOS CAPITAL FEDERAL/////////////////

/////Ramiro////
sucCapFederal.agregarEmpleado(
  'Ramiro',
  'Medina,',
  23,
  48456984,
  'rmedina@gmail.com'
);
////Andrea////
sucCapFederal.agregarEmpleado(
  'Andrea',
  'Giugliotta',
  49,
  72851951,
  'agiugliotta@gmail.com'
);

////AGREGAR CLIENTES////
sucCapFederal.ingresarCliente(
  'Romina',
  'Rissiglione',
  '34',
  30124545,
  'romirichi21@gmail.com',
  'Buenos Aires'
);

//////////////////////////////////////////////////////////////////////
////////////////////////MONITOREO SUCURSALES/////////////////////////
////////////////////////////////////////////////////////////////////

sucCapFederal.verStock();
sucAvellaneda.filtro('categoria', 'baño');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////MANIPULACION DEL DOM/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////

//A traves de la constante selectElement accedemos al input type "select" el cual nos sirve para cambiar de sucursal en nuestro sitio.

const selectElement = document.getElementById('sucursalSelect');

//Luego le colocamos un eventListener del tipo "change" a nuestro input 'select'. Esto lo que hace
//es generar un evento cada vez que cambiamos (change) el selector (de capital fed a avellaneda etc) y para cada vez que esto suceda llama a una funcion que se encarga de generar etiquetas html, e incluso aplicarles una clase para asi mostrar los productos de las sucursales.

//La funcion primero que nada elimina el elemento padre en el cual se va a mostrar el producto.
//Cada vez que registre un cambio de seleccion, primero elimina el elemento. Luego pregunta si la seleccion es capital fed o avellaneda, y cuando es alguna de las dos, muestra la cantidad de elementos que sea nesesaria para mostrar todo el stock. SI SE VUELVE A CAMBIAR LA SUCURSAL, PRIMERO ELIMINA TODO Y REPITE EL PASO ETC.

selectElement.addEventListener('change', function () {
  //La constante selectedValue almacena el value (1, 2 o 3) de cada una de las etiquetas options, las cuales contienen las opciones "capital federal", "avellaneda" etc.

  const selectedValue = selectElement.value;

  //Si nos fijamos bien en el index, vamos a notar que la etiqueta padre que contiene toda la estructura del elemento que creamos para mostrar cada producto, recibe la clase ".produDisplay". De esta manera es que con el metodo querySelectorAll('.produDisplay') podemos acceder a todas las etiquetas hijas de este elemento e incluso al propio padre y almacenarlas en la constante "secciones" en formato de array.

  const secciones = document.querySelectorAll('.produDisplay');

  //Finalmente a este array "secciones" el cual contiene basicamente todo el elemento generado, le hacemos un forEach y asi vamos eliminando todos los elementos (etiquetas) que contiene. De esta manera eliminamos toda la seccion y sus elementos del DOM.

  secciones.forEach(function (seccion) {
    seccion.remove();
  });

  //Si el valor seleccionado es 1 (capital federal) se hace toda la estrucura html para cada uno de los productos en dicha sucursal.items.
  //Si el valor seleccionado es 2, se hace lo mismo pero con la sucursal de avellaneda

  let seleccionarSucursal = function (sucursal) {
    for (const key of sucursal.items) {
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

      izqAdentro.innerHTML = `<div class="left_child col-1">  ${key.id}</div>
                                <div class="left_child col-2">  ${key.nombre}</div>
                                <div class="left_child col-2">  ${key.codigo}</div>
                                <div class="left_child col-6">  ${key.descripcion}</div>`;

      derAdentro.innerHTML = `<div class="right_child col-6"> ${key.cantidad}</div>
                                <div class="right_child col-6"> ${key.vendido}</div>`;
    }
  };

  if (selectedValue === '1') {
    seleccionarSucursal(sucCapFederal);
  } else if (selectedValue === '2') {
    seleccionarSucursal(sucAvellaneda);
  }
});

// HACER UNA FUNCION QUE MUESTRE EN VALOR NUMBER LA CANTIDAD DE STOCK EN SUCURSAL
