// DEFI 1

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// ou

function capitalizeFirstLetter2(str) {
	let firstLetter = str.slice(0,1).toUpperCase();
	let lastLetters = str.slice(1);
	return (firstLetter + lastLetters);
}

console.log(capitalizeFirstLetter('hello')); // "Hello"
console.log(capitalizeFirstLetter2('world')); // "World"



// DEFI 2

function countOccurrences(phrase, mot) {
	return phrase.split(mot).length - 1;
}

console.log(countOccurrences('hello hello hello', 'hello')); // 3
console.log(countOccurrences('This is a test', 'test')); // 1
console.log(countOccurrences('abcd abc abc', 'abc')); // 2
console.log(countOccurrences('abcd abc abc', 'xyz')); // 0


// DEFI 3

function truncateString(str, maxLength) {
	return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

console.log(truncateString('Hello, world!', 5)); // "Hello..."
console.log(truncateString('Short', 10)); // "Short"

// DEFI 4

function countRegexOccurrences(phrase, mot) {
	const regex = new RegExp(mot, 'g');
	const matches = phrase.match(regex);
	return matches ? matches.length : 0;
}

console.log(countRegexOccurrences('hello hello hello', 'hello')); // 3

// DEFI 5

let phrase = "Le JavaScript est super";
let mot = phrase.slice(3, 13);
console.log(mot); // "JavaScript"

// DEFI 6

// let phrase = "Je suis développeur web";
// console.log(phrase.length); // 23

// // DEFI 7

// let phrase = "Je suis développeur web";
// console.log(phrase.length); // 23


