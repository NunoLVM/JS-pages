<script>

// 1 : Demander les informations à l'utilisateur
let prenom = prompt("Quel est ton prénom ?");

let nombreBurgers = parseInt(prompt("Combien de burgers veux-tu commander ?"));

let veutMenuText = prompt("Veux-tu un menu avec boisson et frites ? (oui/non)").toLowerCase();

let prixTotal; // Pourquoi let ? Car le prix peut changer (pas une constante)

const prixBurger = 5; // Constante : ça ne bouge pas !

const supplementMenu = 3; // Constante : ça ne bouge pas !

// Vérifications
if (isNaN(nombreBurgers) || nombreBurgers <= 0) {

  alert("Commande invalide : tu dois commander au moins 1 burger !");

} else if ((veutMenuText !== "oui") && (veutMenuText !== "non")) {

  alert("Réponse invalide pour le menu.");

} else {

  // 2 : Calcul du prix

  if (veutMenuText === "oui") {

    prixTotal = nombreBurgers * (prixBurger + supplementMenu);

  } else {

    prixTotal = nombreBurgers * prixBurger;

  }

  // 3 : Résumé personnalisé
  console.log("Ton prénom contient " + prenom.length + " lettres.");

  alert("Merci " + prenom + " ! Ta commande de " + nombreBurgers + " burgers coûte " + prixTotal + " €.");


  // 3 : Résumé personnalisé : autre méthode avec des backticks, et des ${variable} pour afficher le retour

  console.log(`Ton prénom contient ${prenom.length} lettres`);

  alert(`Merci ${prenom} ! Ta commande de ${nombreBurgers} burgers coûte ${prixTotal} €.`);

}

</script>
