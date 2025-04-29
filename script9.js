// Défi 1

for (let i = 0; i < 10; i++) {
  console.log("Afficher" + " " + i + " " + "le chiffre 5");
}

// Défi 2

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Défi 3

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

// Défi 4

for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
      console.log( i );
    }
  }

//  Défi 5


  function checkParity(number) {
    if (number % 2 === 0) {
      return("even");
   
    } else {
      return("odd");

    }
  }

  let number = parseInt(prompt("Choose a number"));
  if (isNaN(number)) {
    alert("Invalid number");
  }

 else { let result = checkParity(number);
  alert("Le chiffre " + number + " est : " + result);

}
