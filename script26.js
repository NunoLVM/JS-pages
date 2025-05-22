// On récupère le nombre total de personnages
let totalPersonnages;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  totalPersonnages = data.info.count;
}
// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

let galerie = document.getElementById("galerie");
let boutonMulti = document.getElementById("btn-multi");

boutonMulti.addEventListener("click", async function () {
  galerie.innerHTML = ""; // On vide la galerie

  for (let i = 0; i < 10; i++) {
    // Ton code ici (y compris promise, then, catch)

let id = Math.floor(Math.random() * totalPersonnages) + 1;

  fetch("https://rickandmortyapi.com/api/character/" + id)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        galerie.innerHTML += `
        <div class="carte">
        <h3>${data.name}</h3>
        <img src="${data.image}"></div>`
    });


  };
});