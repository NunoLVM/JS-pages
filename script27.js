// On récupère le nombre total de personnages
let totalPersonnages;

// Pagination
let paginate = 0;
let paginateDiv = document.getElementById("pagination");
let nbParPage = 10;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();

  totalPersonnages = data.info.count;

  afficherPersonnages(1);
  mountPaginate();
}

// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

let galerie = document.getElementById("galerie");
let boutonNext = document.getElementById("btn-next");
let title = document.querySelector("#title span");

async function afficherPersonnages(pageEnCours) {
  // pageActuelle = pageEnCours;
  // boutonMulti.addEventListener("click", async function () {
  // On calcule les ID de début et de fin du groupe de 10 personnages à afficher
  // À faire
  // Calculates the first character ID for the current page (IDs start at 1). For example, page 0 shows IDs 1–10, page 1 shows 11–20, etc.
  const debut = (pageEnCours - 1) * nbParPage + 1;
  // Ensures a maximum of 10 characters per page without exceeding the total count, especially on the last page.
  const fin = Math.min(debut + (nbParPage - 1), totalPersonnages);
  title.textContent = "(" + fin + "/" + totalPersonnages + ")";

  galerie.innerHTML = ""; // On vide la galerie

  for (let id = debut; id <= fin; id++) {
    try {
      let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      let data = await response.json();
      let carte = document.createElement("div");
      carte.classList.add("carte");
      carte.innerHTML = `
        <h3>${data.name}</h3>
        <img src="${data.image}">
        <p>Espèce: ${data.species}</p>`;

      galerie.appendChild(carte);
    } catch (error) {
      console.error(error.message);
    }
  }

  // // On passe à la page suivante (pour afficher 10 nouveaux personnages)
  // pageActuelle++;

  if (debut > totalPersonnages) {
    pageActuelle = 0;
  }
  updateActivePaginate();
  // Si on a dépassé le nombre total de personnages, on revient à la première page
  // À faire avec pageActuelle;
}

let pageActuelle = 1;

boutonNext.addEventListener("click", function () {
  const totalPages = Math.ceil(totalPersonnages / nbParPage);
  if (pageActuelle < totalPages) {
    pageActuelle++;
    afficherPersonnages(pageActuelle);
  }
});

let boutonBefore = document.getElementById("btn-before");

boutonBefore.addEventListener("click", function () {
  if (pageActuelle > 1) {
    pageActuelle--;

    afficherPersonnages(pageActuelle);
  }
});

function mountPaginate() {
  paginateDiv.innerHTML = "";

  const totalPages = Math.round(totalPersonnages / nbParPage);

  for (let i = 1; i <= totalPages; i++) {
    let li = document.createElement("li");

    li.textContent = i;

    li.addEventListener("click", () => {
      pageActuelle = i;
      afficherPersonnages(i);
    });

    paginateDiv.appendChild(li);

    updateActivePaginate();
  }
}

function updateActivePaginate() {
  let lis = paginateDiv.querySelectorAll("li");
  console.log(lis);

  lis.forEach((li, index) => {
    li.classList.remove("active");
    if (index + 1 === pageActuelle) {
      li.classList.add("active");
    }
  });
}
