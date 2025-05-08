//  Défi 1 : Créer ton premier objet

let utilisateur = {

  prenom: "Lucien",
  age: 45,
  ville: "Tartas",
}

console.log(utilisateur.prenom);
console.log(utilisateur.age);
console.log(utilisateur.ville);


// Défi 2: Modifier les valeurs d’un objet

utilisateur.ville = "Dax";
utilisateur.age = utilisateur.age + 1;

console.log(utilisateur.ville);
console.log(utilisateur.age);


// Défi 3: Ajouter une nouvelle propriété à un objet

utilisateur.estEtudiant = "true"

console.log(utilisateur)


// Défis 4:  Créer une fonction qui utilise un objet

function afficherInfos(utilisateur) {
  console.log("Je m'appelle " + utilisateur.prenom + " j'ai " + utilisateur.age + " et j'habite à " + utilisateur.ville);

}

afficherInfos(utilisateur);


// Défis 5: Créer un tableau d’objets

let users = [ 
  { prenom: "Nuno", age: 46, ville: "Lisbonne" },
  { prenom: "Ricardo", age: 44, ville: "Lisbonne" },
  { prenom: "Karine", age: 29, ville: "Anglet" }
];

for (let i = 0; i < users.length; i++) {  // Go through each user one by one
  console.log(users[i].prenom);  // Print each user's first name to the console
}


// Défis 6: Gestion d’une bibliothèque

let biblio = [
  { titre: "The Beggining", auteur : "Lionel Messi", anneePublication : 2000, estDisponible : true},
  { titre: "The End", auteur : "Cristiano Ronaldo", anneePublication : 2050, estDisponible : false},
  { titre: "The Fail", auteur : "Neymar", anneePublication : 2025, estDisponible : true}
];

function emprunterLivre(titre) {

  titre = titre.toLowerCase(); // Convert the input title to lowercase

  for (let a = 0; a < biblio.length; a++) {   // Loop through all books in the library

    if (biblio[a].titre.toLowerCase() === titre && biblio[a].estDisponible === true) {  // Check if the title matches and the book is available

      console.log("Livre emprunté avec succès."); 

      biblio[a].estDisponible = false;  // Mark the book as unavailable after borrowing
      return;

    }
  }
  console.log("Ce livre n'est pas disponible.") 
}

emprunterLivre("The End");
emprunterLivre("The Fail");
emprunterLivre("The Beggining");

function rendreLivre(titre) {

  titre = titre.toLowerCase(); // Convert the input title to lowercase

  for (let a = 0; a < biblio.length; a++) {   // Loop through all books in the library

    if (biblio[a].titre.toLocaleLowerCase() === titre && biblio[a].estDisponible === false) {   // Convert to lowercase and check if the book is currently unavailable 

      biblio[a].estDisponible = true; //  Mark the book as available again

      console.log("Merci pour le retour du livre.");

      return;  //  Exit the function after returning the book


    }  
  }

  console.log("Ce livre n'est pas disponible ou déjà retourné."); // Handles incorrect title or already returned book
}

rendreLivre("The End");
rendreLivre("The Beggining");
rendreLivre("The Fail");

rendreLivre("The End");
rendreLivre("The Beggining");
rendreLivre("The Fail");

