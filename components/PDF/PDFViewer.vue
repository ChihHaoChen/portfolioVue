<template>
	<div class="pdf-viewer">
		<PDFData
      class="pdf-viewer__main"
      :url="url"
      @page-count="updatePageCount"
      @page-focus="updateCurrentPage"
      @document-rendered="onDocumentRendered"
      @document-errored="onDocumentErrored"
      >
      <template v-slot:document="{pages}">
        <PDFDocument
          class="pdf-viewer__document"
          :class="{ 'preview-enabled': isPreviewEnabled }"
          v-bind="{pages, scale, optimalScale, fit, currentPage, pageCount, isPreviewEnabled}"
          @scale-change="updateScale"
          />
      </template>
    </PDFData>
	</div>
</template>

<script>
import PDFDocument from "./PDFDocument"
import PDFData from "./PDFData"

function floor(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.floor(value * multiplier) / multiplier;
}

export default {
  name: 'PDFViewer',
  components: {
    PDFDocument,
    PDFData
  },
  props: {
    url: String,
  },
  data() {
    return {
      scale: undefined,
      optimalScale: undefined,
      fit: undefined,
      currentPage: 1,
      pageCount: undefined,
      isPreviewEnabled: false,
    };
  },
  methods: {
    onDocumentRendered() {
      this.$emit('document-errored', this.url);
    },
    onDocumentErrored(e) {
      this.$emit('document-errored', e);
    },
    updateScale({scale, isOptimal = false}) {
      const roundedScale = floor(scale, 2);
      if (isOptimal) this.optimalScale = roundedScale;
      this.scale = roundedScale;
    },
    updateFit(fit) {
      this.fit = fit;
    },
    updatePageCount(pageCount) {
			this.pageCount = pageCount;
    },
    updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    togglePreview() {
      this.isPreviewEnabled = !this.isPreviewEnabled;
    },
  },
  watch: {
    url() {
      this.currentPage = undefined;
    },
  },
  mounted() {
    document.body.classList.add('overflow-hidden');
    
  }
}
</script>

