<template>
  <ul class="cb-slideshow">
    <li v-for="image in images" :key="image.id">
      <span :style="backgroundClass(image)">
      </span>
      <div>
        <h3>{{ image.title }}</h3>
        <h2>{{ image.subtitle }}</h2>
      </div>
      <v-btn class="button-style">PORTFOLIO</v-btn>
    </li>
  </ul>
</template>

<script>
export default {
  data()  {
    return {
      images: [{
      	id: 1,
        title: "Hi, I'm Chih-Hao,",
        subtitle: "a full-stack developer in APP development.",
        path: 'https://lorempixel.com/1920/1080/sports/2/'
      }]
    }
  },
  methods: {
    backgroundClass(image) {
      return {
        'background-image': `url(${image.path})`,
      }
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
  color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
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
  color: transparent;
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
    transform: scale(1.1) rotate(2deg);
  }
  25% {
    opacity: 1;
    transform: scale(1.1) rotate(2deg);
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


