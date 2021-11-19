<template>
  <div class="hello">
    <h2>Basic Info</h2>
    <dl>  
      <dt>Height</dt>  
      <dd>{{pokemonData?.height}}</dd>  
      <dt>Weight</dt>  
      <dd>{{pokemonData?.weight}}</dd>  
      <dt>Base XP</dt>  
      <dd>{{pokemonData?.base_experience}}</dd>  
    </dl>
  </div>
</template>

<script>
// TODO: display more Pokemon's info
export default {
  name: 'BasicInfo',
  props: {
    pokemonData: Object
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
