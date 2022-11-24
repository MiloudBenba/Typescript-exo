
/**Fonction pour calculer la moyenne des notes entrées */

const moyenne = function(eleve: string, ...notes: number[]): string {
     let sum: number = 0;
     let moyenneTotal;
    for(let index = 0; index < notes.length; index++){
      sum += notes[index];
      moyenneTotal = sum / notes.length;
    }
     return `Eleve: ${eleve} Moyenne: ${moyenneTotal}`;
}


/**Fonction pour vérifier si note < 0 ou > 20 */

const verification = function(moyenne: number | string):string {
if(moyenne < 0 || moyenne > 20){
    return "note erronée";
} else if (moyenne <= 4){
    return `${moyenne} : Catastrophique`;
} else if(moyenne <= 11) {
    return `${moyenne} : Insuffisant`;
} else if (moyenne <= 14){
    return `${moyenne} : Passable`;
} else if (moyenne <= 18){
    return `${moyenne} : Bien`;
} else {
    return `${moyenne} : Très bien`;
}
}
    
console.log(verification(moyenne("Mimo", 10,12,15,5,2)));


