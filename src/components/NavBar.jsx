function NavBar({
  pokemonIndex,
  pokemonList,
  handleClickPrevious,
  handleClickNext,
}) {
  return (
    <>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrevious}>Précédent</button>
      ) : (
        ""
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBar;
