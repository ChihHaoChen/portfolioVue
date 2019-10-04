<template>
	<v-app>
		<v-content fluid class=pdf-card>
			<PDFViewer
				v-bind="{url}"
				@document-errored="onDocumentErrored"
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
	computed: {
		loadPDF() {
			// Access the state of loadPDF in this.$store
			return this.$store.getters.loadPDF
		}
	},
  data() {
    return {
	    url: String(this.$store.getters.loadPDF),
      documentError: undefined,
      enableUploader: process.env.VUE_APP_UPLOAD_ENABLED === 'true',
    };
	},
  methods: {
    onDocumentErrored(e) {
      this.documentError = e.text;
    }
  }
}
</script>
