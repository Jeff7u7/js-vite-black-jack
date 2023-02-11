import { pedirCarta, acumularPuntos, determinarGanador, crearCarta } from './index';
/**
 * Turno de la computadora
 * @param {Array<String>} deck 
 * @param {Array<String>} puntosJugadores 
 * @param {NodeListOf<HTMLElement>} puntosHTML 
 */
export const turnoComputadora = (deck, divCartasJugadores, puntosJugadores, puntosHTML) => {

    if (!deck)
        throw new Error('Deck Obligatorio');

    if (!puntosJugadores)
        throw new Error('puntosJugadores Obligatorio');

    if (!puntosHTML)
        throw new Error('puntosHTML Obligatorio');

    const [puntosMinimos] = puntosJugadores;
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = acumularPuntos(carta, puntosJugadores, puntosHTML, puntosJugadores.length - 1)
        crearCarta(carta, divCartasJugadores, puntosJugadores.length - 1)

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}