// Etape 1
// Créer une fonction qui demande à l'utilisateur d'entrer un nombre
const askNumber = entryNumber => {
    entryNumber = prompt('Veuillez entrer un nombre', "")
    if(isNaN(entryNumber)){
        alert('Ceci n\'est pas un nombre, veuilez saisir un nombre')
    }
    return entryNumber
};
// Stocker la réponse de la variable dans la variable givenNumber
const givenNumber = askNumber();
console.log(givenNumber);

// Etape 2
// Créer une fonction didWin qui a comme paramètre givenNumber
let targetNumber = 22
const didWin = givenNumber => {
    // condition pour trouver le nombre 
    if (givenNumber < targetNumber){
        alert ("Plus grand!")
        return false
    } else if (givenNumber > targetNumber){
        alert ('Plus petit!')
        return false 
    } else if (givenNumber === targetNumber){
        alert("Bravo ! Vous avez deviné le nombre")
        return true
    }
};

// Etape 3
// Créer une fonction gamePlay qui gère le jeu
const gamePlay = () => {
    // Boucle du jeu

};
gamePlay()