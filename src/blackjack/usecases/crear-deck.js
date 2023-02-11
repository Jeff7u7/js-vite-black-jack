import _ from 'underscore';
/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tipos 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} Retorna un deck con cartas 
 */
export const crearDeck = (tipos, tiposEspeciales) => {

    if (!tipos || tipos === 0)
        throw new Error('tipos de Carta es Obligatorio');

    if (!tiposEspeciales || tiposEspeciales === 0)
        throw new Error('tipos Especiales es Obligatorio');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);;
}