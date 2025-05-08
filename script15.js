// Le créateur de fiches de films

let movies = { 
	titre: "Inception", 
	realisateur: "Christopher Nolan", 
	annee: 2010, 
	duree: 148, 
	vu: false,
	
};

function askUser() {

	let movie = prompt("Have you seen this movie? (yes/no)");

	if (movie.toLowerCase() === "yes") {    // Convert user input to lowercase to compare correctly

		movies.vu = true;    // Mark the movie as watched

		let note = prompt("Add a note between 1 and 5.")
		note = Number(note);     //  Convert the input from a string to a number

		if (isNaN(note) || note < 1 || note > 5) {  //  Check if the note is valid (between 1 and 5)
			console.log("Invalid note. It must be a number between 1 and 5.");

			return;  //  Exit the function if the input is invalid
		  }
	  
		  movies.note = note;  // Add the rating to the movie object
		} else {  
		  return;  // If the user says "no", stop the script here
		}
	  }


	
	  function afficherFiche() {  
		let fiche = ` 
		  <h2>${movies.titre}</h2>                                                <!-- Show the movie title -->
		  <p><strong>Director:</strong> ${movies.realisateur}</p>      		      <!-- Show the movie's director -->
		  <p><strong>Year:</strong> ${movies.annee}</p>                   		  <!-- Show the movie's release year -->
		  <p><strong>Duration:</strong> ${movies.duree} min</p>           		  <!-- Show how long the movie lasts -->
		  <p><strong>Watched:</strong> ${movies.vu ? "Yes" : "No"}</p>    		  <!-- Show if the movie was watched -->
	  
		  ${movies.vu ? `<p><strong>Rating:</strong> ${movies.note}/5</p>` : ""}  <!-- If watched, show rating -->
		`;  
	  
		document.body.insertAdjacentHTML("beforeend", fiche);  // Add this info to the webpage
	  }
	  
	  // Ask the user about the movie
	  askUser();  
	  
	  // Show the movie details dynamically on the webpage
	  afficherFiche();