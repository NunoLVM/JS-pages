// Crée une variable pour stocker le temps
let time = 0;

function updateTime() {

  console.log(time);

  // Change le texte dans le paragraphe HTML pour afficher le temps
  document.getElementById("affichage").textContent = "Time: " + time + " seconds";

 }

 // Met à jour l'affichage une fois au début
 updateTime()

 // Variable qui garde l'ID du timer
let timerId = null;
  
 function startTimer() {

   // Vérifie si le timer est déjà en cours pour éviter plusieurs intervalles
  if (!timerId) {

  // Démarre une action répétée toutes les secondes
   // Garde l'ID du timer
   timerId = setInterval(function() {
     // Augmente la variable "time" de 1 chaque seconde
     time++;
     // Met à jour l'affichage avec le nouveau temps  
     updateTime(); 

    // Attend 1000 millisecondes (1 seconde) entre chaque mise à jour
   }, 1000); 
  }
}

// Ajoute un événement au bouton "Démarrer"
// Quand on clique dessus, la fonction "startTimer" est exécutée
document.getElementById("demarrer").addEventListener("click", startTimer);

function pauseTimer() {
  // Arrête le compteur (pause)
  clearInterval(timerId);
   // Réinitialise l'ID du timer pour pouvoir le redémarrer plus tard 
   timerId = null;
}

// Quand on clique sur "Pause", ça exécute "pauseTimer"
document.getElementById("pause").addEventListener("click", pauseTimer);



function resetTimer() {
  
  // Arrête le compteur
  clearInterval(timerId);

  // Remet le temps à zéro
  time = 0;

  // Réinitialise l'affichage avec 0
  updateTime(); 

  // Supprime le timer actif pour éviter qu'il redémarre
  timerId = null;
}

// Ajoute l'événement au bouton "Réinitialiser"
document.getElementById("reset").addEventListener("click", resetTimer);




