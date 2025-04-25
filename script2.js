// let age = "20";

// let motDepasse = "afec";

// let motEntreParleJoueur = prompt("Entrez le mot de passe du donjon :");

// let aUnBadgeMagique = true;

// let niveauDeForce = 8;

// if (motEntreParleJoueur != motDepasse) {
//   alert("Mot de passe incorrect.");
  
// } else if (motEntreParleJoueur == motDepasse && age > 18 && aUnBadgeMagique && niveauDeForce >= 7) {
//   alert("🟢 Bienvenue dans le donjon, aventurier !");
// } else {
//   alert(" 🔴Accès refusé. Tu ne remplis pas toutes les conditions…");
// }



// CORRECTION

let age = 20;
let motDePasse = "afec";
let motEntreParLeJoueur = prompt("Entrez le mot de passe du donjon :");
let aUnBadgeMagique = true;
let niveauDeForce = 8;

// Vérification du mot de passe
if (motEntreParLeJoueur !== motDePasse) {
	alert("Mot de passe incorrect.");
} else {
	// Si le mot de passe est bon, on vérifie les autres conditions
	if (age > 18 && aUnBadgeMagique && niveauDeForce >= 7) {
		alert("🟢 Bienvenue dans le donjon, aventurier !");
	} else {
		alert("🔴 Accès refusé. Tu ne remplis pas toutes les conditions…");
	}
}