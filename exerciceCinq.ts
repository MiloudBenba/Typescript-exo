/**
 * Fonction qui retourne le plus nombre des paramétres (illimités) entrés dans la fonction
 */

 function laLoiDuPlusGros(...num: number[]):number {
    return Math.max(...num);
}

console.log(laLoiDuPlusGros(4, 12, 9, 10, 225, 645, 140));