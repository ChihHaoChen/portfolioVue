<template>
  <v-app class="white lighten-4"> 
    <TheSidenav/>
    <NavBar/>
    
      
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
  data() {
    return {
      // displaySidenav: true
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
