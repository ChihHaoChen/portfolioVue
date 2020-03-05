<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0 fill-height class="topContainer">
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
.topContainer {
  background-color: #dbffc8;
}

.research-card {
  margin-top: 0px;
  width: 100%;
  height: 100%;
  align-self: center;
  padding-bottom: 0px;
  margin-bottom: 0px;
  position: relative;
}
</style>
