// Tableau avec chaque billets/pieces
const monnaies:number[] = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];

// fonction pour calculer le rendu de monnaie au detail
const rendreMonnaies = function (montant:number) {
    for(let index:number = 0; index < monnaies.length; index++){
        
        /**const verification pour verifier combien de fois l'index 
         * du tableau peut apparaitre dans le montant actuel */
        const verification:number = Math.floor(montant / monnaies[index]);
        /** si verification = à 0, on passe à l'index suivant, */
        if(verification > 0){
            console.log(`${verification} --- ${monnaies[index]}`);
            montant -= verification * monnaies[index];
        }
    }
    
}

rendreMonnaies(1894.25);