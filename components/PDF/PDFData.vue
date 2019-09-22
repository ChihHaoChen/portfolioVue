<script>
import range from 'lodash/range';
import PDFJS from 'pdfjs-dist';
import PDFJSWorker from 'pdfjs-dist/build/pdf.worker.min';

PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker;
function getDocument(url) {
  // Using import statement in this way allows Webpack
  // to treat pdf.js as an async dependency so we can
  // avoid adding it to one of the main bundles
  return import(
	  'pdfjs-dist').then(pdfjs => pdfjs.getDocument(url));	
}
// pdf: instance of PDFData
// see docs for PDF.js for more info
function getPages(pdf, first, last) {
  const allPages = range(first, last+1).map(number => pdf.getPage(number));
  return Promise.all(allPages);
}
const BUFFER_LENGTH = 10;
function getDefaults() {
  return {
    pages: [],
    cursor: 0,
  };
}
export default {
  name: 'PDFData',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return Object.assign(getDefaults(), {
      pdf: undefined,
    });
  },
  watch: {
    url: {
      handler(url) {
        getDocument(url)
          .then(pdf => {
						this.pdf = pdf
						console.log("pdf loaded")
						})
          .catch(response => {
            this.$emit('document-errored', {text: 'Failed to retrieve PDF due to', response});
            console.log('Failed to retrieve PDF due to', response);
          });
      },
      immediate: true,
    },
    pdf(pdf, oldPdf) {
      if (!pdf) console.log("No PDF");
			if (oldPdf) Object.assign(this, getDefaults());
      this.$emit('page-count', this.pageCount);
      this.fetchPages();
    },
  },
  computed: {
    pageCount() {
      return this.pdf ? this.pdf.numPages : 0;
    },
  },
  methods: {
    fetchPages(currentPage = 0) {
      if (!this.pdf) return;
      if (this.pageCount > 0 && this.pages.length === this.pageCount) return;
      const startIndex = this.pages.length;
      if (this.cursor > startIndex) return;
      const startPage = startIndex + 1;
      const endPage = Math.min(Math.max(currentPage, startIndex + BUFFER_LENGTH), this.pageCount);
      this.cursor = endPage;
      console.log(`Fetching pages ${startPage} to ${endPage}`);
      getPages(this.pdf, startPage, endPage)
        .then((pages) => {
					const deleteCount = 0;
					console.log(pages)
          this.pages.splice(startIndex, deleteCount, ...pages);
          return this.pages;
        })
        .catch((response) => {
          this.$emit('document-errored', {text: 'Failed to retrieve pages', response});
          console.log('Failed to retrieve pages', response);
        });
    },
    onPageRendered({text, page}) {
      console.log(text, page);
    },
    onPageErrored({text, response, page}) {
      console.log('Error!', text, response, page);
    },
  },
  created() {
    this.$on('page-rendered', this.onPageRendered);
    this.$on('page-errored', this.onPageErrored);
    this.$on('pages-fetch', this.fetchPages);
  },
  render(h) {
    return h('div', [
    //   this.$scopedSlots.preview({
    //     pages: this.pages,
    //   }),
      this.$scopedSlots.document({
        pages: this.pages,
      }),
    ]);
  },
};
</script>