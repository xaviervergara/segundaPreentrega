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

//DARK-MODE/////////////////////////////////////
// const sunButton = document.getElementById('sunButton');
// sunButton.addEventListener('click', toggleTheme);

// // Obtener el tema actual desde el Local Storage
// const currentTheme = localStorage.getItem('theme');

// // Aplicar el tema actual al cargar la página
// if (currentTheme) {
//   applyTheme(currentTheme);
// }

// function toggleTheme() {
//   const currentTheme = localStorage.getItem('theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

//   applyTheme(newTheme);
//   localStorage.setItem('theme', newTheme);
// }

// function applyTheme(theme) {
//   if (theme === 'dark') {
//     document.documentElement.classList.add('darkMode');
//   } else {
//     document.documentElement.classList.remove('darkMode');
//   }
// }
////////////////////////////
function aplicarFiltro(sucursal, filtro) {
  const theme = localStorage.getItem('theme');
  const containerClass =
    theme === 'dark' ? 'mainContainer' : 'lightMainDinamico';

  //Agregar cantidad a la prop de cada producto
  sucursal.items.forEach((ele) => ele.agregarCant(sucursal));

  for (const key of filtro) {
    //Se crea la estructura de bloque contenedora
    let seccion = document.createElement('section');
    seccion.className = 'produDisplay';
    document.body.append(seccion);
    ///////
    let contPrincipal = document.createElement('div');
    // contPrincipal.className = `${containerClass} row`;
    contPrincipal.classList.add(containerClass, 'mainContainer', 'row');
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

    izqAdentro.innerHTML = `  <div class="left_child col-1">  ${key.id}</div>
                                <div class="left_child col-2">  ${key.nombre}</div>
                                <div class="left_child col-2">  ${key.codigo}</div>
                                <div class="left_child col-6">  ${key.descripcion}</div>`;

    derAdentro.innerHTML = `  <div class="right_child col-6"> ${key.cant}</div>
                                <div class="right_child col-6"> ${key.vendido}</div>`;
  }
}
