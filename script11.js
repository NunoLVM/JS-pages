let prenom = prompt("Quel est ton prénom ?");

let nombreBurgers = parseInt(prompt("Combien de burgers veux-tu ?"));

let veutMenu = prompt("Veux-tu un menu ? (oui/non)").toLowerCase();


if (veutMenu !== "oui" && veutMenu !== "non") {
  alert("reponse invalide");
} else if (nombreBurgers <= 0 || isNaN(nombreBurgers)) {
  alert("nombre burgers incorrect");
} else {
  calculerPrix(prenom, veutMenu, nombreBurgers);
}

function calculerPrix(prenom, veutMenu, nombreBurgers) {
  let prixFinale;
  const prixBurger = 5;
  const supplementMenu = 3;

  // Calcul du prix avec nb burgers
  prixFinale = nombreBurgers * prixBurger;

  // Calcul avec ou sans menu
  //supplementMenu
  if (veutMenu === "oui")
    prixFinale = prixFinale + 3;

  else prixFinale = prixFinale;

  console.log(`Ton prénom contient ${prenom.length} lettres`);

  alert(`Merci ${prenom} , ta commande de ${nombreBurgers} burgers coûte ${prixFinale} €.`);
}

