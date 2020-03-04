<template>
  <v-app>
    <v-content fluid>
      <ul class="cb-slideshow">
        <div v-for="profile in profiles" :key="profile.id">
          <span :style="backgroundClass(profile)" fluid>
          </span>
          <div>
            <h3>{{ profile.title }}</h3>
            <h2>{{ profile.subtitle }}</h2>
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
          title: profile["aboutTitle"],
          subtitle: profile["aboutSubTitle"],
          path: profile["aboutBackgroundImage"]
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
  color: rgb(14, 0, 0);
}

.cb-slideshow div div h3 {
  font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
  font-size: 60px;
  font-style: bold;
  padding: 0;
  line-height: 100px;
}

.cb-slideshow div div h2 {
  font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
  font-size: 60px;
  padding: 0;
  line-height: 100px;
}

.button-style {
  position: relative;
  font-size: 33px;
  color: white;
  border: 4px solid white;
  width: 240px;
  border-radius: 10px;
  transition: all 0.5s;
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  margin-bottom: 15px;
  height: 60px;
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
  /* right: 20px; */
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

@media screen and (max-width: 1140px) {
  .cb-slideshow li div h3 {
    font-size: 60px;
  }
  .cb-slideshow li div h2 {
    font-size: 60px;
  }
}

@media screen and (max-width: 800px) {
  .cb-slideshow li div h3 {
    font-size: 40px;
  }
  .cb-slideshow li div h2 {
    font-size: 40px;
  }
  .button-style {
    font-size: 22px;
    width: 160px;
    height: 40px;
    border: 2.6px solid white;
  }
}
</style>
