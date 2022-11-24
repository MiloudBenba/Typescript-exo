/**
 * Fonction qui prend deux paramétres 
 * (prix de vente + cout de fabrication), et retourne la différence (bénéfice, perte).
 */

function benefice(coutFab:number, prixVente:number):string {
    if(coutFab > prixVente){
        return `Perte de ${coutFab - prixVente}`;
    } else if(coutFab < prixVente){
        return `Profit de ${prixVente - coutFab}`;
    } else {
        return `Ni profit, ni perte. Vive le benevolat !`;
    }
}

console.log(benefice(10, 15));