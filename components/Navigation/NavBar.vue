<template>
  <nav>
    <!-- <v-toolbar flat v-if="topHeader" app class="the-header" > -->
      <v-container v-if="topHeader" align-center justify-center fluid class="top-container" hidden-lg-and-up>
        <v-layout column align-center justify-center>
          <v-flex class="mt-5" column align-center justify-center>
            <v-avatar size="150" class="grey ligthen-2" align-center justif-center>
              <img src="@/images/avatar.png" alt="">
            </v-avatar>
            <p class="text-under-avatar" column align-center justify-center>
              Chih-Hao Chen <br/>
              Software Engineer
            </p>
          </v-flex>
        </v-layout> 
        <v-divider dark></v-divider>
        <v-layout row align-center justify-center class="icon-bar">
          <a href="mailto:chao700716@gmail.com">
            <img src="@/images/email.png">
          </a>
          <a href="https://www.linkedin.com/in/chih-hao-chen-13583369/">
            <img src="@/images/linkedin-box.png">
          </a>
          <a href=https://github.com/ChihHaoChen>
            <img src="@/images/github-box.png" >
          </a>
          
          <v-spacer></v-spacer>
          <v-icon dark large @click="drawer = !drawer">
          dashboard
          </v-icon>
        </v-layout>
        <v-divider dark class="style-divider"></v-divider>
        <v-layout column align-end flat v-if="drawer">
          <div class="navigation-items">
            <ul class="nav-list">   
            <li class="nav-item"><nuxt-link to="/projects">PROJECTS</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/publications">PUBLICATIONS</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/cv">MY CV</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/about">ABOUT</nuxt-link></li>
            </ul>
          </div>
        </v-layout>
      </v-container>
    <!-- </v-toolbar> -->
  </nav>
</template>

<script>

export default {
  name: "NavBar",
  data()  {
    return {
      drawer: false,
      topHeader: false
    }
  },
  methods:  {
    gitHubLink()  {

    },
    linkedInLink()  {
      
    }
  }
}
</script>

<style scoped>
  .top-container {
    width: 100%;
    align-items: center;
    background-color:	#006400;
    box-sizing: border-box;
    padding: 0 0px;
    margin: 0;
    padding: 0;
  }

  .text-under-avatar  {
    position: relative;
    padding: 1em 0;
    font-size: 1.5em;
    margin: 0;
    text-align: center;
    color: white;
  }

  .nav-list {
  list-style: none;
  padding: 0 12.5px;
  margin: 0;
  text-align: right;
  }

  .nav-item {
  margin: 20px 0;
  }

  .nav-item a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }

  .nav-item a:hover,
  .nav-item a:active {
    color: cyan;
  }

  .icon-bar {
    padding: 12.5px 12.5px;
    color: white;
  }

</style>


