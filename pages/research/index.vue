<template>
  <v-app>
    <v-content fluid pa-0 ma-0>
      <v-container fluid ma-0 pa-0 fill-height>
        <TimeResearchCard
          :publications="loadedPublications"
          class="research-card"
        />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TimeResearchCard from "@/components/Cards/TimeResearchCard"

export default {
  components: {
    TimeResearchCard
  },
  computed: {
    loadedPublications() {
      return this.$store.getters.loadedPublications
    }
  }
}
</script>

<style>
.research-card {
  margin-top: 0px;
  width: 100%;
  height: 100%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  position: relative;
}
</style>
