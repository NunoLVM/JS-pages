// let name = prompt("Entrez un nom");

// if (!name || name.trim() === "") {
//   alert("Nom incorrect");
// } else {
//   alert("traitement des autres cas");

//   let age = prompt("Entrez l'âge du chat :");
//   let poids = prompt("Entrez le poids du chat en kg :");
// }

// if (name === "") {
//     alert("Merci d’entrer un nom valide.");

// }

// if (age === "" && poids === "") {

//     alert("Âge ou poids invalide. Merci de réessayer.");

// }

//     else {
//         age = Number(age);
//         poids = Number(poids);

//            alert("Refusé");

//         if (age > 15 && poids > 10) {

//             alert("Membre Légendaire");

//         } else if (age >= 10 && age <= 15 && poids > 6 && poids <= 10) {

//             alert("Membre d’Honneur");

//         } else if (age >= 3 && age < 10 && poids >= 3 && poids <= 6) {

//             alert("Membre Approuvé");
//         }
//     }

function verifierAdhesion(nom, age, poids) {
	if (age > 15 || poids > 10) {
		alert(nom + " est un Membre Légendaire du club.");
	} else if (age >= 10 && age <= 15 && poids > 6 && poids <= 10) {
		alert(nom + " est un Membre d'Honneur du club.");
	} else if (age >= 3 && age < 10 && poids >= 3 && poids <= 6) {
		alert(nom + " est un Membre Approuvé du club.");
	} else {
		alert("Désolé " + nom + ", tu ne peux pas entrer dans le club.");
	}
}

// Collecte des données utilisateur
let nomChat = prompt("Quel est le nom du chat ?");
if (!nomChat || nomChat.trim() === "") {
	alert("Merci d’entrer un nom valide.");
} else {
	let ageChat = prompt("Quel est l'âge de " + nomChat + " ?");
	let poidsChat = prompt("Quel est le poids de " + nomChat + " (en kg) ?");

	// Transformation en nombre
	ageChat = parseInt(ageChat);
	poidsChat = parseInt(poidsChat); // Ou parsfloat

	// Vérification des saisies
	if (isNaN(ageChat) || isNaN(poidsChat)) {
		alert("Âge ou poids invalide. Merci de réessayer.");
	} else {
		verifierAdhesion(nomChat.trim(), ageChat, poidsChat);
	}
}