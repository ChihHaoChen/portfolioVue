<template>
  <v-container fluid ma-0 pa-0 class="containerSetup">
    <v-layout
      v-for="(project, iProject) in projects"
      :key="iProject"
      row
      justify-center
      align-center
      ma-0
      pa-0
      fluid
      class="layoutSetup"
    >
      <v-container wrap align-center fluid class="timeline-wrapper">
        <v-flex fluid xs12 sm12 md12 lg12 xl12>
          <ul class="StepProgress">
            <li class="StepProgress-item" :class="'is-done'">
              <div class="bold time">
                {{ `${project.start} - ${project.end}` }}
              </div>
              <v-container fluid class="card-layout">
                <div class="card-title">
                  {{ project.title }}
                </div>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg7 xl7 class="left-card">
                    <div
                      v-for="(descriptionPargarph,
                              indexParagarph) in project.description"
                      :key="indexParagarph"
                    >
                      <p class="descriptionPara">
                        {{ descriptionPargarph }}
                      </p>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm12 md12 lg5 xl5 class="right-card">
                    <div>
                      <ul class="summaryList">
                        <li
                          v-for="point in project.summary.points"
                          :key="point.textid"
                          class="summaryPoints"
                        >
                          {{ point.text }}
                        </li>
                      </ul>
                    </div>
                    <div class="text-center">
                      <v-btn
                        class="detail-btn"
                        :href="project.detailLink"
                        color="#006400"
                      >
                        DETAILS
                        <span />
                      </v-btn>
                    </div>
                    <div class="tech-title">
                      TECHNOLOGIES
                      <div>
                        <v-chip
                          v-for="(technology, i) in project.technologies"
                          :key="i"
                          label
                          class="tech-text"
                        >
                          {{ technology.item }}
                        </v-chip>
                      </div>
                    </div>
                  </v-flex>
                  <CoolLightBox
                    :items="zoomItems"
                    :index="index"
                    @close="index = null"
                  />
                  <div v-swiper="swiperOption" :instanceName="project.id">
                    <div class="swiper-wrapper">
                      <div
                        v-for="(item, imageIndex) in project.mediaItems"
                        :key="imageIndex"
                        class="swiper-slide"
                      >
                        <div
                          v-if="!(item.videoUrl == undefined)"
                          class="video-container"
                        >
                          <iframe
                            class="iframe-wrapper"
                            :src="videoUrl(item.videoUrl)"
                          />
                        </div>
                        <img
                          v-else
                          v-tippy="{
                            followCursor: true,
                            interactive: true,
                            arrow: true,
                            arrowType: 'round',
                            size: 'large'
                          }"
                          :src="item.src"
                          class="imageContainer"
                          content="Click to zoom the image!"
                          @click="
                            zoomImage(
                              item.src,
                              iProject,
                              imageIndex,
                              project.mediaItems
                            )
                          "
                        >
                      </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets" />
                    <div
                      slot="button-prev"
                      class="swiper-button-prev swiper-button-white"
                    />
                    <div
                      slot="button-next"
                      class="swiper-button-next swiper-button-white"
                    />
                  </div>
                </v-layout>
              </v-container>
            </li>
          </ul>
          <hr class="card-divider" >
        </v-flex>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue"
import VueTippy, { TippyComponent } from "vue-tippy"
import "tippy.js/themes/light.css"
import CoolLightBox from "vue-cool-lightbox"
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css"

Vue.use(VueTippy)
Vue.component("tippy", TippyComponent)

Vue.use(VueTippy, {
  directive: "tippy",
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
})

export default {
  name: "TimeProjectCard",
  components: {
    CoolLightBox
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      selectedImage: null,
      selectedSection: null,
      index: null,
      zoomItems: [],
      swiperOption: {
        loop: true,
        autoHeight: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        effect: "fade",
        allowTouchMove: false,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    }
  },
  methods: {
    videoUrl(url) {
      return `https://www.youtube.com/embed/` + url
    },
    zoomImage(url, iProject, index, items) {
      this.selectedImage = url
      this.selectedSection = iProject
      this.index = index
      this.zoomItems = items
    }
  }
}
</script>

<style scoped>
.containerSetup {
  background-color: #dbffc8;
}

.layoutSetup {
  background-color: #dbffc8;
}

.left-card {
  padding-right: 40px;
}

.right-card {
  padding-top: 0;
}

.videoContainer {
  position: relative;
}

.time {
  position: absolute;
  left: -70px;
  top: -10px;
}
.timeline-wrapper {
  max-width: 1980px;
  min-width: 700px;
  width: 80%;
  position: relative;
  font-family: "Blinker";
  font-size: 20px;
  margin: 0;
  padding: 5px;
  padding-left: 40px;
  margin-top: 10px;
}
.StepProgress {
  position: relative;
  padding-left: 45px;
  list-style: none;
  -webkit-transition: 2s; /* For Safari 3.1 to 6.0 */
  transition: 2s;
}
.StepProgress-item {
  position: relative;
  counter-increment: list;
}
.StepProgress-item::before {
  display: inline-block;
  content: "";
  position: absolute;
  left: 38px;
  height: 100%;
  width: 10px;
  border-left: 2px solid green;
}
.StepProgress-item::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 33px;
  width: 12px;
  height: 12px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  font-size: 10px;
  color: #fff;
  text-align: center;
  border: 2px solid green;
}
.card-layout {
  padding-left: 20px;
  min-height: max-content;
  background-color: #dbffc8;
  max-width: 1920px;
  min-width: 640px;
  width: 95%;
  margin-left: 40px;
  position: relative;
}
.card-item {
  font-size: 20px;
  padding-left: 20px;
}
.card-title {
  font-size: 32px;
  font-family: "Blinker";
}
.tech-title {
  font-size: 20px;
  font-family: "Blinker";
  color: grey;
}
.tech-text {
  font-size: 14px;
  font-family: "Lucida Sans", Geneva, Verdana, sans-serif;
  color: white;
  background-color: #3cb371;
  text-align: center;
  border-radius: 5px;
  margin-inline: 5px;
  margin-left: 0px;
}

.detail-btn {
  font-size: 20px;
  font-family: "Blinker";
  color: white;
  display: inline-flexbox;
  width: 120px;
  height: 40px;
  border-radius: 6px;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  vertical-align: middle;
  margin: 1px;
}

.detail-btn span {
  cursor: pointer;
  display: inline-flexblock;
  transition: 0.5s;
  position: relative;
  margin-left: -15px;
  margin-right: 8px;
}

.detail-btn span:after {
  content: '\00bb';
  position: relative;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.detail-btn:hover span {
  padding-left: 25px;
}

.detail-btn:hover span:after {
  opacity: 1;
  right: 0;
}

.summaryList {
  list-style: none;
  margin-left: 0;
  padding-left: 1.2em;
  text-indent: 5px;
}
.summaryPoints::before {
  content: "\25B8";
  display: block;
  float: left;
  width: 1.2em;
  color: #006400;
  padding-right: 5px;
}
.card-divider {
  background-color: transparent;
  border: 2px solid #006400;
  width: 90%;
  opacity: 0.6;
  margin-left: 90px;
  margin-right: 80px;
  margin-top: 1%;
  border-radius: 50%;
  position: relative;
}

.swiper-wrapper {
  margin-top: 20px;
  width: 100vw;
  min-height: 100%;
  border: none;
}

.swiper-slide {
  justify-content: center;
  align-items: center;
}

.imageContainer {
  padding: 0;
  position: relative;
  border-radius: 16px;
  width: 100%;
}

.descriptionPara {
  text-indent: 18px;
  display: inline-block;
}

.video-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  perspective: 1px;
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
  overflow: hidden;
}

@media all and (min-width: 0px) and (max-width: 1260px) {
  .time {
    position: relative;
    left: 0px;
    top: 0px;
  }

  .timeline-wrapper {
    max-width: 1260px;
    width: 90%;
    margin: 0;
    padding: 0;
    margin-left: 5%;
    padding-right: 5%;
  }

  .card-layout {
    padding-left: 0px;
    margin-left: 10px;
    min-height: 600px;
    width: 100%;
  }

  .left-card {
    padding-right: 0px;
  }

  .right-card {
    padding-top: 0px;
  }

  .StepProgress {
    position: relative;
    padding-left: 0px;
    padding-right: 0px;
    list-style: none;
    -webkit-transition: 2s; /* For Safari 3.1 to 6.0 */
    transition: 2s;
  }

  .StepProgress-item {
    position: relative;
    counter-increment: list;
  }

  .StepProgress-item::before {
    left: -12px;
    border-left: 2px solid green;
    top: 15px;
  }

  .StepProgress-item::after {
    left: -17px;
    top: 10px;
  }

  .card-divider {
    background-color: transparent;
    border: 1px solid #006400;
    width: 100%;
    opacity: 0.6;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 50%;
    position: relative;
    top: 5px;
  }
}
</style>
