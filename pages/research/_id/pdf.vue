<template>
  <v-app>
    <iframe
      :src="getPDFPath()"
      class="iframe-wrapperb"
      style="width: 100vw;
    height: 100%;"
    />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      url: String(this.$store.getters.loadPDF),
      documentError: undefined,
      enableUploader: process.env.VUE_APP_UPLOAD_ENABLED === "true",
      isMobile: false
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true })
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener("resize", this.onResize, { passive: true })
  },
  methods: {
    getPDFPath() {
      if (!this.isMobile) {
        return this.url + "#page=1&view=FitW&zoom=100"
      } else {
        return (
          "https://docs.google.com/viewer?url=" + this.url + "&embedded=true"
        )
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 1260
      this.$bus.$emit("controlHeader", this.isMobile)
    }
  }
}
</script>

<style scoped>
.iframe-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
}
</style>
