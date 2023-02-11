/**
 * Dibuja la carta
 * @param {String} carta 
 * @param {NodeListOf<HTMLElement>} divCartasJugadores 
 * @param {Number} turno 
 */
export const crearCarta = (carta, divCartasJugadores, turno) => {
    console.log({turno});
    if (!carta)
        throw new Error('carta Obligatoria');
    if (!divCartasJugadores)
        throw new Error('divCartasJugadores Obligatoria');
    if (!turno === 0)
        throw new Error('turno Obligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}