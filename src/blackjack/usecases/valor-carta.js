/**
 * Esta funcion Evalua el valor que tiene la carta
 * @param {String} carta sacada del deck 
 * @returns {integer}Valor de la carta 
 */
export const valorCarta = (carta) => {

    if (!carta || carta === 0) {
        throw new Error('la carta es Obligatoria');
    }
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        ((valor === 'A') ? 11 : 10)
        : valor * 1;
}