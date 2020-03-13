<template>
  <v-app>
    <v-content fluid pa-0 ma-0>
      <v-container fluid ma-0 pa-0 fill-height>
        <TimeProjectCard :projects="loadedProjects" class="project-card" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TimeProjectCard from "@/components/Cards/TimeProjectCard"

export default {
  components: {
    TimeProjectCard
  },
  computed: {
    loadedProjects() {
      return this.$store.getters.loadedProjects
    }
  }
}
</script>

<style>
.project-card {
  margin-top: 0px;
  width: 100%;
  height: 100%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  position: relative;
}
</style>
