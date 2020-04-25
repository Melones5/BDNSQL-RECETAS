<template>
  <div class="home">
    <br>
    <br>	
    <Listar msg="Welcome to Your Listado Bro App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Listar from '@/components/Listarepisodios.vue'

export default {
  name: 'Home',
  components: {
    Listar
  }
}
</script>

<style scoped>
</style>