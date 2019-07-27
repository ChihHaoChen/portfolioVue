<template>
  <v-app> 
    <TheHeader :show="displaySidenav"
      @close="displaySidenav=false"/>
    <TheSidenav @sidenavToggle="displaySidenav = !displaySidenav"/>
      
    <nuxt/>
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: true
    }
  }
}
</script>
