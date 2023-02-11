import { valorCarta } from "./valor-carta";
/**
 * Turno:0 primer jugador y el ultimo sera la computadora
 * @param {String} carta 
 * @param {Array<String>} puntosJugadores 
 * @param {NodeListOf<HTMLElement>} puntosHTML 
 * @param {Number} turno 
 * @returns {Number} valor de los puntos actualizados
 */
export const acumularPuntos = (carta, puntosJugadores, puntosHTML, turno) => {

    if (!carta)
        throw new Error('Carta Obligatorio');

    if (!puntosJugadores)
        throw new Error('puntos de los Jugadores Obligatorio');

    if (!puntosHTML)
        throw new Error('puntos HTML Obligatorios');

    console.log(puntosJugadores[turno]);

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}