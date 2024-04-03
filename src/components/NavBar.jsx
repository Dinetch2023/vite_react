function NavBar({ pokemonList, pokemonClick }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => pokemonClick(pokemon)} key={index}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
export default NavBar;
