const inicializaBotones = () => {
  const botonAtras = document.getElementById("atras");
  if (botonAtras instanceof HTMLButtonElement) {
    botonAtras.addEventListener("click", () => {
      console.log("Atras pulsado");
    });
  }
};

inicializaBotones();

/*
function numero() {
  const siguiente = document.getElementById("siguiente");
  const atras = document.getElementById("atras");

  if (siguiente) {
    siguiente.addEventListener("click", () => {
      const numeroTurno = document.getElementById("numero-turno");
      console.log(numeroTurno);
      
      if(numeroTurno instanceof ) {
        let valorTurno = parseInt(numeroTurno.textContent);
        valorTurno += 1;
        numeroTurno.textContent = valorTurno.toString();  
      }
      
    });
  }

  if (atras) {
    atras.addEventListener("click", () => {});
  }
}
*/
