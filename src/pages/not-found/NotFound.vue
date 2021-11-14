<template>
  <div class="hello">
    <p>route <span>{{$route.path}}</span> not found</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
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
