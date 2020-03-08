<template>
  <v-app>
    <v-content fluid>
      <ul class="cb-slideshow">
        <div v-for="profile in profiles" :key="profile.id">
          <span :style="backgroundClass(profile)" fluid />
          <div>
            <p class="top-title">
              {{ profile.title }}
            </p>
            <p class="sub-title">
              {{ profile.subtitle }}
            </p>
            <button class="button-style" @click="toProjects">
              <span>PROJECTS</span>
            </button>
            <button class="button-style" @click="toResearch">
              <span>RESEARCH</span>
            </button>
          </div>
        </div>
      </ul>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    const profile = this.$store.getters.loadProfile[0]
    return {
      profiles: [
        {
          id: 1,
          title: profile["introductionName"],
          subtitle: profile["introductionTitle"],
          path: profile["introductionBackgroundImage"]
        }
      ]
    }
  },
  computed: {
    totalBackgroundImages() {
      return this.images.length
    }
  },
  methods: {
    backgroundClass(profile) {
      return {
        "background-image": `url(${profile.path})`
      }
    },
    toProjects() {
      this.$router.push({
        path: "/projects",
        props: true
      })
    },
    toResearch() {
      this.$router.push({
        path: "/research",
        props: true
      })
    }
  }
}
</script>

<style>
.cb-slideshow,
.cb-slideshow:after {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.cb-slideshow div span {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
  background-blend-mode: overlay;
  opacity: 0;
  z-index: 0;
  animation: imageAnimation 20s linear infinite 0s;
}
.cb-slideshow div div {
  z-index: 1000;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 80%;
  text-align: left;
  opacity: 1;
  color: rgb(255, 255, 255);
}
.top-title {
  font-family: "Courier";
  font-size: 4em;
  font-style: bold;
  padding: 5px 0 0 0;
  line-height: 1em;
  font-weight: bold;
}

.sub-title {
  font-family: "Blinker";
  font-size: 3em;
  padding: 0 0 10px 0;
  line-height: 1em;
  color: #fdebd0;
}

.button-style {
  position: relative;
  font-size: 30px;
  color: white;
  border: 4px solid white;
  width: 220px;
  border-radius: 16px;
  cursor: pointer;
  display: inline-block;
  padding: 4px;
  margin-bottom: 15px;
  height: 55px;
  margin-right: 10px;
  font-family: "Blinker";
  text-align: center;
  vertical-align: middle;
}

.button-style span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  padding-left: 10px;
}

.button-style span:after {
  content: "\00bb";
  position: relative;
  opacity: 0;
  top: 0;
  transition: 0.5s;
}

.button-style:hover span {
  padding-right: 25px;
}

.button-style:hover span:after {
  opacity: 1;
  right: 0;
}
@keyframes imageAnimation {
  0% {
    opacity: 1;
    animation-timing-function: ease-in;
  }
  8% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    /* transform: scale(1.1) rotate(2deg); */
  }
  25% {
    opacity: 1;
    /* transform: scale(1.1) rotate(2deg); */
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 1260px) {
  .top-title {
    font-size: 3.5em;
  }
  .sub-title {
    font-size: 2.5em;
  }
}
@media screen and (max-width: 800px) {
  .top-title {
    font-size: 2.5em;
  }
  .sub-title {
    font-size: 1.8em;
  }
  .button-style {
    font-size: 22px;
    width: 140px;
    height: 45px;
    border: 4px solid white;
    margin-bottom: 10px;
    text-align: center;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
