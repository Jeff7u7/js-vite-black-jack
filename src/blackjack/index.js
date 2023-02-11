import _ from 'underscore';
import { pedirCarta, crearDeck, turnoComputadora, acumularPuntos, crearCarta } from './usecases';

//Variables
let deck = [], puntosJugadores = [];

const tipos = ['C', 'D', 'H', 'S'],
  tiposEspeciales = ['A', 'J', 'Q', 'K'];

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo');

//Referencia a clases(css) y componentes HTML
const divCartasJugadores = document.querySelectorAll('.divCartas'),
  puntosHTML = document.querySelectorAll('small');

//Funcion Principal que permite al juego iniciar corrrectamente
const inicializarJuego = (numJugadores = 2) => {

  deck = crearDeck(tipos, tiposEspeciales);
  console.log(deck);
  puntosJugadores = [];

  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach(elem => elem.innerText = 0);
  divCartasJugadores.forEach(elem => elem.innerHTML = '');

  btnPedir.disabled = false;
  btnDetener.disabled = false;

}

//Eventos
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, puntosJugadores, puntosHTML, 0);

  crearCarta(carta, divCartasJugadores, 0);

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(deck, divCartasJugadores, puntosJugadores, puntosHTML);

  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(deck, divCartasJugadores, puntosJugadores, puntosHTML);
  }
});

btnDetener.addEventListener('click', () => {

  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(deck, divCartasJugadores, puntosJugadores, puntosHTML);

});

btnNuevo.addEventListener('click', () => {

  console.clear();
  inicializarJuego();

});












