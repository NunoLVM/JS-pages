// Défi 1 : Afficher un message après 3 secondes

setTimeout(function() {
  console.log("3 secondes se sont écoulées ! (seTimeout)"); 
}, 3000);


// Défi 2 : Double message différé

console.log("Début du script");

setTimeout(function() {
  console.log("Message 1(seTimeout)"); 
}, 1000);

setTimeout(function() {
  console.log("Message 2(seTimeout)"); 
}, 3000);


// Défi 3 : Simuler un chargement sur bouton

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("contenu").textContent = "Chargement en cours…";

  setTimeout(function() {
    document.getElementById("contenu").textContent = "Contenu chargé";
  }, 2000);
});


//  Défi 4 : Créer un chronomètre simple

let compteur = 0;

let time = null;

 document.getElementById("btn-start").addEventListener("click", function () {
  document.getElementById("compteur").textContent = "";
  compteur = 0;

    if (time !== null) {
    
  }

 time = setInterval (function() {
    compteur++;
    document.getElementById("compteur").textContent = compteur;
  }, 1000);

})


document.getElementById("btn-stop").addEventListener("click", function () {
    document.getElementById("compteur").textContent = "";
    clearInterval(time); // 
});
