<template>
  <v-app>
    <v-container fluid>
    <v-layout row justify-center align-center>
      <ul class="cb-slideshow">
        <li v-for="image in images" :key="image.id">
          <span :style="backgroundClass(image)">
          </span>
          <div>
            <h3>{{ image.title }}</h3>
            <h2>{{ image.subtitle }}</h2>        
            <button class="button-style" @click="toProjects">
              <span>PROJECTS</span>
            </button>
            <br/>
            <button class="button-style" @click="toResearch">
              <span>RESEARCH</span>
            </button>
          </div>
        </li>
      </ul>
    </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data()  {
    return {
      images: [{
      	id: 1,
        title: "Hi, I'm Chih-Hao,",
        subtitle: "a full-stack developer in APP development.",
        path: 'https://portfoliopdf.s3.us-east-2.amazonaws.com/Images/backgroundAbout.jpg'
      }]
    }
  },
  methods: {
    backgroundClass(image) {
      return {
        'background-image': `url(${image.path})`,
      }
    },
    toProjects() {
      this.$router.push({
        path: '/projects',
        props: true
      })
    },
    toResearch() {
      this.$router.push({
        path: '/research',
        props: true
      })
    }
  },
  computed: {
    totalBackgroundImages() {
      return this.images.length;
    }
  }
}
</script>

<style>
.top-container {
  margin-top: 0px;
  align-self: center;
} 

.cb-slideshow,
.cb-slideshow:after {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 0;
}

.cb-slideshow li span {
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

.cb-slideshow li div {
  z-index: 1000;
  position: absolute;
  padding-left: 300px;
  top: 20px;
  left: 20px;
  width: 80%;
  text-align: left;
  opacity: 1;
  color: #fff;
}

.cb-slideshow li div h3 {
  font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
  font-size: 60px;
  font-style: bold;
  padding: 0;
  line-height: 100px;
}

.cb-slideshow li div h2 {
  font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
  font-size: 60px;
  padding: 0;
  line-height: 100px;
}

.button-style {
  position: relative;
  font-size: 32px;
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

.button-style span{
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  padding-left: 10px;
}

.button-style span:after{
  content: '\00bb';
  position: relative;
  opacity: 0;
  top: 0;
  /* right: 20px; */
  transition:0.5s;
}

.button-style:hover span{
  padding-right: 25px
}

.button-style:hover span:after{
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
}

@media screen and (max-width: 600px) {
  .cb-slideshow li div h3 {
    font-size: 40px
  }
}

</style>


