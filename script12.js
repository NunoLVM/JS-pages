// Défi 1

let animaux = ["chien", "chat", "lapin"];

let couleurs = ["rouge", "vert", "bleu"];

console.log(couleurs[1]);

animaux[0] = "hamster";

console.log(animaux);

// Défi 2

animaux.push("perroquet");

animaux.shift();

console.log(animaux);

animaux.includes("chat");

console.log(animaux.join(" "));

// Défi 3

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.length);

// Défi 4

let doublons = [1, 2, 2, 3, 4, 4, 5];
let uniques = doublons.filter(verification($param1,$param2,$param3));

function verification(chiffre, place, box) {
  return box.indexOf(chiffre) === place;
}

console.log(uniques);

// Défi 5

let mots = ["Pomme", "Banane", "Abricot", "Cerise"];

console.log(displayArray);
