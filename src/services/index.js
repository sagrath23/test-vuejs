const basePath = 'https://pokeapi.co/api/v2'

export const fetchPokemonDetail = async (pokemonName) => {
  if (pokemonName) {
    const result = await fetch(`${basePath}/pokemon/${pokemonName}`, { method: 'GET' })

    return result.json()
  }

  return null
}

export const fetchPokemonList = async(limit, offset) => {
  if (limit && offset) {
    const result = await fetch(`${basePath}/pokemon?limit=${limit}&offset=${offset}`)

    return result.json()
  }

  return null
}
