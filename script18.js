// Défi 1 : Afficher un message au clic

function bravo() {
  alert("Bravo, tu as cliqué !");
}


// Défi 2 : Changer la couleur d’un texte

let p = document.getElementById("test");

p.addEventListener("mouseover", function() {
  p.style.color = "red";
});

p.addEventListener("mouseout", function() {
  p.style.color = "green";
});


// Défi 3 : Agrandir un bouton au survol

let a = document.getElementById("scale");

a.addEventListener("mouseover", function () {
  a.style.transform = "scale(1.2, 1.2)";
});

  a.addEventListener("mouseout", function() {
    a.style.transform = "scale(1, 1)";
});


// Défi 4 : Compter les clics

let counter = 0;

let b = document.getElementById("count");

b.addEventListener("click", function() {
  counter++;

// Défi 5 :  Désactiver un bouton après 3 clics
  if (counter === 3) { 
    b.disabled = true; 
  }
  
  document.getElementById("Counter").innerText = "Number of clicks: " + counter;
});


// Défi 6 : Créer un élément dynamique

let c = document.getElementById("container");
let d = document.getElementById("Ajout");
let paragraph = document.createElement("p");

 d.addEventListener("click", function() {

  let paragraph = document.createElement("p");

  paragraph.innerText = "New Div";
   

  c.appendChild(paragraph);
 })


 // Défi 7 : Supprimer un élément au clic

let e = document.getElementById("containerTemp");
 
if (e) {
 e.addEventListener("click", function() {

  e.remove();
});
}
 
  
 




