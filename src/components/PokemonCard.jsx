import React from "react";

function PokemonCard({ pokemon }) {
  console.log(pokemon);

  return (
    <>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </>
  );
}

export default PokemonCard;
