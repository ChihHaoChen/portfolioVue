<template>
  <v-content fluid class=pdf-card>
    <PDFViewer
      v-bind="{url}"
      @document-errored="onDocumentErrored"
      >
    </PDFViewer>
  </v-content>
  <!-- <v-content>
    <v-btn>Test</v-btn>
  </v-content> -->
</template>

<script>
import PDFViewer from '@/components/PDF/PDFViewer.vue'

export default {
  components: {
    PDFViewer
  },

  data() {
    return {
      // url: "https://cdn.filestackcontent.com/5qOCEpKzQldoRsVatUPS",
      url: "https://app.box.com/s/fb8z67dpvkspyt96gnikuhskbqjt4kcd",
      documentError: undefined,
      enableUploader: process.env.VUE_APP_UPLOAD_ENABLED === 'true',
    };
  },

  methods: {
    urlUpdated(url) {
      this.documentError = undefined;
      this.url = url;
    },
    onDocumentErrored(e) {
      this.documentError = e.text;
    },
  }
}
</script>

<style scoped>
/* .pdf-card {
  margin-top: 0px;
  align-self: center;
} */
</style>


