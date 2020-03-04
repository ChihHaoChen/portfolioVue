<template>
  <v-content>
    <v-container app fluid class="top-container">
      <v-layout column align-center justify-center>
        <v-flex class="mt-5" align-center justify-center>
          <v-avatar
            size="200"
            class="grey ligthen-2"
            align-center
            justif-center
          >
            <img :src="profile.avatarUrl" alt="" />
          </v-avatar>
        </v-flex>
        <v-flex align-center justify-center>
          <p class="text-under-avatar" column align-center justify-center>
            {{ profile.name }} <br />
            {{ profile.positionTitle }}
          </p>
        </v-flex>
      </v-layout>
      <v-divider dark></v-divider>
      <v-layout row align-center justify-center class="icon-bar">
        <a :href="email">
          <img src="@/assets/images/email.png" />
        </a>
        <a :href="profile.linkedInLink">
          <img src="@/assets/images/linkedin-box.png" />
        </a>
        <a :href="profile.gitHubLink">
          <img src="@/assets/images/github-box.png" />
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
            <li class="nav-item">
              <nuxt-link to="/projects"><span />PROJECTS</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/research"><span />RESEARCH</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/cv"><span />MY RÉSUMÉ</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about"><span />ABOUT</nuxt-link>
            </li>
          </ul>
        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      default: true
    }
  },
  data() {
    return {
      drawer: false,
      topHeader: true,
      email: "mailto:" + this.profile.email
    }
  },
  mounted() {
    this.$bus.$on("controlHeader", sideBarOpen => {
      this.topHeader = sideBarOpen
    })
  }
}
</script>

<style scoped>
.top-container {
  width: 100%;
  align-items: center;
  background-color: #000200;
  box-sizing: border-box;
  padding: 0 0px;
  margin: 0;
  padding: 0;
}

.text-under-avatar {
  position: relative;
  padding: 1em 0;
  font-size: 2em;
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
  font-size: 1.8rem;
  opacity: 0.5;
}

.nav-item a:hover,
.nav-item a:active {
  opacity: 1;
}

.nav-item a.nuxt-link-active {
  opacity: 1;
  font-size: 1.8em;
}

.nav-item a:hover span {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0 5px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.icon-bar {
  padding: 12.5px 12.5px;
  color: white;
}
</style>
