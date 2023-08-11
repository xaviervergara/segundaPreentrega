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

  verStock(sucursal) {
    sucursal.items.forEach((element) => console.log(element));
  }

  //NUEVA FUNCION DE INGRESO DE MERCADERIA EN DESARROLLO
  //ingresa stock en la sucursal, y en el producto mismo.

  ingreso(producto, cant, suc) {
    this.stockTotal += cant;

    //si el objeto que contiene los datos del stock ya existe dentro del producto
    //productoStock es igual a este objeto existente
    const productoStock = producto.stock.find(
      (element) =>
        element.nombre === producto.nombre && element.sucursal === suc.nombre
    );
    //si efectivamente el producto ya existe, solo suma la cantidad dentro
    //del stock del producto
    if (productoStock) {
      productoStock.cantidad += cant;
    }

    //se itera dentro del stock de la sucursal buscando si el producto ya existe
    const productoExistente = suc.items.find(
      (element) => element.nombre === producto.nombre
    );

    //si exixste, solo actualiza la cantidad
    if (productoExistente) {
      productoExistente.cantidad += cant;
    } else {
      // si el producto no existe dentro de la sucursal, por ende tampoco
      //existirá el stock dentro del producto, porque este stock registra
      //las cantidades con sus respectivas sucursales.
      //Por lo tanto, se lo agrega tanto al stock de la sucursal, como
      //al stock del producto
      suc.items.push({ nombre: producto.nombre, cantidad: cant });
      producto.stock.push({
        sucursal: suc.nombre,
        nombre: producto.nombre,
        cantidad: cant,
      });
    }
  }

  //NUEVA FUNCION DE VENTA DE MERCADERIA EN DESARROLLO
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
    if (!prodEnSucursal || prodEnSucursal.cantidad <= 0) {
      console.log('Sin stock');
    } else if (cantidad > prodEnSucursal.cantidad) {
      console.log(
        `Stock insuficiente. Stock actual ${prodEnSucursal.cantidad}`
      );
    } else {
      descuento = producto.precio * (descuento / 100);
      prodEnSucursal.cantidad -= cantidad;
      stockEnProducto.cantidad -= cantidad;
      producto.vendido += cantidad;
      this.stockTotal -= cantidad;
      this.ventaDia += (producto.precio - descuento) * cantidad;
    }
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
}

//CONSTRUCTOR PARA PRODUCTOS

class Producto {
  constructor(info) {
    this.articulo = info.articulo;
    this.codigo = info.codigo;
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.medida = info.medida;
    this.categoria = info.categoria;
    this.color = info.color;
    this.composicion = info.composicion;
    this.stock = info.stock;
    this.vendido = info.vendido;
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

module.exports = {
  Producto,
  Sucursal,
  Empleado,
  Cliente,
};
