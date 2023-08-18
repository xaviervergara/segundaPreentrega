let func = function (sucursal) {
  for (const key of sucursal.items) {
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

    derAdentro.innerHTML = `<div class="right_child col-6"> ${key.cantidad}</div>
                              <div class="right_child col-6"> ${key.vendido}</div>`;
  }
};
