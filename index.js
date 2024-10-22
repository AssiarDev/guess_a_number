// Etape 1
// Créer une fonction qui demande à l'utilisateur d'entrer un nombre
const askNumber = () => {
    prompt("Veuillez entrer un nombre")
};

// Stocker la réponse de la variable dans la variable givenNumber
let givenNumber = askNumber();


// Etape 2
// Créer une fonction didWin qui a comme paramètre givenNumber
const didWin = givenNumber => {
    if (givenNumber < 22){
        console.log("Plus grand!")
    } 
}