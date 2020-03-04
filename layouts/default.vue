<template>
  <v-app class="white lighten-4">
    <show-at breakpoint="mediumAndBelow">
      <NavBar :profile="loadProfile" />
    </show-at>
    <show-at :breakpoints="{ medium: 1260 }" breakpoint="mediumAndAbove">
      <TheSidenav :profile="loadProfile" />
    </show-at>
    <nuxt />
  </v-app>
</template>

<script>
import TheSidenav from "@/components/Navigation/TheSidenav"
import NavBar from "@/components/Navigation/NavBar"
import { showAt, hideAt } from "vue-breakpoints"

export default {
  components: {
    TheSidenav,
    NavBar,
    showAt,
    hideAt
  },
  computed: {
    loadProfile() {
      return this.$store.getters.loadProfile[0]
    }
  }
}
</script>

<style>
html {
  font-family: "Blinker", sans-serif;
}

body {
  margin: 0;
}</style
>>
