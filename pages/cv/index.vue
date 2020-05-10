<template>
  <v-app>
    <iframe
      :src="getPDFPath()"
      class="iframe-wrapperb"
      style="width: 100vw;
    height: 100%; border: none;"
    />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.getters.loadProfile[0]["resumePDF"],
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
        return this.url
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
.resume-page {
  margin-top: 0px;
  background-color: white;
}

.iframe-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  overflow: scroll;
}
</style>
