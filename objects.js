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

  //NUEVA FUNCION DE INGRESO DE MERCADERIA EN DESARROLLO
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
    if (!prodEnSucursal || prodEnSucursal.cantidad <= 0) {
      console.log('Sin stock');
    } else if (cantidad > prodEnSucursal.cantidad) {
      console.log(
        `Stock insuficiente. Stock actual ${prodEnSucursal.cantidad}`
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
  }

  //VER EL NUMBER CANTIDAD DE STOCK

  verCant(suc) {
    const check = this.stock.find((element) => element.sucursal == suc.nombre);
    if (check) {
      this.canti = check.cantidad;
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

// module.exports = {
//   Producto,
//   Sucursal,
//   Empleado,
//   Cliente,
// };

export { Sucursal, Producto, Empleado, Cliente };
