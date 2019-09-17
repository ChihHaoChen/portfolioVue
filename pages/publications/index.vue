<template>
  <v-content fluid class=project-card> 
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
  },
  methods: {
    
  }
};
</script>

<style scoped>
.project-card {
  margin-top: 30px;
  align-self: center;
}
</style>

