//CONSTRUCTOR PARA SUCURSALES

////////////////////////////////////////////////
////////////CONSTRUCTOR SUCURSAL CABA//////////
//////////////////////////////////////////////

class Sucursal {
  constructor(info) {
    this.nombre = info.nombre;
    this.stockTotal = info.stockTotal;
    this.ventaDia = info.ventaDia;
    this.items = info.items;
    this.empleados = info.empleados;
    this.cliente = info.cliente;
  }

  //VER EL STOCK DE MERCADERIA

  verStock() {
    this.items.forEach((element) => console.log(element));
  }

  //FUNCION DE INGRESO DE MERCADERIA EN DESARROLLO
  //ingresa stock en la sucursal, y en el producto mismo.

  ingreso(producto, cant) {
    this.stockTotal += cant;

    const productoStock = producto.stock.find(
      (element) =>
        element.nombre === producto.nombre && element.sucursal === this.nombre
    );

    if (productoStock) {
      productoStock.cantidad += cant;
    }

    //se itera dentro del stock de la sucursal buscando si el producto ya existe
    const productoExistente = this.items.find(
      (element) => element.nombre === producto.nombre
    );

    if (!productoExistente) {
      this.items.push(producto);
      producto.stock.push({
        sucursal: this.nombre,
        nombre: producto.nombre,
        cantidad: cant,
      });
    }
  }

  //NUEVA FUNCION DE VENTA DE MERCADERIA EN DESARROLLO (se deben poder ingresar todos los productos que uno quiera)
  venta(producto, cantidad, descuento) {
    //Stock en sucursal
    const prodEnSucursal = this.items.find(
      (elemento) => elemento.nombre == producto.nombre
    );
    //Stock en producto
    const stockEnProducto = producto.stock.find(
      (element) =>
        element.nombre === producto.nombre && element.sucursal === this.nombre
    );
    if (!prodEnSucursal || stockEnProducto.cantidad <= 0) {
      console.log('Sin stock');
    } else if (cantidad > stockEnProducto.cantidad) {
      console.log(
        `Stock insuficiente. Stock actual ${stockEnProducto.cantidad}`
      );
    } else {
      descuento = producto.precio * (descuento / 100);
      stockEnProducto.cantidad -= cantidad;
      producto.vendido += cantidad;
      this.stockTotal -= cantidad;
      this.ventaDia += (producto.precio - descuento) * cantidad;
    }
  }

  //FUNCION MOVIMIENTOS DE MERCADERIA

  movimiento(producto, cantidad, sucursalOrigen, sucursalDestino) {
    //Rastramos la sucursal donde se encuentra el proucto (origen) (Solo el prod lleva este registro)
    //(Las sucursales solo stockean el objeto producto entero con todas sus propiedades, entre ellas, este registro)
    const stkOrigen = producto.stock.find(
      (element) =>
        element.nombre == producto.nombre &&
        element.sucursal == sucursalOrigen.nombre
    );
    //Cuando ya tenemos la sucursal desde donde queremos sacar el producto, le restamos la cantidad
    //deseada al mismo, PERO, si la cantidad que queremos sacar es mayor a la que tiene el producto
    //tiramos un error de stock insuficiente. De lo contrario continuamos la ejecucion
    if (stkOrigen) {
      if (stkOrigen.cantidad < cantidad) {
        console.log(`Stock insuficiente. El stock es de ${stkOrigen.cantidad}`);
      } else {
        stkOrigen.cantidad -= cantidad;
        //Esta constante va a rastrear la sucursal de destino (EN EL PRODUCTO)
        const sktDestino = producto.stock.find(
          (element) =>
            element.nombre == producto.nombre &&
            element.sucursal == sucursalDestino.nombre
        );
        //Una vez que la encontramos, agregamos la cantidad
        if (sktDestino) {
          sktDestino.cantidad += cantidad;
        } //SI EL PRODUCTO NO FUE NUNCA INGRESADO, SE DEBE INGRESAR EN LA SUCURSAL COMO ITEM Y EN EL STOCK PROPIO
        //DEL PRODUCTO, CON SUCURSAL Y TODO
        else {
          sucursalDestino.items.push(producto);
          producto.stock.push({
            sucursal: sucursalDestino.nombre,
            nombre: producto.nombre,
            cantidad: cantidad,
          });
        }
      }
    } //else no se encontro el producto?? osea, no hubo un ingreso del prodcuto en el stock
    //de la suc origen
  }

  //AGREGAR EMPLEADO
  agregarEmpleado(nombre, apellido, edad, dni, email) {
    const empleado = new Empleado({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      dni: dni,
      email: email,
      ventas: null,
      cantArtVendidos: null,
      comision: null,
    });
    this.empleados.push(empleado);
  }

  //INGRESAR CLIENTE
  ingresarCliente(nombre, apellido, edad, dni, email, ciudad) {
    const cliente = new Cliente({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      dni: dni,
      email: email,
      ciudad: ciudad,
    });

    this.cliente.push(cliente);
  }

  ////////////////FILTRO/////////////////

  filtro(propiedades, busqueda) {
    const filter = this.items.filter(
      (element) => element[propiedades] == busqueda
    );
    if (filter.length == 0) {
      console.log('No se encontró el producto.');
    } else {
      console.log(filter);
    }
  }
}

//CONSTRUCTOR PARA PRODUCTOS

class Producto {
  constructor(info) {
    this.id = info.id;
    this.articulo = info.articulo;
    this.codigo = info.codigo;
    this.nombre = info.nombre;
    this.descripcion = info.descripcion;
    this.precio = info.precio;
    this.medida = info.medida;
    this.categoria = info.categoria;
    this.color = info.color;
    this.composicion = info.composicion;
    this.stock = info.stock;
    this.vendido = info.vendido;
    this.cant = info.cant;
  }

  //VER EL NUMBER CANTIDAD DE STOCK

  agregarCant(suc) {
    const check = this.stock.find((element) => element.sucursal == suc.nombre);
    if (check) {
      this.cant = check.cantidad;
    }
  }
}

//CONSTRUCTOR PARA EMPLEADOS

class Empleado {
  constructor(info) {
    this.nombre = info.nombre;
    this.apellido = info.apellido;
    this.edad = info.edad;
    this.dni = info.dni;
    this.email = info.email;
    this.ventas = info.ventas;
    this.cantArtVendidos = info.cantArtVendidos;
    this.comision = info.comision;
  }
}

//CONSTRUCTOR PARA CLIENTES

class Cliente {
  constructor(info) {
    this.nombre = info.nombre;
    this.apellido = info.apellido;
    this.edad = info.edad;
    this.dni = info.dni;
    this.email = info.email;
    this.ciudad = info.ciudad;
  }
}

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
  cant: 0,
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
  cant: 0,
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
  cant: 0,
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
  cant: 0,
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
  cant: 0,
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
  cant: 0,
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
  cant: 0,
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
  cant: 0,
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

//////////////////////////////////////////////////////////////////////
/////////////////INGRESO DE MERCADERIA CAPITAL FEDERAL////////////////

sucCapFederal.ingreso(sabPrimavera, 0);
sucCapFederal.ingreso(acAniMarinos, 0);
sucCapFederal.ingreso(toaLisa, 0);
sucCapFederal.ingreso(cortCañamo, 0);
sucCapFederal.ingreso(mantRayaDesparejas, 10);
sucCapFederal.ingreso(secaPlatBamboo, 10);
sucCapFederal.ingreso(portMacBamboo, 10);
sucCapFederal.ingreso(espIrregular, 10);

//////////////////////////////////////////////////////////////////////
//////////////MOVIMENTO MERCADERIA DE CAPITAL A AVELLANEDA////////////

//////////////////////////////////////////////////////////////////////
/////////////////INGRESOS MERCADERIA AVELLANEDA//////////////////////
sucAvellaneda.ingreso(mantRayaDesparejas, 5);
sucAvellaneda.ingreso(secaPlatBamboo, 5);
sucAvellaneda.ingreso(portMacBamboo, 0);
sucAvellaneda.ingreso(espIrregular, 0);

//////////////////////////////////////////////////////////////////////
/////////////////VENTA DE MERCADERIA EN CAPITAL//////////////////////

// sucCapFederal.venta(sabPrimavera, 34, 0);
// sucCapFederal.venta(acAniMarinos, 234, 0);
// sucCapFederal.venta(toaLisa, 32, 0);
// sucCapFederal.venta(cortCañamo, 123, 0);
// sucCapFederal.venta(mantRayaDesparejas, 44, 0);
// sucCapFederal.venta(secaPlatBamboo, 125, 0);
// sucCapFederal.venta(portMacBamboo, 522, 0);
// sucCapFederal.venta(espIrregular, 440, 0);

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
// sabPrimavera.verCant(sucCapFederal);
// sucCapFederal.verStock();
// sucAvellaneda.filtro('categoria', 'baño');

// module.exports = {
//   Producto,
//   Sucursal,
//   Empleado,
//   Cliente,
// };

const alertaPersonalizada = function (mensaje) {
  return {
    title: mensaje,
    width: '20%',
    height: '20%',
    icon: 'warning',
    background: '#ffad4fb4',
    toast: true,
    position: 'top-end',
    timer: '2000',
    timerProgressBar: true,
    customClass: {
      icon: 'icono-popUp',
      title: 'title-popUp',
      closeButton: 'button-popUp',
      confirmButton: 'confirm-popUp',
    },
  };
};

// export { Sucursal, Producto, Empleado, Cliente }; esta es la ultima
export {
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
  // swalConfig,
  alertaPersonalizada,
};
