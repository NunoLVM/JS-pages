let grimoire = ["bave de crapaud", "plume de phénix", "racine de mandragore"]

//  Function to add a new ingredient

function ajouterIngredient() {

  //  Ask the user for a new magical ingredient
  let ingredient = prompt("What ingredient you would like to add?");
  
    // If the user wrote something, add it to the grimoire
    if (ingredient) {
      grimoire.push(ingredient);  // Add ingredient to the list

      aficcherGrimoire(); // Show the updated list on the page
    } else { 
      alert("no ingredients added.") // If nothing was written, show a warning

  }
}

// Function to display the ingredients on the webpage
function aficcherGrimoire() {
  let listeDiv = document.getElementById("liste");   // Find the div with id "liste"
  listeDiv.innerHTML = grimoire.join("<br>");   // Show the ingredients, each on a new line

}

// Function to analyse the potion

function analyserPotion() {
  // Count how many ingredients are in the grimoire
  let nombreIngredients = grimoire.length;
  // Count the total number of letters in all ingredients
  let totalLettres = grimoire.reduce(function(somme, ingredient) {
    return somme + ingredient.length;  // Add the length of each ingredient
  }, 0);

  alert("Analyse de la potion :\n" +
    "Nombre d’ingrédients : " + nombreIngredients + "\n" + // how number of ingredients
    "Total de lettres utilisées : " + totalLettres); // Show total letters used
}
  



ajouterIngredient();
console.log(grimoire);
