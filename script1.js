let score = 100;

console.log("Score :", score);

let energy = 80;

console.log("Énergie :", energy);

let hasPotion = false;

console.log("Potion :", hasPotion);

let inventory = "épée en bois";

console.log("Inventaire :", inventory);

let isAlive = true;

console.log("Est vivant :", isAlive);

hasPotion = true;
energy = energy + 20;

console.log("hasPotion :", hasPotion);
console.log("energy :", energy);

energy = energy - 40;

console.log("energy :", energy);

score = score - 25;

console.log("score :", score);

inventory = "empty";

console.log("Inventaire :", inventory);

energy = energy - 40;

console.log("energy :", energy);

score = score - 30;

console.log("score :", score);

inventory = "arc";

console.log("Inventaire :", inventory);

energy = 0;

console.log("energy :", energy);

isAlive = false;

console.log("Est vivant :", isAlive);

document.body.prepend('Potion : ' + hasPotion);
document.body.prepend('Energie : ' + energy + ' - ');
document.body.prepend('Score : ' + score + ' - ');
document.body.prepend('Inventaire : ' + inventory + ' - ');
