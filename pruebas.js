////////////////////////////
//Funcion cambio de sucursal ORIGINAL EN DESUSO
// function seleccionarSucursal(sucursal) {
//   const theme = localStorage.getItem('theme');
//   const containerClass =
//     theme === 'dark' ? 'mainContainer' : 'lightMainDinamico';

//   //Agregar cantidad a la prop de cada producto
//   sucursal.items.forEach((ele) => ele.agregarCant(sucursal));

//   for (const key of sucursal.items) {
//     //Se crea la estructura de bloque contenedora
//     let seccion = document.createElement('section');
//     seccion.className = 'produDisplay';
//     document.body.append(seccion);
//     ///////
//     let contPrincipal = document.createElement('div');
//     // contPrincipal.className = `${containerClass} row`;
//     contPrincipal.classList.add(containerClass, 'mainContainer', 'row');
//     seccion.appendChild(contPrincipal);
//     //////
//     let contIzquierda = document.createElement('div');
//     contIzquierda.className = 'leftContainer col-8';
//     contPrincipal.appendChild(contIzquierda);
//     // ADENTRO
//     let izqAdentro = document.createElement('div');
//     izqAdentro.className = 'leftInside row';
//     contIzquierda.appendChild(izqAdentro);

//     //////
//     let contDerecha = document.createElement('div');
//     contDerecha.className = 'rightContainer col-4';
//     contPrincipal.appendChild(contDerecha);
//     // ADENTRO
//     let derAdentro = document.createElement('div');
//     derAdentro.className = 'rightInside row';
//     contDerecha.appendChild(derAdentro);

//     izqAdentro.innerHTML = `  <div class="left_child col-1">  ${key.id}</div>
//                               <div class="left_child col-2">  ${key.nombre}</div>
//                               <div class="left_child col-2">  ${key.codigo}</div>
//                               <div class="left_child col-6">  ${key.descripcion}</div>`;

//     derAdentro.innerHTML = `  <div class="right_child col-6"> ${key.cant}</div>
//                               <div class="right_child col-6"> ${key.vendido}</div>`;
//   }
// }
