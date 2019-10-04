<template>
  <v-app>
    <v-content fluid class=project-card> 
      <TimeResearchCard :publications="loadedPublications"/>
    </v-content>
  </v-app>
</template>

<script>
import TimeResearchCard from '@/components/Cards/TimeResearchCard'

export default {
  components: {
    TimeResearchCard,
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
  margin-top: 0px;
  align-self: center;
}
</style>

