const formulario = document.getElementById("formulario");

const input = document.getElementById("p-2 pok");

const card = document.querySelector("#card");

//funcionauxiliar

const isEmptyInput = () => {
  return input.value.trim() === "";
};

const esvalido = (varPokemon) => {
  if (varPokemon) {
    return false;
  } else {
    return true;
  }
};

const renderPokemon = (pokemon) => {
  card.innerHTML = createPokemon(pokemon);
};

const getPokemon = (pokemon) => {
  return {
    Name: pokemon.name,

    altura: pokemon.height,

    peso: pokemon.weight,

    Imagen: pokemon.sprites.other.dream_world.front_default,
  };
};

const createPokemon = (pokemon) => {
  const {
    Name,
    altura,

    peso,
    Imagen,
  } = getPokemon(pokemon);

  return `

    <div class="w3-card w3-yellow">

    <img src="${Imagen}" />

    </div>

    <div class="atributos">

    <h2 class ="pokemon-name"><strong>${Name}</strong></h2>

    <p><strong>Peso:${peso}            Altura:${altura}</strong></p>

  </div>

     `;
};

const searchPokemon = async (e) => {
  e.preventDefault();

  // si el input esta vacio muetsrar un alert cortar la ejeuccion

  if (isEmptyInput()) {
    alert("por favor, ingrese un numero");

    return;
  }

  const fechdPokemon = await tipoPokemon(input.value);

  console.log(fechdPokemon);

  // si el pokemon ingresda no es valida . lanzamos un alert lipiamos

  if (esvalido(fechdPokemon)) {
    alert("no es valido");

    formulario.reset();

    return;
  }

  renderPokemon(fechdPokemon);
};

// iniciadora

const init = () => {
  formulario.addEventListener("submit", searchPokemon);
};

init();
