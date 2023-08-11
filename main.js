const { Producto, Sucursal, Empleado, Cliente } = require('./objects');

//INSTANCIAS PRODUCTOS

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

const toaLisa = new Producto({
  articulo: 'toallas',
  codigo: '30012E76394%KN',
  nombre: 'toaLisa',
  precio: 8792,
  medida: '70 x 140 cm / 44 x 80 cm',
  categoria: 'baño',
  color: 'KN',
  composicion: '100% algodon',
  stock: [],
  vendido: 0,
});

//INSTANCIAS DE SUCURSALES

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

//INSTANCIAS DE EMPLEADOS

// (SE AGREGAN CON METODO AGREGARempleado DESDE LA SUCURSAL)

//INSTANCIAS DE CLIENTES

// (SE AGREGAN CON METODO AGREGARcliente DESDE LA SUCURSAL)

///////////////////////////////////////////////
/////////////////EJECUCIONES///////////////////
///////////////////////////////////////////////

/////INGRESOS MERCADERIA CAPITAL FEDERAL//////

//sucCapFederal.ingreso(toaLisa, 100, 'capital');
sucAvellaneda.ingreso(toaLisa, 100, sucAvellaneda);
sucCapFederal.ingreso(toaLisa, 100, sucCapFederal);
sucAvellaneda.venta(toaLisa, 100, 0);
sucAvellaneda.venta(toaLisa, 1, 0);

console.log(toaLisa);
console.log(sucAvellaneda);

// sucCapFederal.ingreso(toaLisa, 100);

////////INGRESOS MERCADERIA AVELLANEDA////////

////VENTAS MERCADERIA////

// sucCapFederal.venta(sabPrimavera, 50, 50);
// sucCapFederal.venta(toaLisa, 20, 0);

////AGREGAR EMPLEADOS CAPITALFEDERAL////
//ramiro
sucCapFederal.agregarEmpleado(
  'Ramiro',
  'Medina,',
  23,
  48456984,
  'rmedina@gmail.com'
);
//andrea
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

////MONITOREO SUCURSALES////

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
//AGREGAR COLORES LITERALES, CHEQUEAR EL PDF DE COLORES BLA BLA
//
//
//
//RECORRER EL STOCK DEL ITEM CON UN FOR EACH
//SI LA SUCURSAL COINCIDE, AGREGAR CANTIDAD
//A ESA SUCURSAL (SI ELEMENTO.SUCURSAL == SUC) ELEMENTO.CANTIDAD += CANT

//QUIZAS INSTANCIANDO LOS OBJETOS CON CONST, LLENAMOS EL ARRAY DE VARIABLES Y SE PUEDE METER UN GRAN INCLUDES(VARIABLE)
//DESPUES PARA VER EL STOCK SE HACE UNA FUNCION ACORDE Y CHAU
//EL OBJETO EN CUESTION SERIA {SUCURSAL:ASDASD, CANTIDAD:123}
