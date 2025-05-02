// Défi 1

let a = 0;
while (a <= 20) {
  if (a % 2 == 0) {
    console.log(a);
  }
  a++;
}

// Défi 2

function multiplier(number) {
  for (let b = 1; b <= 10; b++) {
    console.log(number + " x " + b + " = " + number * b);
  }
}

multiplier(5);


// Défi 3

for (let c = 1; c <= 21; c++) {

  if ((c % 3 === 0) && (c % 5 === 0)) {
    console.log(c + ": FizzBuzz");
  
  } else if (c % 3 === 0) {
    console.log(c + ": Fizz");
  
  } else if (c % 5 === 0) {
    console.log(c + ": Buzz");
  
  }
}

// Défi 4

function compteVoyelles(str) {
  let voyelles = "aeiou";

  let compte = 0;

  str = str.toLowerCase();

  for (let d = 0; d < str.length; d++) {
    if (voyelles.includes(str[d])) {
      compte++;
    }
  }
  return compte;
}

let str = "BONJOUR tout le MONDE";

console.log(compteVoyelles(str));


// Défi 5 

function pyramide(hauteur) { 
  for (let f = 1; f <= hauteur; f++) {
      ligne = "";
      for (let g = 1; g <= hauteur - f; g++) {
      ligne += " ";
      }
      for (let h = 1; h <= 2 * f - 1; h++) {
      ligne += "*";
      }
      console.log(ligne);

  }  
}
 pyramide(10);

 
 
 // Défi 6

     function guessingGame(correctNumber) {
     let attempt = 0;
     let guess = 0;
 
     while (guess !== correctNumber) {
         let numberToGuess = parseInt(prompt('Guess: '));
         guess = numberToGuess;
         attempt++;
         console.log(`Attempt ${attempt}: You guessed ${guess}`);
     }
 
     console.log(`Congratulations, you found the number ${correctNumber} in ${attempt} attempts!`);
 }
 
 guessingGame(25);