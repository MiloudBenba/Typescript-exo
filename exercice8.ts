/**
 * Fonction qui affiche une pyramique miroir en utilisant deux boucles for.
 */
function pyramide(nombre: number): void {
    for (let index = 1; index <= nombre; index++) {   
       let ligne = '*'.repeat(index);
       console.log(ligne);
    }
    for (let index = nombre; index >= 1; index--) {   
        let ligne = '*'.repeat(index);
        console.log(ligne);
     }
}
 
 console.log(pyramide(5));