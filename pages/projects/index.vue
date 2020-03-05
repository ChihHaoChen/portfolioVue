<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0 fill-height class="topContainer">
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
.topContainer {
  background-color: #dbffc8;
}

.project-card {
  margin-top: 0px;
  width: 100%;
  height: 100%;
  align-self: center;
  padding-bottom: 0px;
  margin-bottom: 0px;
  position: relative;
}
</style>
