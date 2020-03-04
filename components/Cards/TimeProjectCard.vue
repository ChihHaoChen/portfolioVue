<template>
  <v-container fluid>
    <v-layout
      v-for="(project, i) in projects"
      :key="i"
      row
      justify-space-between
      justify-center
      align-center
    >
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-container class="timeline-wrapper">
          <ul class="StepProgress">
            <li class="StepProgress-item" :class="'is-done'">
              <hr v-if="i != 0" class="card-divider" >
              <div class="bold time">
                {{ `${project.start} - ${project.end}` }}
              </div>
              <v-container fluid class="card-layout">
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg6 xl6>
                    <div class="card-title">
                      {{ project.title }}
                    </div>
                    <div>
                      {{ project.description }}
                    </div>
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
                  <v-flex xs12 sm12 md12 lg6 xl6>
                    <v-carousel :show-arrows="false">
                      <v-carousel-item
                        v-for="(item, i) in project.mediaItems"
                        :key="i"
                      >
                        <div
                          v-if="!(item.videoUrl == undefined)"
                          class="embed-responsive embed-responsive-16by9 content-wrapper"
                        >
                          <iframe
                            class="iframe-wrapper res-16by9"
                            width="100%"
                            height="800"
                            :src="videoUrl(item.videoUrl)"
                          />
                        </div>
                        <v-img v-else aspect-ratio="1" :src="item.src" />
                      </v-carousel-item>
                    </v-carousel>
                  </v-flex>
                </v-layout>
              </v-container>
            </li>
          </ul>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TimeProjectCard",
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    videoUrl(url) {
      return `https://www.youtube.com/embed/j9I0PxhExQM`
    }
  }
}
</script>

<style scoped>
.time {
  position: absolute;
  left: -70px;
  top: -10px;
}
.timeline-wrapper {
  min-width: 400px;
  font-family: "Blinker";
  font-size: 20px;
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
}
.card-item {
  font-size: 20px;
  background-color: white;
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
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid #006400;
  width: 90%;
  opacity: 0.6;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 50%;
  position: relative;
  top: 5px;
}

@media all and (min-width: 0px) and (max-width: 800px) {
  .time {
    position: relative;
    left: 0px;
    top: 0px;
  }
  .card-layout {
    padding-left: 0px;
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
    margin: 0 auto;
    background-color: #fff;
  }

  .iframe-wrapper {
    width: 100%;
    position: relative;
  }

  .res-4by3 {
    padding-bottom: 75%;
  }

  .res-16by9 {
    padding-bottom: 56.25%;
  }

  .iframe-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
