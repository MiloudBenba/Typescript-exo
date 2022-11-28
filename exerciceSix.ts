
/**Fonction pour calculer la moyenne des notes entrées ainsi que le nom de l'élève */


/** fonction pour verifier la note si < 0 ou >20 */
function verifierNote(note: number): boolean {
    if(note < 0 || note > 20) {
        return false;
    } else {
        return true;
    }
}


/** fonction pour calculer la moyenne des notes  */
function calculerMoyenne(...notes:number[]): number {
let moyenne = 0;
for(let note of notes){
    moyenne += note
}
return moyenne / notes.length
}

function definirMention(moyenne:number): string {
    if(moyenne < 4){
        return "catastrophe";
    } else if(moyenne < 10){
        return "insuffisant";
    } else if(moyenne < 15){
        return "cool";
    } else {
        return "excellent";
    }
}

function bulletin(nomEleve: string, ...notes:number[]): string {
    let moyenne: number = calculerMoyenne(...notes);
    let mention: string = definirMention(moyenne);
    return `${nomEleve} a une moyenne de ${moyenne}, son travail est donc ${definirMention}`;
}

console.log(bulletin("Jo", 12,15,10,8,4,16,11));
