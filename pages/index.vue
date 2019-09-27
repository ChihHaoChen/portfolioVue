<template>
  <v-layout fluid column wrap>
    <v-flex xs12 sm12>
      <v-parallax class = "homepage" :src="require('@/assets/images/background.jpg')">
      </v-parallax>
    </v-flex>
  </v-layout>
  

</template>

<script>
export default {

}
</script>

<style scoped>
  .homepage {
    transform: none;
    width: 100%;
  }
</style>


