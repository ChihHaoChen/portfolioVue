<template>
  <v-content class=project-card> 
    <TimeResearchCard :publications="loadedPublications"/>
    <v-btn @click.native="apiGet">Axios</v-btn>
  </v-content>
</template>

<script>
import TimeResearchCard from '@/components/Cards/TimeResearchCard'
import axios from "axios"

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
    apiGet()  {
      return axios.get("https://portfoliovue-6c2b7.firebaseio.com/publications.json")
      .then(response => {
        console.log(((response.request.response)))
      })
      .catch(err => {
        console.log(err)
      })
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

