// let filtroPorStock = function (sucursal) {
//   sucursal.items.forEach((ele) => ele.agregarCant(sucursal));
//   const conStk = sucursal.items.filter((ele) => ele.cant > 500);

//   conStk.forEach((ele) => {
//     let seccion = document.createElement('section');
//     seccion.className = 'produDisplay';
//     document.body.append(seccion);
//     ///////
//     let contPrincipal = document.createElement('div');
//     contPrincipal.className = 'mainContainer row';
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

//     izqAdentro.innerHTML = `  <div class="left_child col-1">  ${ele.id}</div>
//                             <div class="left_child col-2">  ${ele.nombre}</div>
//                             <div class="left_child col-2">  ${ele.codigo}</div>
//                             <div class="left_child col-6">  ${ele.descripcion}</div>`;

//     derAdentro.innerHTML = `  <div class="right_child col-6"> ${ele.cant}</div>
//                             <div class="right_child col-6"> ${ele.vendido}</div>`;
//   });
// };

// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON    = JSON.stringify(producto1);

const prod = { nombre: 'gorra', precio: 23 };

const aJSON = JSON.stringify(prod);

localStorage.setItem('prod', aJSON);
