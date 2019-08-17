<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12 >
      <div class="timeline-wrapper" > 
      <ul class="StepProgress" > 
        <li class="StepProgress-item" v-for="(project, i) in projects" v-bind:class="'is-done'" :key="i">
        <div class="bold time">{{`${project.start} - ${project.end}`}} </div> 
        <v-container class="card-layout" fluid>
          <v-card flat class="card-item" width=640 column>
            <v-layout row wrap>
              <v-flex xs12 sm6 md6>
                <div class=card-title>
                  {{project.title}}
                </div>
                <div>
                  {{project.description}}
                </div>
                <div> 
                  <v-list dense>
                    <v-header class=summary-header>
                      {{project.summary.header}}
                    </v-header>
                    <v-list-item v-for="(point, i) in project.summary.points" :key="i">
                      <div class=summary-item>
                        {{point.text}}
                      </div>
                    </v-list-item>
                  </v-list>
                </div>
                <div class="text-center">
                  <v-btn class=detail-btn :href=project.detailLink color='#006400'>Details</v-btn>
                </div>
                <div class=tech-title>
                  TECHNOLOGIES
                  <div>
                    <v-list-item v-for="(technology, i) in project.technologies" :key="i">
                      <v-chip label class=tech-text>
                        {{technology.item}}
                      </v-chip>
                    </v-list-item> 
                  </div>
                </div>
              </v-flex>   
              <v-flex xs12 md6>  
                <v-list-item-avatar
                  size="125"
                  tile
                >
                  <v-img aspect-ratio="1" :src="project.src"></v-img>
                </v-list-item-avatar>
              </v-flex>
            </v-layout>
          </v-card>
        </v-container>
        </li>
      </ul>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: "TimeProjectCard",
  props: ['projects']
}
</script>

<style scoped>
.bold{font-weight:bold; color: black}
.time{position:absolute; left:-80px; top:-10px;}
.timeline-wrapper {
  min-width: 400px;
  font-family: 'Blinker';
  font-size: 20px;
}
.StepProgress {
  position: relative;
  padding-left: 45px;
  list-style: none;
  
  -webkit-transition: 2s; /* For Safari 3.1 to 6.0 */
  transition: 2s;
}
.StepProgress-item {
  
  position: relative;
  counter-increment: list;
}

.StepProgress-item::before {
  display: inline-block;
  content: '';
  position: absolute;
  left: 38px;
  height: 100%;
  width: 10px;
}
.StepProgress-item::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  left: 33px;
  width: 12px;
  height: 12px;
  border: 2px solid #CCC;
  border-radius: 50%;
  background-color: #FFF;
}
.StepProgress-item.is-done::before {
  border-left: 2px solid green;
}
.StepProgress-item.is-done::after {
  /*content: "?";*/
  font-size: 10px;
  color: #FFF;
  text-align: center;
  border: 2px solid green;
}
.StepProgress strong {
  display: block;
}
.card-layout  {
  padding-left: 50px;
}
.card-item  {
  font-size: 20px;
  background-color: white;
  padding-left: 20px;
}

.card-title {
  font-size: 32px;
  font-family: 'Blinker'
}

.summary-header {
  font-size: 24px;
  font-family: 'Blinker';
}

.summary-item {
  color: grey;
  padding-left: 20px;
}

.tech-title {
  font-size: 20px;
  font-family: 'Blinker';
  color: grey;
}

.tech-text  {
  font-size: 14px;
  font-family:'Lucida Sans', Geneva, Verdana, sans-serif;
  color: white;
  background-color:  #3CB371;
  text-align: center;
}

.detail-btn {
  font-size: 16px;
  color:  white;
}

</style>

