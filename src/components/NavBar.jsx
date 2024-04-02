import PokemonCard from "./PokemonCard";

function NavBar() {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          imgSrc={pokemon.imgSrc}
        />
      ))}
    </>
  );
}

export default NavBar;
