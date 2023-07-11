let numeroActual = 0;

const muestraNumeroActualEnElH1 = () => {
  const numeroTurnoH1 = document.getElementById("numero-turno");
  if (numeroTurnoH1 instanceof HTMLElement) {
    numeroTurnoH1.textContent = numeroActual.toString();
  }
};

const inicializaBotones = () => {
  const botonAtras = document.getElementById("atras");
  if (botonAtras instanceof HTMLButtonElement) {
    botonAtras.addEventListener("click", () => {
      numeroActual = numeroActual - 1;
      muestraNumeroActualEnElH1();
    });
  }
  const botonSiguiente = document.getElementById("siguiente");
  if (botonSiguiente instanceof HTMLButtonElement) {
    botonSiguiente.addEventListener("click", () => {
      numeroActual = numeroActual + 1;
      muestraNumeroActualEnElH1();
    });
  }

  const botonReset = document.getElementById("reset");
  if (botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", () => {
      numeroActual = 0;
      muestraNumeroActualEnElH1();
    });
  }

  const botonCambiar = document.getElementById("cambiar");
  if (botonCambiar instanceof HTMLButtonElement) {
    botonCambiar.addEventListener("click", () => {
      const numeroEspecificoInput = document.getElementById("numeroEspecifico");
      if (numeroEspecificoInput instanceof HTMLInputElement)
        numeroActual = parseInt(numeroEspecificoInput.value);
      muestraNumeroActualEnElH1();
    });
  }
};

muestraNumeroActualEnElH1();
inicializaBotones();
