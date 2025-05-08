// Défi 1 Création et accès aux tableaux

let animaux = ["chien", "chat", "lapin"]; // Create an array with three animals

let couleurs = ["rouge", "vert", "bleu"]; // Create an array with three colors

console.log(couleurs[1]); // Show the second color ("vert")

animaux[0] = "hamster"; // Change "chien" to "hamster"

console.log(animaux); // Show the updated list of animals


// Défi 2 Afficher les éléments d'un tableau

animaux.push("perroquet"); // Add "perroquet" at the end of the list

animaux.shift(); // Remove the first animal from the list

console.log(animaux); // Show the list after removing the first element

animaux.includes("chat"); // Check if "chat" is in the list (returns true or false)

console.log(animaux.join(" ")); // Combine the list into a sentence with spaces


// Défi 3 Taille d'un tableau

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Create a list of numbers

console.log(numbers.length); // Show how many numbers are in the list


// Défi 4 Supprimer les doublons

const doublons = [1, 2, 2, 3, 4, 4, 5]; // A list with some duplicate numbers

const unique = doublons.filter((valeur, index, self) => {
    return self.indexOf(valeur) === index; // Keep only unique numbers
});
console.log(unique); // Show the list without duplicates


// Défi 5 Afficher un tableau sous forme de chaîne

function displayArray() {
  let fruits = ['Pomme', 'Banane', 'Abricot', 'Cerise']; // List of fruits
  console.log(fruits.join(' ')); // Combine into a sentence with spaces
}
displayArray(); // Call the function to display the fruits


// Défi 6 Afficher avec "et" avant le dernier élément

function displayArray2(tab) {
  if (tab.length <= 1) return tab.join(""); // If there is only one item, return it
  return tab.slice(0, -1).join(", ") + " et " + tab[tab.length - 1]; // Add "et" before the last item
}
console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Display the formatted sentence


// Défi 7 Affichage conditionnel avec booléen

function displayArray3(tab, useAnd) {
  if (useAnd === false) return tab.join(", "); // If useAnd is false, separate with commas
  else return tab.slice(0, -1).join(", ") + " et " + tab[tab.length - 1]; // If true, add "et" before the last item
}

console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], false)); // Comma-separated
console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], true)); // With "et"


// Défi 8 Trier les mots d'une chaîne

function sortWordsInString(chaine, desc = true) {
    if (chaine.trim() === '') {
        return ''; // If the text is empty, return an empty string
    }

    let mots = chaine.split(' '); // Split the text into words

    mots.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // Sort alphabetically, ignoring case

    if (!desc) {
        mots.reverse(); // If desc is false, reverse the order
    }

    return mots.join(' '); // Join the words into a sentence
}
console.log(sortWordsInString("je suis en train d'apprendre le JavaScript")); // Display the sorted sentence


// Défi 9 Filtrer et multiplier les nombres pairs

let nombres = [1, 2, 3, 4, 5, 6, 7, 8]; // A list of numbers

let resultat = nombres.filter((x) => x % 2 === 0).map((x) => x * 2); // Keep only even numbers, then multiply them by 2

console.log(resultat); // Show the modified list


// Défi 10 Arrondir les nombres vers le bas

function roundDownArray(tab) {
    return tab.map((num) => Math.floor(num)); // Round each number down to the nearest whole number
}
console.log(roundDownArray([3.7, 8.4, 2.1, 5.9])); // Show the rounded numbers


// Défi 11 Somme des arrondis

function sumOfArray(tab) {
    return tab.map((x) => Math.floor(x)).reduce((a, b) => a + b, 0); // Round all numbers down, then sum them
}
console.log(sumOfArray([3.7, 8.4, 2.1, 5.9])); // Show the total sum


// Défi 12 Moyenne des arrondis

function averageOfArray(tab) {
  const arrondis = tab.map((x) => Math.floor(x)); // Round all numbers down
  const sum = arrondis.reduce((a, b) => a + b, 0); // Add them together
  return sum / arrondis.length; // Divide by the number of elements to get the average
}
console.log(averageOfArray([3.7, 8.4, 2.1, 5.9])); // Show the average
