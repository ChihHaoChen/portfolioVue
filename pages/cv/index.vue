<template>
  <v-app>
    <v-content fluid class=resume-page>
    <PDFViewer
      v-bind="{url}"
    >
    </PDFViewer>
  </v-content>
  </v-app>
</template>

<script>
import PDFViewer from '@/components/PDF/PDFViewer.vue'
export default {
  components: {
    PDFViewer
  },
  data()  {
    return {
      url: this.$store.getters.loadProfile[0]["resumePDF"]
    };
  },
  computed: {
    loadProfile() {
      return this.$store.getters.loadProfile
    }
  }
}
</script>

<style scoped>
.resume-page {
  margin-top: 0px;
  background-color: white
}
</style>
