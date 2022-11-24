/**
 * 
 * @param numUn Premier paramétre à entrer
 * @param numDeux Deuxième paramétre à entrer
 * @param operateur Opérateur à choisir
 * @returns opération mathématique en fonction de l'opérateur choisi
 */


const calcul = function(numUn: number, numDeux: number, operateur: string): number {
    return eval(numUn + operateur + numDeux)
}
console.log(calcul(10, 5, "*"));