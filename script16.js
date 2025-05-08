function reponseBonne() {

	let resultElement = document.getElementById("resultat");  // This line finds and returns the HTML element with the ID "resultat" from the document.
	
	resultElement.innerText = "Bonne réponse" // This line sets the text inside the "resultat" element to "Bonne réponse".

	resultElement.style.color = "green";   // This line changes the color of the text to green
	
}

function reponseFausse() {

	let resultElement = document.getElementById("resultat"); // This line finds and returns the HTML element with the ID "resultat" from the document.
	
	resultElement.innerText = "Mauvaise réponse"  // This line sets the text inside the "resultat" element to "Mauvaise réponse".

	resultElement.style.color = "red";  // This line changes the color of the text to red

}

function reset() {

	let resultElement = document.getElementById("resultat"); // This line finds and returns the HTML element with the ID "resultat" from the document.

	resultElement.innerText = "";

}

