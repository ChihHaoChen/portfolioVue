<template>
  <v-content class=project-card> 
    <TimeResearchCard :publications="loadedPublications"/>
  </v-content>
</template>

<script>
import TimeResearchCard from '@/components/Cards/TimeResearchCard'
export default {
  components: {
    TimeResearchCard
  },
  computed: {
    loadedPublications()  {
      return this.$store.getters.loadedPublications
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

