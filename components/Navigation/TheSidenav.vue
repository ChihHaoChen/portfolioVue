<template>
  <v-content>
    <v-navigation-drawer app hidden-md-and-down :width="drawerWidth">
      <v-container class="sidenav-container">
        <v-layout column align-center justify-center>
          <v-flex class="mt-5" align-center justify-center>
            <v-avatar size="150" class="grey ligthen-2" align-center justif-center>
              <img src="@/assets/images/avatar.png" alt="">
            </v-avatar>
          </v-flex>
          <v-flex align-center justify-center>
            <p class="text-under-avatar" column align-center justify-center>
              CHIH-HAO CHEN <br/>
              SOFTWARE ENGINEER
            </p>
          </v-flex>
        </v-layout> 
        <v-divider dark></v-divider>
        <v-layout column align-start flat>
          <div class="navigation-draw-items">
            <ul class="nav-drawer-list">   
            <li class="nav-drawer-item"><nuxt-link to="/projects">PROJECTS</nuxt-link></li>
            <li class="nav-drawer-item"><nuxt-link to="/publications">PUBLICATIONS</nuxt-link></li>
            <li class="nav-drawer-item"><nuxt-link to="/cv">MY CV</nuxt-link></li>
            <li class="nav-drawer-item"><nuxt-link to="/about">ABOUT</nuxt-link></li>
            </ul>
          </div>
        </v-layout>
        <v-divider dark></v-divider>
        <v-layout row align-center justify-center class="icon-bar">
          <a href="mailto:chao700716@gmail.com">
            <img src="@/assets/images/email.png">
          </a>
          <a href="https://www.linkedin.com/in/chih-hao-chen-13583369/">
            <img src="@/assets/images/linkedin-box.png">
          </a>
          <a href=https://github.com/ChihHaoChen>
            <img src="@/assets/images/github-box.png" >
          </a>
          <v-spacer></v-spacer>      
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    drawerWidth: Number
  },
  data: () => ({
      isMobile: false,
    }),

    beforeDestroy () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize, { passive: true })
      }
    },
  computed: {
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods:  {
    onResize()  {
      this.isMobile = window.innerWidth < 1260
        this.$bus.$emit('controlHeader', this.isMobile)
      
    }
  }
}
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 300px;
  align-items: center;
  background-color:  	#006400;
  /* box-sizing: border-box;
  padding: 0 0px;
  margin: 0;
  padding: 0; */
}

.text-under-avatar  {
  position: relative;
  padding: 1em 0;
  font-size: 1.5em;
  margin: 0;
  text-align: center;
  color: white;
}

.nav-drawer-list {
list-style: none;
padding: 0 12.5px;
margin: 0;
text-align: left;
}
.nav-drawer-item {
margin: 20px 0;
}

.nav-drawer-item a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
}

.nav-drawer-item a:hover,
.nav-drawer-item a:active {
  color: cyan;
  font-size: 1.7rem;
}
 
.nav-drawer-item a.nuxt-link-active {
  font-size: 1.5rem;
  list-style-type: circle;
} 

.icon-bar {
  padding: 12.5px 12.5px;
  color: white;
}
</style>
