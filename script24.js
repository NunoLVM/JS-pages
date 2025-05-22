let affichagePokemon = document.getElementById("pokemon");
let button = document.getElementById("btn-pokemon");

// let types = data.types.map(function (item) {
//   return item.type.name;
// }).join(", ");

async function fetchPokemon() {
  let id = Math.floor(Math.random() * 151) + 1;

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();

    affichagePokemon.innerHTML = `
            <h3>${data.name}</h3>
            <img src="${data.sprites.front_default}">`;
  } catch (error) {
    console.error(error.message);
  }
}

button.addEventListener("click", function () {
  fetchPokemon();
  //   try {
  //     fetch(response + id)
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         affichagePokemon.innerHTML = `
  //             <h3>${data.name}</h3>
  //             <img src="${data.sprites.front_default}">`;
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
});
