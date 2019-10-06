<template>
  <v-app class="white lighten-4"> 
    <TheSidenav :profile="loadProfile"/>
    <NavBar :profile="loadProfile"/>   
    <nuxt/>
  </v-app>
</template>

<script>
import TheSidenav from '@/components/Navigation/TheSidenav'
import NavBar from '@/components/Navigation/NavBar'

export default {
  components: {
    TheSidenav,
    NavBar
  },
  computed: {
    loadProfile() {
      return this.$store.getters.loadProfile[0]
    }
  }
}
</script>

<style>
  html  {
    font-family: 'Blinker', sans-serif;
  }

  body  {
    margin: 0
  }
</style>>
