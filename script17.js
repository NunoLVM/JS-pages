function ajouterObjet() {
  const selectElement = document.getElementById("objetSelect"); // his line finds and returns the HTML element with the ID "objetSelect" from the document
  const sac = document.getElementById("sac");
  const camp = document.getElementById("camp");

  // This line retrieves the value of the selected option from the "objetSelect" element
  let objetChoisi = selectElement.value;
  // This line creates a new div element that will serve as the box to hold the object's details
  let objetDiv = document.createElement("div");
  // This line writes the selected object's name into the new div element
  objetDiv.innerText = objetChoisi;

  let btnSuprimmer = document.createElement("button");

  btnSuprimmer.innerText = "Suprimmer";

  btnSuprimmer.onclick = () => {
    objetDiv.remove();
  };

  //   btnSuprimmer.addEventListener("click", function () {
  //     btnSuprimmer.remove();
  //   });

  let btnDeplacer = document.createElement("button");
  btnDeplacer.innerText = "Deplacer";

  btnDeplacer.onclick = () => {
    if (objetDiv.parentElement.id === "sac") {
      camp.appendChild(objetDiv);
    } else if (objetDiv.parentElement.id === "camp") {
    	sac.appendChild(objetDiv);
	}
  };

  objetDiv.appendChild(btnSuprimmer);
  objetDiv.appendChild(btnDeplacer);

  sac.appendChild(objetDiv);
}
