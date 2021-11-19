const basePath = 'https://pokeapi.co/api/v2'

export const fetchPokemonDetail = async (pokemonName) => {
  const result = await fetch(`${basePath}/pokemon/${pokemonName}`, { method: 'GET' })

  return result.json()
}

export const fetchPokemonList = async(limit, offset) => {
  const result = await fetch(`${basePath}/pokemon?limit=${limit}&offset=${offset}`)

  return result.json()
}
