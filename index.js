// Etape 1 qui se transfome en étape 4
// Créer une fonction qui demande à l'utilisateur d'entrer un nombre
const askNumber = entryNumber => {
    entryNumber = prompt('Joueur 1 : Veuillez entrer un nombre', "")
    while(isNaN(entryNumber) || entryNumber < 0 || entryNumber > 50){
        alert('Nombre invalide')
        break
    } 
    return entryNumber
};
// Etape 2
// Créer une fonction didWin qui a comme paramètre givenNumber
const didIWin = (givenNumber, targetNumber) => {
    targetNumber = 22;
    console.log(givenNumber)
    // condition pour trouver le nombre 
    if (givenNumber < targetNumber){
        alert ("Plus grand!")
    } else if (givenNumber > targetNumber){
        alert ('Plus petit!')
    } else {
        alert("Bravo ! Vous avez deviné le nombre")
        return true
    }
    return false
};
// Etape 3
// Créer une fonction gamePlay qui gère le jeu
let boucle = false
const gamePlay = () => {
    while (!boucle){
        userGuess = askNumber();
        boucle = didIWin(userGuess);
    }
};

gamePlay();
