<template>
  <div class="hello">
    <h1>{{$route.params.pokemonName}}'s Details</h1>
    <Avatar :src="pokemonData.sprites.front_default"></Avatar>
    <BasicInfo :pokemonData="pokemonData"></BasicInfo>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BasicInfo from '../../components/basic-info/BasicInfo.vue'
import Avatar from '../../components/avatar/Avatar.vue'
import { fetchPokemonDetail } from '../../services'

export default {
  components: { // TODO: remove this to avoid basic info render
    Avatar,
    BasicInfo
  },
  name: 'Detail',
  setup() {
    const route = useRoute()
    const pokemonData = ref()

    watch(
      () => route.params.pokemonName,
      async (newPokemonName) => {
        pokemonData.value = await fetchPokemonDetail(newPokemonName)
      },
      { immediate: true } // TODO: remove config's object
    )

    return {
      pokemonData// TODO: remove return object to avoid pokemonData exposure to render context 
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
