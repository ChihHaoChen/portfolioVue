<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12 >
      <div class="timeline-wrapper" > 
      <ul class="StepProgress" > 
        <li class="StepProgress-item" v-for="(project, i) in projects" v-bind:class="'is-done'" :key="i">
        <div class="bold time">{{`${project.start} - ${project.end}`}} </div> 
        <v-container class="card-layout" fluid>
          <v-card flat class="card-item" width=900 column>
            <v-layout row wrap>
              <v-flex xs12 sm6 md6>
                <div class=card-title>
                  {{project.title}}
                </div>
                <div>
                  {{project.description}}
                </div>
                <div> 
                  <ul class=summaryList>
                    <li v-for="point in project.summary.points" :key="point.textid" class=summaryPoints>
                      {{ point.text }}
                    </li>
                  </ul>
                </div>
                <div class="text-center">
                  <v-btn class=detail-btn :href=project.detailLink color='#006400'>Details</v-btn>
                </div>
                <div class=tech-title>
                  TECHNOLOGIES
                  <div>
                  <v-chip label v-for="(technology, i) in project.technologies" :key="i" class=tech-text>
                    {{technology.item}}
                  </v-chip>
                  </div>
                </div>
              </v-flex>   
              <v-flex> 
                <v-img aspect-ratio="1" :src="project.src"></v-img>
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
  border-radius: 5px;
  margin-inline: 5px;
  margin-left: 0px;
}

.detail-btn {
  font-size: 16px;
  color:  white;
  margin-left: 0px;
  border-radius: 5px;
}

.summaryList {
    list-style: none;
    margin-left: 0;
    padding-left: 1.2em;
    text-indent: 5px;
}

.summaryPoints::before  {
  content: "\25B8";
  display: block;
  float: left;
  width: 1.2em;
  color: #006400;
  padding-right: 5px;
}

</style>

