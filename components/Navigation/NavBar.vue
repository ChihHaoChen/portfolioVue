<template>
  <nav>
    <v-toolbar flat v-if="topHeader" app class="the-header" extension-height="360">
      <v-container align-center justify-center fluid>
        <v-layout column align-center justify-center>
          <v-flex class="mt-5" column align-center justify-center>
            <v-avatar size="150" class="grey ligthen-2" align-center justif-center>
              <img src="@/images/avatar.jpg" alt="">
            </v-avatar>
            <p class="subheading mt-2" column align-content-center justify-center>
              Chih-Hao Chen <br/>
              Software Engineer
            </p>
          </v-flex>
        </v-layout> 
        <v-divider></v-divider>
        <v-layout column align-center justify-center>
          <v-icon @click="drawer = !drawer">
          dashboard
          </v-icon>
        </v-layout>
        <v-divider></v-divider>
        <v-layout column align-end flat v-if="drawer">
          <v-list> 
            <v-list-tile>
              <p>test1</p>
            </v-list-tile>
          </v-list>
          <v-spacer></v-spacer>
          <v-list>
            <v-list-tile>
              <p>test2</p>
            </v-list-tile>
          </v-list>
        </v-layout>
      </v-container>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data()  {
    return {
      drawer: false,
      topHeader: true
    }
  }
}
</script>

<style scoped>
  .the-header {
    width: 100%;
    align-items: center;
    background-color: rgb(77, 179, 77);
    box-sizing: border-box;
    padding: 0 0px;
    margin: 0;
    padding: 0;
  }

</style>


