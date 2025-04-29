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
      console.log(number + " x " + b + " = " + (number * b));;
    }
}

multiplier(5)



// Défi 3

let c = 0;

while (c <= 20)  {
   if (c % 3 == 0) {
    console.log( c + ": Fizz" );
  
c++;

} else if (c % 5 === 0) { 
  console.log( c + ": Buzz");
}
c++;

}


// Défi 4

function compteVoyelles(str) {

  let voyelles = "aeiou";

  let compte = 0;

  for(let i = 0; i < str.length; i++) {
    if(voyelles.includes(str[i])) {
      compte++;
  }

}
return compte;

}

let str = "ola nuno";
console.log(str.toLowerCase());
console.log(compteVoyelles(str));


