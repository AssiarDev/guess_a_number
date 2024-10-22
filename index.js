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
//let givenNumber = askNumber();
console.log(givenNumber)

// Etape 2
// Créer une fonction didWin qui a comme paramètre givenNumber
let targetNumber = 22
const didIWin = (guessNumber) => {
    console.log(guessNumber)
    // condition pour trouver le nombre 
    if (guessNumber < targetNumber){
        alert ("Plus grand!")
    } else if (guessNumber > targetNumber){
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
while (!boucle){
    let userGuess = askNumber();
    boucle = didIWin(userGuess)
}
 // Etape 4
 // Creer une fonction qui demande au joueur 1 de deviner un nombre entre 0 et 50
 let guessComputer = () => {
    while (userGuess < 0 || userGuess > 50){

    }
 };
