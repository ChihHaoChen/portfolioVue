<template>
  <v-content fluid>
    <v-btn @click="chkPDF"></v-btn>
    <!-- <PDFViewer
      v-bind="{url}"
    >
    </PDFViewer> -->
  </v-content>
</template>

<script>
import PDFViewer from '@/components/PDF/PDFViewer.vue'
export default {
  components: {
    PDFViewer
  },
  computed: {
    loadResumePDF() {
      return this.$store.getters.loadProfile
    }
  },
  methods: {
    chkPDF()  {
      console.log(String(this.$store.getters.loadProfile))
    }
  },
  data()  {
    return {
      url: String(this.$store.getters.loadProfile.resumePDF)
      // url: "https://portfoliopdf.s3.us-east-2.amazonaws.com/ChihHaoChen_Resume.pdf"
    };
  }
}
</script>
