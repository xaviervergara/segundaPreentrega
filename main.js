const { Producto, Sucursal, Empleado, Cliente } = require('./objects');

//INSTANCIAS PRODUCTOS

const sabPrimavera = new Producto({
  articulo: 'sabanas',
  codigo: '10113T08278%ME',
  modelo: 'Primavera',
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
  modelo: 'Liso',
  precio: 8792,
  medida: '70 x 140 cm / 44 x 80 cm',
  categoria: 'baño',
  color: 'KN',
  composicion: '100% algodon',
  stock: 0,
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

//INSTANCIAS DE EMPLEADOS

// (SE AGREGAN CON METODO AGREGARempleado DESDE LA SUCURSAL)

//INSTANCIAS DE CLIENTES

// (SE AGREGAN CON METODO AGREGARcliente DESDE LA SUCURSAL)

///////////////////////////////////////////////
/////////////////EJECUCIONES///////////////////
///////////////////////////////////////////////

/////INGRESOS MERCADERIA CAPITAL FEDERAL//////

sucCapFederal.ingreso(toaLisa, 100);
sucCapFederal.ingreso(sabPrimavera, 100);

////VENTAS MERCADERIA////

sucCapFederal.venta(sabPrimavera, 50, 0);
sucCapFederal.venta(toaLisa, 20, 0);

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

console.log(sucCapFederal);
