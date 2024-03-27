const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PockemonCard() {
  const pokemon = pokemonList[0];
 
  return (
    <figure>
<<<<<<< HEAD
      {pokemon.imgSRC ? <img src={pokemon.imgSrc}/> : <p/> ??? <p/> }
=======
      {pokemon.imgSRC !== undefined ? <img src={pokemon.imgSrc}/> : <p/> ??? <p/> }
>>>>>>> 67ee3e92e1666b00f829dd6361990c1a22c5cd8c
      <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
  }


export default PockemonCard;
