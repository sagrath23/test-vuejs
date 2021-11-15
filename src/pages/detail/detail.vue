<template>
  <div class="hello">
    <h1>{{$route.params.pokemonName}}'s Details</h1>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchPokemonDetail } from '../../services'

export default {
  name: 'Detail',
  setup() {
    const route = useRoute()
    const pokemonData = ref()

    console.log('running setup')

    watch(
      () => route.params.pokemonName,
      async (newPokemonName) => {
        console.log(newPokemonName, 'getting name')
        pokemonData.value = await fetchPokemonDetail(newPokemonName)

        console.log(pokemonData.value, 'vue ref')
      },
      { immediate: true } // TODO: remove config's object
    )
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
