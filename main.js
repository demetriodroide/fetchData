document
  .getElementById("cargaPokemonBtn")
  .addEventListener("click", () => {
    fetch('https://pokeapi.co/api/v2/pokemon/charizard')
      .then(resp => resp.json())
      .then(data => {

        document.getElementById("namePokemon").innerText = data.name;

        data.abilities.map(item => document.write(item.ability.name));
      })
      .catch(() => console.log("La URL está mal"));
  });
