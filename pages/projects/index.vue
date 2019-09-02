<template>
  <v-content class=project-card> 
    <TimeProjectCard :projects="loadedProjects"/>
  </v-content>
</template>

<script>
import TimeProjectCard from '@/components/Cards/TimeProjectCard'
export default {
  components: {
    TimeProjectCard
  },
  created() {
    return this.$store.counter
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
  margin-top: 100px;
  align-self: center;
}
</style>

