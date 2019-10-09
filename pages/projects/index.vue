<template>
  <v-app>
    <v-content class=project-card> 
      <TimeProjectCard :projects="loadedProjects"/>
    </v-content>
  </v-app>
</template>

<script>
import TimeProjectCard from '@/components/Cards/TimeProjectCard'
export default {
  components: {
    TimeProjectCard
  },
  computed: {
    loadedProjects()  {
      return this.$store.getters.loadedProjects
    }
  }
};
</script>

<style scoped>
.project-card {
  margin-top: 0px;
  align-self: center;
}
</style>

