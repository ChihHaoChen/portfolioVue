<template>
  <v-app class="green lighten-4"> 
    
    <NavBar/>
    <TheSidenav/>>
      
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
