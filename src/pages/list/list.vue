<template>
  <div class="hello">
    <h1>Choose one of {{pokemonListData.count}} pokemons</h1>
    <ul>
      <li v-for="(pokemon, index) in pokemonListData.results" :key="index">
        <router-link :to="{ name: 'Detail', params: { pokemonName: pokemon.name} }">
          {{pokemon.name}}
        </router-link>
      </li>
      <router-link :to="{ name: 'Home', query: { limit: 20, offset: 0 }}">prev</router-link>
      <router-link :to="{ name: 'Home', query: { limit: 20, offset: 20 } }">next</router-link>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {fetchPokemonList} from '../../services'

export default {
  name: 'List',
  setup() {
    const route = useRoute()
    const pokemonListData = ref()

    watch(
      () => route.query,
      async ({ limit, offset }) => {
        pokemonListData.value = await fetchPokemonList(limit, offset)
      },
      { immediate: true } // TODO: remove config's object
    )

    return {
      pokemonListData// TODO: remove return object to avoid pokemonData exposure to render context 
    }
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
