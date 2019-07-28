<template>
  <v-app class="grey lighten-4"> 
    <!-- <TheHeader :show="displaySidenav"
      @close="displaySidenav=false"/> -->
    <NavBar/>
    <TheSidenav/>

  </v-app>
</template>

<script>
// import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import NavBar from '@/components/Navigation/NavBar'

export default {
  components: {
    // TheHeader,
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
