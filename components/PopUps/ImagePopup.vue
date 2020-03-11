<template>
  <!-- <PopupRouterView
    v-if="isZoomed"
    :label="product.name"
    @close="isZoomed = false"
  >
    <PopupOverlay slot="backdrop" /> -->
    <!-- <PopupLightbox> -->
    <!-- <img
        v-if="product.img"
        :src="product.img.src"
        :alt="product.img.description"
      > -->
    <!-- <v-container fluid class="carousel-container"> -->
      <!-- <v-carousel
        hide-delimiter-background
        :cycle="false"
        show-arrows-on-hover
        show-arrows
        style="height:100%"
        class="carousel"
      >
        <v-carousel-item
          v-for="(src, i) in product.imgs.src"
          :key="i"
          :src="src"
        />
      </v-carousel> -->
      <!-- <div>
      <CoolLightBox :items="displayItems" :index="index" loop @close="index = null" />
      <div class="images-wrapper">
        <div
          class="image"
          v-for="(image, imageIndex) in displayItems"
          :key="imageIndex"
          @click="setIndex(imageIndex)"
          :style="{ backgroundImage: 'url(' + image.src + ')' }"
        ></div>
      </div>
      </div> -->
    <!-- </v-container> -->
    <!-- </PopupLightbox> -->
  <!-- </PopupRouterView> -->
</template>

<script>
// import PopupLightbox from "./PopupLightbox.vue"
import PopupOverlay from "./PopupOverlay.vue"
import PopupRouterView from "./PopupRouterView.vue"

import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css"

export default {
  name: "ImagePopup",
  components: {
    PopupOverlay,
    PopupRouterView
  },
  props: {
    showZoomedImage: {
      required: true,
      type: Boolean
    },
    selectedIndex: {
      required: true,
      type: Number
    },
    displayItems: {
      required: true
    }
  },
  methods: {
    setIndex() {
      this.index = index
    }
  },
  data() {
    return {
      product: {},
      isZoomed: this.showZoomedImage,
      index: 0
    }
  },
  created() {
    // Usually you would fetch the product from an API.
    this.product = {
      name: "Fancy Product",
      items: {
        src: [
          "https://portfoliopdf.s3.us-east-2.amazonaws.com/Images/landingPageBackgroundCompressed.jpg",
          "https://portfoliopdf.s3.us-east-2.amazonaws.com/Projects/TB_API/Images/LearchAPI_FlowChart.png"
        ],
        description: "Simple white watch on white background."
      }
    }
  }
}
</script>

<style>
.carousel-container {
  position: relative;
  margin: 100px;
  width: 80%;
  height: 80vh;
  align-self: center;
  vertical-align: center;
  /* background-color: red; */
}
.carousel {
  position: relative;
  width: 100%;
  vertical-align: center;
  align-self: center;
}
.carousel-item {
  position: relative;
  width: 100%;
}
.images-wrapper {
  display: flex;
  height: 100000px;
}
.image {
  height: 300px;
  width: 300px;
  display: block;
  background-color: red;
}

</style>
