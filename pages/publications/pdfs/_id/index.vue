<template>
	<v-app>
		<v-content fluid class=pdf-card>
			<v-btn>{{pdfLink}}</v-btn>
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
		pdfLink()	{
			console.log("url is", this.$route.params.id)
			return this.$route.params.id
		}
	},
  data() {
    return {
			url: "https://cdn.filestackcontent.com/5qOCEpKzQldoRsVatUPS",
			// url: String(this.$route.params.url),
      documentError: undefined,
      enableUploader: process.env.VUE_APP_UPLOAD_ENABLED === 'true',
    };
	},
  methods: {
    urlUpdated(url) {
      this.documentError = undefined;
			this.url = url;
			
			// this.url = String($route.params.url)
    },
    onDocumentErrored(e) {
      this.documentError = e.text;
    },
  }
}
</script>

<style scoped>
</style>
