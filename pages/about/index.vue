<template>
  <v-app>
    <v-content fluid>
      <v-layout column>
        <v-container fluid ma-0 pa-0 class="aboutMeContainer">
          <v-row>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg7 xl7>
                <v-card fluid class="leftCard">
                  <v-card-title>
                    <h2 class="aboutBanner">About me</h2>
                  </v-card-title>
                  <v-card-text class="aboutMainContent">
                    test
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md12 lg5 xl5>
                <v-card fluid class="rightCard">
                  <p>
                    Tell me more
                  </p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-row>
        </v-container>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script></script>

<style>
.aboutBanner {
  background-color: #dbffc8;
  text-align: center;
  font-size: 8em;
  font-family: "Blinker";
}
.aboutMeContainer {
  background-color: #dbffc8;
  height: 40%;
  width: 100%;
}
.leftCard {
  background-color: #150280;
  position: relative;
  width: 100%;
  height: 400px;
  padding: 40px 0 0 40px;
}
.rightCard {
  background-color: #801502;
  position: relative;
  width: 100%;
  height: 400px;
}
.aboutMainContent {
  background-color: #dbffc8;
  font-size: 3em;
  padding: 0 0 0 20px;
  color: #666864;
}
</style>
