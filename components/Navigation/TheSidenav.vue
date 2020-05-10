<template>
  <v-content>
    <v-navigation-drawer app :width="drawerWidth">
      <v-container class="sidenav-container">
        <v-layout column align-center justify-center>
          <v-avatar
            size="200"
            class="ligthen-2 mt-5"
            column
            align-center
            justify-center
          >
            <img :src="profile.avatarUrl" alt="" >
          </v-avatar>
          <p class="text-under-avatar">
            {{ profile.name }}
          </p>
          <p class="text-under-avatar-position">
            {{ profile.positionTitle }}
          </p>
        </v-layout>
        <v-divider dark />
        <v-layout column align-start flat>
          <div class="navigation-draw-items">
            <ul class="nav-drawer-list">
              <li class="nav-drawer-item">
                <nuxt-link to="/projects"> PROJECTS<span /> </nuxt-link>
              </li>
              <li class="nav-drawer-item">
                <nuxt-link to="/research"> RESEARCH<span /> </nuxt-link>
              </li>
              <li class="nav-drawer-item">
                <nuxt-link to="/cv"> RÉSUMÉ<span /> </nuxt-link>
              </li>
              <li class="nav-drawer-item">
                <nuxt-link to="/about"> ABOUT<span /> </nuxt-link>
              </li>
            </ul>
          </div>
        </v-layout>
        <v-divider dark />
        <v-layout row align-center justify-center class="icon-bar">
          <a :href="email">
            <img src="@/assets/images/email.png" >
          </a>
          <a :href="profile.linkedInLink">
            <img src="@/assets/images/linkedin-box.png" >
          </a>
          <a :href="profile.gitHubLink">
            <img src="@/assets/images/github-box.png" >
          </a>
          <v-spacer />
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    drawerWidth: Number,
    profile: {
      type: Object,
      default: true
    }
  },
  data() {
    return {
      isMobile: false,
      email: "mailto:" + this.profile.email
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true })
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener("resize", this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1260
      this.$bus.$emit("controlHeader", this.isMobile)
    }
  }
}
</script>

<style>
.sidenav-container {
  height: 100%;
  width: 300px;
  padding: 0 0 0 0;
  align-items: center;
  background-color: #117864;
  background-size: cover;
  position: relative;
  background-blend-mode: overlay;
}

.text-under-avatar {
  position: relative;
  padding: 1em 0 0 0;
  font-size: 2.2em;
  margin: 0;
  text-align: center;
  color: white;
  font-weight: bold;
  font-family: Courier New;
}

.text-under-avatar-position {
  position: relative;
  padding: 0.5em 0 1em 0;
  font-size: 2em;
  margin: 0;
  text-align: center;
  color: #fdebd0;
  font-family: "Blinker";
}

.nav-drawer-list {
  list-style: none;
  padding: 0 12.5px;
  margin: 10px;
  text-align: left;
}
.nav-drawer-item {
  margin: 20px 0;
}

.nav-drawer-item a {
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
  opacity: 0.5;
  font-family: "Blinker";
}

.nav-drawer-item a:hover,
.nav-drawer-item a:active {
  opacity: 1;
}

.nav-drawer-item a.nuxt-link-active {
  opacity: 1;
  font-size: 1.8em;
}

.nav-drawer-item a:hover span {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.icon-bar {
  padding: 12.5px 12.5px;
  color: white;
}
</style>
