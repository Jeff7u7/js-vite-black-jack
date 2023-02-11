/**
 * Determina el ganador 
 * @param {Array<String>} puntosJugadores 
 */
export const determinarGanador = (puntosJugadores) => {

    if (!puntosJugadores)
        throw new Error('Los puntos de los Jugadores es obligatorio');

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)) {
            alert('Nadie Gana :( ');
        } else if (puntosMinimos => 21 && puntosComputadora < puntosMinimos) {
            alert('Computadora Gana')
        } else if (puntosComputadora => 21) {
            alert('Jugador Gana :D');
        } else if (puntosComputadora === puntosMinimos) {
            alert('Empate');
        }
    }, 100);
}