// Défis Express – Les callbacks
// 1) Comprendre les fonctions passées en paramètre

function saluer(){
  console.log("Bonjour tout le monde");
}

function executerFonction(fonction) {
  fonction();
}

executerFonction(saluer);


// 2) Modifier l’action selon la fonction donnée
   
function direBonjour(nom) {
  console.log("Bonjour " + nom)
}

function direAurevoir(nom) {
  console.log("Au revoir " + nom)
}

function accueillir(nom, action) {
  action(nom);
  
}

accueillir("Nuno", direBonjour);
accueillir("Ricardo", direAurevoir);


// 3) Mini “questionnaire” interactif

function poserQuestion(question, ouiCallback, nonCallback) {
    

    if (confirm(question)) { 
      
      ouiCallback();
    } else {
      nonCallback();
    }
}
function repondreOui() {
    console.log("Super choix !");
}

function repondreNon() {
    console.log("Dommage...");
}

poserQuestion("Veux-tu apprendre JavaScript ?", repondreOui, repondreNon);


// 4) Créer une séquence animée

// Liste de mots à afficher un par un
let mots = ["Machine Head", "Rammstein", "SOAD"];

function animerMots(mots, callback) {

  // Parcourt chaque mot du tableau "mots"
  mots.forEach(function(mot, index) {

    // Attendre un certain temps avant d'afficher chaque mot
    setTimeout(function() {

      // Affiche le mot dans la console
      console.log(mot);
      
      // Attend 1 seconde par position dans le tableau
    }, index * 1000);
  });

  // Une fois que tous les mots sont affichés, on appelle la fonction "callback"
  // Attend le temps total nécessaire avant d'appeler "callback"
  setTimeout(callback, mots.length * 1000);
}

// Création d'une fonction qui sera appelée à la fin de l'animation
function finAnimation() {
  console.log("Animation terminée !");
}

// Appel de la fonction animerMots avec la liste de mots et la fonction finale
animerMots(mots, finAnimation);

