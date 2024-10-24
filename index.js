// Etape 1 qui se transfome en étape 4
// Créer une fonction qui demande à l'utilisateur d'entrer un nombre
const askNumber = (message) => {
    let entryNumber = prompt(message);
    while(isNaN(entryNumber) || entryNumber < 0 || entryNumber > 50){
        alert('Nombre invalide, veuillez saisir un nombre ou un nombre entre 0 et 50')
        entryNumber = prompt(message);
    } 
    return Number(entryNumber)
};
// Etape 2
// Créer une fonction didWin qui a comme paramètre givenNumber
const didIWin = (givenNumber, targetNumber) => {
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
const gamePlay = () => {
    // nombre à trouver
    const targetNumber = askNumber("Joueur 1, entrez un nombre entre 0 et 50 que le joueur 1 doit deviner :");
    let boucle = false; 
    while (!boucle){
        const userGuess = askNumber("Joueur 2, entrez votre nombre pour devniner celui du joueur 1 :");
        boucle = didIWin(userGuess, targetNumber);
        if(boucle){
            alert('Félicitation Joueur 2, vous avez gagné !')
        }
    }
};
// Lancement du jeu 
gamePlay();
