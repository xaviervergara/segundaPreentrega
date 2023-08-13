// const { Producto, Sucursal, Empleado, Cliente } = require('./objects');
import { Sucursal, Producto, Empleado, Cliente } from './objects.js';

///////////////////////////////////////////////////////////////////
///////////////////INSTANCIAS DE PRODUCTOS////////////////////////
/////////////////////////////////////////////////////////////////

////////////////////////////////
////CATEGORIA: ROPA DE CAMA////
//////////////////////////////

const sabPrimavera = new Producto({
  articulo: 'sabanas',
  codigo: '10113T08278%ME',
  nombre: 'sabPrimavera',
  precio: 33000,
  medida: 'twin',
  categoria: 'ropa de cama',
  color: 'me',
  composicion: '100% algodon',
  stock: [],
  vendido: 0,
});

const acAniMarinos = new Producto({
  articulo: 'acolchados',
  codigo: '20021U08227%CC',
  nombre: 'acAniMarinos',
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
  articulo: 'toallas',
  codigo: '30012E76394%KN',
  nombre: 'toaLisa',
  precio: 8792,
  medida: '70 x 140 cm / 44 x 80 cm',
  categoria: 'baño',
  color: 'kn',
  composicion: '100% algodon',
  stock: [],
  vendido: 0,
});

const cortCañamo = new Producto({
  articulo: 'cortinas',
  codigo: '50201Z08151%KN',
  nombre: 'cortCañamo',
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
  articulo: 'manteles',
  codigo: '51311G08136%A',
  nombre: 'mantRayaDesparejas',
  precio: 10392,
  medida: '185 x 185 cm',
  categoria: 'cocina',
  color: 'a',
  composicion: 'poliester cuerina',
  stock: [],
  vendido: 0,
});

const secaPlatBamboo = new Producto({
  articulo: 'seca platos',
  codigo: '86001Z60557%KN',
  nombre: 'secaPlatBamboo',
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
  articulo: 'porta macetas',
  codigo: '86061U00033%KN',
  nombre: 'portMacBamboo',
  precio: 7499,
  medida: '15 x 15 x 15 cm',
  categoria: 'deco',
  color: 'kn',
  composicion: 'bamboo',
  stock: [],
  vendido: 0,
});

const espIrregular = new Producto({
  articulo: 'espejos',
  codigo: '86061U00108%FD',
  nombre: 'espIrregular',
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

sucCapFederal.movimiento(sabPrimavera, 5, sucCapFederal, sucAvellaneda);
sucCapFederal.movimiento(acAniMarinos, 5, sucCapFederal, sucAvellaneda);
sucCapFederal.movimiento(toaLisa, 5, sucCapFederal, sucAvellaneda);
sucCapFederal.movimiento(cortCañamo, 5, sucCapFederal, sucAvellaneda);
sucCapFederal.movimiento(mantRayaDesparejas, 5, sucCapFederal, sucAvellaneda);
sucCapFederal.movimiento(secaPlatBamboo, 5, sucCapFederal, sucAvellaneda);
sucCapFederal.movimiento(portMacBamboo, 5, sucCapFederal, sucAvellaneda);
sucCapFederal.movimiento(espIrregular, 5, sucCapFederal, sucAvellaneda);

//////////////////////////////////////////////////////////////////////
/////////////////INGRESOS MERCADERIA AVELLANEDA//////////////////////

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

///////////////////////////////////////////////
/////////////FUNCIONES A INCORPORAR///////////

//ARMAR FILTROS DE BUSQUEDA SUEGUN CATEGORIAS, CODIGOS, ARTICULOS Y SI SE QUIERE, POR PRECIO (MAYOR A, MENOR QUE BLA BLA)
//**CREAR UN OBJETO CLIENTE, PARA CUANDO SE HAGA UNA VENTA, DARLE ENTIDAD
//**AGREGAR UNA FUNCION PROPIA DEL CLIENTE QUE INDIQUE EL FINANCIAMIENTO DEL PRODUCTO
//**LA SUCURSAL DEBERA TENER UN ARRAY CON EL HISTORIAL DE CLIENTES?
//**CREAR EMPLEADOS PARA ASIGNARLES LAS VENTAS Y CALCULAR COMISION.(LOS EMPLEADOS METERLOS EN LAS SUCURSALES DE ALGUNA MANERA)
//**QUE LAS VENTAS SE PUEDAN INGRESAR COMO PAR CLAVE VALOR (ITEM: CANTIDAD)
//Y DE ESTA MANERA SEA MAS PROLIJA LA VENTA EN CODIGO
//**QUE LOS INGRESOS SE PUEDAN INGRESAR TAL COMO LAS VENTAS, (CLAVE:VALOR),
//PARA QUE QUEDE TODO MAS PROLIJO
//**LOS CLIENTES DEBERIAN PODER DEVOLVER PRODUCTOS A LA SUCURSAL
//**MOVIMIENTOS DE SUCURSAL A SUCURSAL + HISTORIAL DE MOVIMIENTOS?
//PARA LA FUNCION DE AGREGAR CLIENTE, CHEQUEAR DESDE DNI SI EXISTE PARA NO CREARLO DOS VECES!
//**PENSAR EN EL FLUJO DEL PROGRAMA: PRIMERO INGRESA MERCADERÍA, LUEGO INGRESAN LOS EMPLEADOS, LUEGO
//EL CLIENTE YA PUEDE COMPRAR. DE ALGUNA MANERA DESDE LA SUCURSAL SE DEBE PODER BUSCAR UN PRODUCTO Y PODER VER LAS CANTIDADES DE LAS OTRAS SUCURSALES. SI NO HAY EN EL LOCAL,
//SE DEBE PODER VENDER EL PRODUCTO DE LA OTRA SUCURSAL
//** LAMENTABLEMENTE EL CLIENTE SE TIENE QUE PODER CREAR DESDE LA FUNCION DE VENTA. HAY QUE INGENIARSELAS
//PARA QUE LA VENTA DE UN CLIENTE SE PUEDA INGRESAR TIPO CARRITO, OSEA, QUE SE PUEDAN INGRESAR VARIOS PRODUCTOS DE UNA VEZ,
//DEBIERA SER QUIZA UN ARRAY CON OBJETOS, COMO LO ES EL OBJETO ITEMS QUE ALMACENA EL STOCK.
//**CUANDO EL EMPLEADO ATIENDE AL CLIENTE, LLENA UN CARRITO CON TODOS LOS PRODUCTOS
//CUANDO SE FINALIZA LA ATENCIÓN DEL CLIENTE, EL EMPLEADO MANDA A LA CAJA ESE CARRITO
//DESDE LA CAJA SE INGRESA EL CLIENTE, Y SE ENLAZA CON ESE CARRITO.
//CLIENTE ACUMULA PUNTOS?
//AGREGAR COLORES LITERALES

//IMPORTANTE////IMPORTANTE////IMPORTANTE////IMPORTANTE////IMPORTANTE////IMPORTANTE////IMPORTANTE////IMPORTANTE////IMPORTANTE//
//CHEQUEAR USO INNECESARIO DE PARAMETROS SUCURSAL, HACER USO DEL THIS.NOMBRE DE LA SUCURSAL PARA EVITAR LA REDUNDANCIA

//LA SIGUIENTE FUNCIONALIDAD ES RESOLVER LA COMPRA CON UN CARRITO, ENTENDER DE CUAL ES LA MANERA MAS FUNCIONAL
//DESDE EL PUNTO DE VISTA DEL CLIENTE QUIZAS Y QUE TENGA SENTIDO EN GENERAL PARA EL SISTEMA
