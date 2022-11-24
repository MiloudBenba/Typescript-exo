/**
 * Fonction qui affiche une pyramique miroir en utilisant deux boucles for.
 */
function pyramide(num: number): void {
    for (let index = 1; index <= num; index++) {   
       let ligne = '*'.repeat(index);
       console.log(ligne);
    }
    for (let index = num; index >= 1; index--) {   
        let ligne = '*'.repeat(index);
        console.log(ligne);
     }
}
 
 console.log(pyramide(5));