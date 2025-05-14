// Liste fixe de fruits
const fruits = ["fraise", "banane", "kiwi magique", "pomme", "ananas", "framboise", "mangue"];
let compteur = 0; // Compteur initialisé à zéro
let indexDepart = 0; // Point de départ dans le tableau

// Fonction de préparation

const preparerBtn = document.getElementById("btnSmoothie");
const btnBoire = document.getElementById("btnBoire");


preparerBtn.addEventListener("click", preparerSmoothie);
btnBoire.addEventListener("click", boireSmoothie);

	// Fonction de préparation
	function preparerSmoothie() {
		// Ton code ici
  const resultat = document.getElementById("resultat");
  resultat.innerHTML = "";

  let smoothie = [];

  for(let counter = 0; counter < 3; counter++) {
    // let index = indexDepart + counter;
    
    // if(index >= fruits.length) {
    //   index = index - fruits.length;
      
    // }
    let index = (indexDepart+counter) % fruits.length;
    smoothie.push(fruits[index]);
    
  }
  
  
  smoothie.forEach(function(fruit) {
    let p = document.createElement("p");
    p.innerText = fruit;
    resultat.appendChild(p);
    
  });
  indexDepart++;
  let compteurHtml = document.getElementById("compteur");
  compteurHtml.innerText = "Preparation : " + indexDepart;

   if (smoothie.includes("kiwi magique")) {
    resultat.style.backgroundColor = "green";
  } else {
    resultat.style.backgroundColor = "initial";
  }

}


  // Fonction de reset
	function boireSmoothie() {
		// Ton code ici
      const resultat = document.getElementById("resultat");
      resultat.innerHTML = "";

	}



// function preparerSmoothie() {
  


//   let resultatDiv = document.getElementById("resultat"); 
//   resultatDiv.innerHTML = ""; 

//   ingredients.forEach(fruit => {
//     let p = document.createElement("p"); 
//     p.innerText = fruit; 
//     resultatDiv.appendChild(p); 
//   });

  
 
  
//   compteur++;
//   document.getElementById("compteur").innerText = "Smoothies préparés : " + compteur;
// }


// // Fonction de reset
// function boireSmoothie() {
//   // Ton code ici

//   resultatDiv.innerHTML = ""; 
//   resultatDiv.style.backgroundColor = "initial"; 

// }