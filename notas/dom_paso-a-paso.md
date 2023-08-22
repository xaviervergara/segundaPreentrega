# Funcionamiento del DOM paso a paso

## Crear estructura para los productos en funcion del select de sucursal

### Paso numero 1

```js
const selectElement = document.getElementById('sucursalSelect');

//A traves de la constante selectElement accedemos al input type "select" el cual nos sirve para cambiar de sucursal en nuestro sitio.
```

### Paso numero 2

```js
let seleccionarSucursal = function (sucursal) {
  for (const key of sucursal.items) {
    //llama a la funcion verCant a cada producto
    key.agregarCant(sucursal);
    //Se crea la estructura de bloque contenedora
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

    derAdentro.innerHTML = `<div class="right_child col-6"> ${key.canti}</div>
                              <div class="right_child col-6"> ${key.vendido}</div>`;
  }
};

//Declaramos esta función que recibe un parametro para poner la sucursal, sea cual sea. Esta funcion recorre los productos ALMACENADOS EN LA SUCURSAL, y para cada uno de estos, crea una estructura de etiquetas html y le agrega clases definidas en el css para mostrar algunas de sus propiedades en el DOM
```

### Paso numero 3

```js
selectElement.addEventListener('change', function () {
  const selectedValue = selectElement.value;

  const secciones = document.querySelectorAll('.produDisplay');

  secciones.forEach(function (seccion) {
    seccion.remove();
  });

  if (selectedValue === '1') {
    seleccionarSucursal(sucCapFederal);
  } else if (selectedValue === '2') {
    seleccionarSucursal(sucAvellaneda);
  }
});

//Le agregamos un EventListener al input select (selectElement),que escucha los cambios de dicha etiqueta. Estos cambios se dan al cambiar la seleccion de las distintas sucursales disponibles.Para cada "change" aplicamos una funcion. En el proximo paso, desmenuzamos esta función paso por paso.
```

### Paso numero 4

#### selectedValue = value del input select (1,2,3)

```js
const selectedValue = selectElement.value;

//Con esta linea declaramos una constante que va a almacenar el value (1,2,3) del input select, es decir, el input select tiene 3 opciones en este caso, las cuales tienen un valor diferente para identificarlas. Cada una de estas opciones representan a las sucursales, ej: 1- Capital, 2- Avellaneda. En definitiva, selectedValue va a tener un valor numerico de 1 a 3
```

#### secciones = clase .produDisplay y todos sus hijos

```js
const secciones = document.querySelectorAll('.produDisplay');

//Aqui almacenamos (en formato de array) toda la clase .produDisplay y sus hijos la cual es el main container de toda la estructura donde se muestran los productos en el inventario.
```

#### Remove() para limpiar las etiquetas cada vez que hay un change

```js
secciones.forEach(function (seccion) {
  seccion.remove();
});

//Cada vez que haya un change en el input select, es decir, cada vez que se elija una sucursal distinta, vamos a recorrer el array secciones, etiqueta por etiqueta, y las vamos a ir eliminando una por una, para asi limpiar los datos/productos de la sucursal anterior y evitar que se acumulen productos que no pertenecen a la sucursal que estamos visitando
```

#### Dependiendo del value mostrar productos de determinada sucursal

```js
if (selectedValue === '1') {
  seleccionarSucursal(sucCapFederal);
} else if (selectedValue === '2') {
  seleccionarSucursal(sucAvellaneda);
}

//Finalmente con un condicional vamos a preguntar: si el valor seleccionado es igual a 1 (Sucursal de capital), vamos a llamar a la funcion de creado de etiquetas y le vamos a pasar como parametro la sucursal que corresponde.
//En el caso de que el value sea 2 (Avellaneda) llamamos a la funcion, y le pasamos como parametro la sucursal de Avellaneda
```
