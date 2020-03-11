<template>
  <v-app>
    <v-content v-for="profile in profiles" :key="profile.id" class="topBody">
      <v-layout column>
        <v-container fluid ma-0 pa-0 class="cardContainer">
          <v-layout row wrap class="flexContainer">
            <v-flex xs12 sm12 md12 lg3 xl3>
              <v-card fluid color="#dbffc8" class="leftCard">
                <v-card-title>
                  <h2 class="aboutBanner">
                    About me
                  </h2>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 sm12 md12 lg9 x9>
              <v-card color="#dbffc8" class="rightCard">
                <v-card-text class="aboutMainContent">
                  <div
                    v-for="(contentPargarph, index) in profile.aboutContent"
                    :key="index"
                  >
                    <p class="cotentPara">
                      {{ contentPargarph }}
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container fluid ma-0 pa-0 class="cardContainer">
          <v-card fluid color="#dbffc8" dark class="mx-auto imageCard">
            <v-card-media :src="profile.aboutImages" />
          </v-card>
        </v-container>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    const profile = this.$store.getters.loadProfile[0]
    console.log(profile)
    return {
      profiles: [
        {
          aboutContent: profile["aboutMeContent"],
          aboutImages: profile["aboutImages"]
        }
      ]
    }
  }
}
</script>

<style>
.topBody {
  background-color: #dbffc8;
}
.cardContainer {
  background-color: #dbffc8;
  height: max-content;
  width: 100%;
  border-color: #dbffc8;
}
.aboutBanner {
  background-color: #dbffc8;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  font-size: 6em;
  font-family: "Blinker";
  position: relative;
  border: solid 10px #117864;
  border-radius: 50px;
}
.aboutMainContent {
  background-color: #dbffc8;
  font-size: 2em;
  margin: 0;
  padding: 0;
  color: #666864;
  text-align: left;
}
.imageCard {
  background-color: #dbffc8;
  width: 95%;
  min-height: max-content;
  margin: 20px;
  border-radius: 50px;
  border-color: #dbffc8;
}
.leftCard {
  position: relative;
  width: 100%;
  height: max-content;
  padding: 0;
  box-shadow: none;
  border-radius: 50px;
  text-align: center;
  vertical-align: middle;
  box-shadow: none;
  margin: 20px;
}
.rightCard {
  position: relative;
  width: 100%;
  height: max-content;
  box-shadow: none;
  margin-left: 40px;
}
.flexContainer {
  position: relative;
  width: 95%;
  margin: 10px 20px 5px 60px;
  padding: 0 30px 0 0;
}
.cotentPara {
  text-indent: 22px;
  font-size: 1em;
}

@media all and (min-width: 0px) and (max-width: 1260px) {
  .flexContainer {
    width: 98%;
    margin: 10px 20px 5px 10px;
    padding: 0 40px 0 0;
  }
  .rightCard {
    margin-left: 20px;
  }
}

@media all and (min-width: 1260px) and (max-width: 1400px) {
  .flexContainer {
    width: 96%;
    margin: 10px 20px 5px 20px;
    padding: 0 40px 0 0;
  }
  .leftCard {
    width: 300px;
    margin-left: 0px;
    overflow: hidden;
  }
  .rightCard {
    margin-left: 80px;
    padding-right: 20px;
  }
  .aboutBanner {
    word-wrap: break-word;
    overflow: hidden;
    font-size: 5em;
  }
}

@media all and (min-width: 1400px) and (max-width: 1920px) {
  .flexContainer {
    width: 96%;
    margin: 10px 20px 5px 20px;
    padding: 0 40px 0 0;
  }
  .leftCard {
    width: 98%;
    margin-left: 0px;
    overflow: hidden;
  }
  .rightCard {
    margin-left: 40px;
    padding-right: 20px;
  }
  .aboutBanner {
    word-wrap: break-word;
    overflow: hidden;
    font-size: 5em;
  }
}

@media all and (min-width: 1920px) and (max-width: 2880px) {
  .flexContainer {
    width: 97%;
    margin: 10px 20px 5px 20px;
    padding: 0 50px 0 0;
  }
  .aboutBanner {
    word-wrap: break-word;
    overflow: hidden;
    font-size: 6em;
  }
}
</style>
