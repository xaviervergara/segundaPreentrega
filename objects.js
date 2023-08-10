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

  // INGRESAR MERCADERIA
  ingreso(producto, cant) {
    this.stockTotal += cant;
    if (this.items.includes(producto)) {
      // console.log(`El producto ya ha sido ingresado`);
      this.items[this.items.indexOf(producto)].stock += cant; //si ya existe, solo agrega stock
    } else {
      this.items.push(producto); //agrega producto nuevo
      this.items[this.items.indexOf(producto)].stock += cant; //agrega la cantidad al stock
    }
  }

  //VENTA DE MERCADERIA
  venta(producto, cantidad, descuento) {
    if (this.items.includes(producto) == false) {
      console.log('No se encontro el producto');
    } else if (this.items.includes(producto)) {
      for (let element of this.items) {
        if (element == producto) {
          if (producto.stock <= 0) {
            console.log('sin stock');
          } else if (cantidad > producto.stock) {
            console.log(
              `error: stock insuficiente, el stock es de ${producto.stock}`
            );
          } else {
            descuento = producto.precio * (descuento / 100);
            producto.stock -= cantidad;
            producto.vendido += cantidad;
            this.stockTotal -= cantidad;
            this.ventaDia += (producto.precio - descuento) * cantidad;
          }
        }
      }
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
    this.modelo = info.modelo;
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
