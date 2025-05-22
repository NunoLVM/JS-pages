// Récupérer les éléments HTML
let boutonAjoute = document.getElementById("btnAjoute");
let boutonSupprimmer = document.getElementById("btnSupprimmer");
let ul = document.getElementById("liste");
let champ = document.getElementById("prenom");


// Fonction pour afficher la liste des prénoms
function afficherListe() {
  let profils = JSON.parse(localStorage.getItem("profils")) || [];
  
  ul.innerHTML = ""; 
  profils.forEach(prenom => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = prenom;
    ul.appendChild(li);
  });
}

// Fonction pour ajouter un prénom
function ajouterPrenom() {
  let prenom = champ.value.trim(); // Récupérer le prénom
  if (prenom === "") {
  return; // Arrêter la fonction
  }

  let profils = JSON.parse(localStorage.getItem("profils")) || [];

    if (!profils.includes(prenom)) { 
    profils.push(prenom);
    localStorage.setItem("profils", JSON.stringify(profils));
  }

  afficherListe(); // Mettre à jour l'affichage
  champ.value = ""; // Vider le champ de saisie
}

// Fonction pour supprimer un prénom
function supprimmerPrenom() {
  let prenom = champ.value.trim();
  let profils = JSON.parse(localStorage.getItem("profils")) || [];

  profils = profils.filter(p => p !== prenom); // Supprimer le prénom de la liste
  localStorage.setItem("profils", JSON.stringify(profils)); // Sauvegarder la liste corrigée

  afficherListe(); // Mettre à jour l'affichage
  champ.value = ""; // Vider le champ de saisie
}

// Ajouter les événements aux boutons
boutonAjoute.addEventListener("click", ajouterPrenom);
boutonSupprimmer.addEventListener("click", supprimmerPrenom);

// Afficher la liste au chargement de la page
afficherListe();
