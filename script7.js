
// Dèfi 1

function saluerUtilisateur(prenom) {
    console.log("Bonjour, " + prenom + " !");
}

saluerUtilisateur("Alice"); 
saluerUtilisateur("Nuno");  


// Dèfi 2

function addition(a, b) {
    console.log("Résultat :", a + b);

}

addition(999, 1)
addition(1, 1)


// Dèfi 3

function estPair(a) {
if (a % 2 === 0) {
    return true;
} else { 
    return false;
    
  }
}

console.log(estPair(72)); 
console.log(estPair(37)); 


// Dèfi 4

function calculerMoyenne(a, b, c) {

    console.log("Moyenne :", (a + b + c) / 3);

}

calculerMoyenne(5, 9, 1)


// Dèfi 5

function plusGrand(a, b) {

 if (a > b) { return a; 

 } else {

     return b;
 }

}

console.log(plusGrand(5, 9)); 
console.log(plusGrand(8, 3)); 