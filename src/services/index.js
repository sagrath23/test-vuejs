const basePath = 'https://pokeapi.co/api/v2'

export const fetchPokemonDetail = async (pokemonName) => {
  const result = await fetch(`${basePath}/pokemon/${pokemonName}`, { method: 'GET' })

  return result.json()
}
