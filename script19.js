// Liste fixe de fruits
const fruits = ["fraise", "banane", "kiwi magique", "pomme", "ananas", "framboise", "mangue"];
let compteur = 0; // Compteur initialisé à zéro
let indexDepart = 0; // Point de départ dans le tableau


// Fonction de préparation
function preparerSmoothie() {
  // Ton code ici

  let resultatDiv = document.getElementById("resultat"); 
  resultatDiv.innerHTML = ""; 

  ingredients.forEach(fruit => {
    let p = document.createElement("p"); 
    p.innerText = fruit; 
    resultatDiv.appendChild(p); 
  });

  
  if (ingredients.includes("kiwi magique")) {
    resultatDiv.style.backgroundColor = "green";
  } else {
    resultatDiv.style.backgroundColor = "initial";
  }

  
  compteur++;
  document.getElementById("compteur").innerText = "Smoothies préparés : " + compteur;
}


// Fonction de reset
function boireSmoothie() {
  // Ton code ici

  resultatDiv.innerHTML = ""; 
  resultatDiv.style.backgroundColor = "initial"; 

}