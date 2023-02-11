/**
 * Esta parta me permite tomar una carta
 * @param {Array<String>} Deck del juego 
 * @returns {}- Una carta y el deck actual
 */
export const pedirCarta = (deck) => {

    if (!deck || deck === 0)
        throw new Error('El deck es obligatorio');

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}