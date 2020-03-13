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
      <v-flex fluid xs12 sm12 md12 lg12 xl12>
        <v-container fluid class="timeline-wrapper">
          <ul class="StepProgress">
            <li class="StepProgress-item" :class="'is-done'">
              <div class="bold time">
                {{ `${project.start} - ${project.end}` }}
              </div>
              <v-container fluid class="card-layout">
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg7 xl7 class="left-card">
                    <div class="card-title">
                      {{ project.title }}
                    </div>
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
                        Details
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

                  <v-carousel
                    hide-delimiters
                    show-arrows-on-hover
                    show-arrows
                    :cycle="false"
                    class="carousel"
                  >
                    <v-carousel-item
                      v-for="(item, imageIndex) in project.mediaItems"
                      :key="imageIndex"
                      class="carousel-item"
                    >
                      <!-- <div
                        v-if="!(item.videoUrl == undefined)"
                        class="embed-responsive embed-responsive-16by9 content-wrapper"
                      >
                        <iframe
                          class="iframe-wrapper res-16by9"
                          width="100%"
                          height="500"
                          :src="videoUrl(item.videoUrl)"
                        />
                      </div> -->

                      <v-img
                        v-tippy="{
                          followCursor: true,
                          interactive: true,
                          arrow: true,
                          arrowType: 'round',
                          size: 'large'
                        }"
                        
                        :src="item.src"
                        class="imageContainer"
                        :contain="true"
                        :aspect-ratio="16 / 9"
                        content="Click to zoom the image!"
                        @click="
                          zoomImage(
                            item.src,
                            iProject,
                            imageIndex,
                            project.mediaItems
                          )
                        "
                      />
                    </v-carousel-item>
                    <span class="clearfix" />
                  </v-carousel>
                </v-layout>
              </v-container>
            </li>
          </ul>
          <hr class="card-divider" >
        </v-container>
      </v-flex>
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
      zoomItems: []
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
  padding-top: 45px;
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
  width: 100%;
  position: relative;
  font-family: "Blinker";
  font-size: 20px;
  margin: 0;
  padding: 5px;
  padding-left: 40px;
  margin-top: 10px;
  background-color: #dbffc8;
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
  padding-left: 60px;
  min-height: max-content;
  background-color: #dbffc8;
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
  font-size: 16px;
  color: white;
  margin-left: 0px;
  border-radius: 5px;
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
.carousel {
  border: none;
  width: 100vw;
  /* height: 100vh; */
  box-shadow: none;
  margin-top: 10px;
  border-radius: 20px;
  /* min-height: max-content; */
  background-color: blue;
  padding-bottom: 56.25%;
  position: relative;
}

.carousel-item {
  border: none;
  background-color: yellow;
  width: 100%;
  height: 100vh;
}
.imageContainer {
  background-color: red;
  padding: 0;
  position: relative;
}
.clearfix:after {
  content: "";
  clear: both;
}

.descriptionPara {
  text-indent: 22px;
}

@media all and (min-width: 0px) and (max-width: 1260px) {
  .time {
    position: relative;
    left: 0px;
    top: 0px;
  }
  .card-layout {
    padding-left: 0px;
    min-height: 600px;
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
    visibility: hidden;
  }
  .StepProgress-item::after {
    visibility: hidden;
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
  .content-wrapper {
    max-width: 900px;
    margin: 0 0 0 0;
  }

  .iframe-wrapper {
    top: 0;
    left: 0;
    width: 100%;
    min-height: max-content;
    border: 0;
    position: relative;
  }

  .iframe-wrapper iframe {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    min-height: max-content;
    height: 100%;
  }
}
</style>
