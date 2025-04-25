let prenom = prompt("Quel est ton nom et prénom ?");

let age = parseInt(prompt("Quel est ton âge ?")); 

if (isNaN(age) || age === "") {
    alert("Âge invalide");

} else if (age < 4) {
    alert("WOW!! Un génie aussi jeune maîtrise déjà l'ordinateur!");
    
} else if (age > 130) {
    alert("Atteindre " + age + " ans... Un record absolu!");
}


let estEtudiant = prompt("Es-tu étudiant ? (oui/non)").toLowerCase(); 

if (isNaN(estEtudiant) || estEtudiant !== "oui" && "non") {
    alert("oui ou non!!!!!")
}

let nombreTickets = parseInt(prompt("Combien de tickets veux-tu acheter ?")); 

if (isNaN(nombreTickets) || nombreTickets <= 0) {
    alert("Tu dois au moins acheter un ticket!")
}

console.log("Nom :", prenom);
console.log("Âge :", age);
console.log("Étudiant :", estEtudiant);
console.log("Tickets :", nombreTickets);

function calculerReduction(age, estEtudiant, nombreTickets) {

    let reduction = 0;

    if (age < 12) { 
        reduction = 50;
    } else if (age > 60) {
        reduction = 30; 
    } else if (estEtudiant === "oui") {
        reduction = 20;

    } else { 
        reduction = 0;
    } if (nombreTickets > 3) {
        reduction = reduction + 10;
    }
    
    return reduction;

}

let reductionFinale = calculerReduction(age, estEtudiant, nombreTickets);

console.log("Nom :", prenom);
console.log("Âge :", age);
console.log("Étudiant :", estEtudiant);
console.log("Tickets :", nombreTickets);
console.log("Réduction :", reductionFinale + "%"); 

const prix = 12;

let prixTotal = nombreTickets * prix;

console.log("Prix total sans reduction: ", prixTotal.toFixed(2) + "€" )

let prixReduit = prixTotal * (100 - reductionFinale) / 100;

console.log("Prix avec réduction: ", prixReduit.toFixed(2) + "€")

if (nombreTickets > 3) {
    prixReduit *= 0.9;
}

let nomSepare = prenom.split(" ");
let premierPrenom = nomSepare[0];
let nomFamille = nomSepare[1];

console.log("nombre de lettres dans son prénom: ", premierPrenom.length);

let deuxPremiereslettres = nomFamille.slice(0, 2).toUpperCase();

console.log("les 2 premières lettres du nom en majuscules: ", deuxPremiereslettres);

alert("Bonjour " + premierPrenom + " " + nomFamille + ", ton nom commence par " + deuxPremiereslettres + ", tu as " + age + " ans et tu paies " + prixReduit.toFixed(2) + " € pour " + nombreTickets + " tickets.");


