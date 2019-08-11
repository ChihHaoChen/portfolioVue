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
                <div>
                  {{project.title}}
                </div>
                <div>
                  {{project.description}}
                </div>
                <div> 
                  <v-list dense>
                    <v-header>
                      {{project.summary.header}}
                    </v-header>
                    <v-list-item  v-for="(point, i) in project.summary.points" :key="i">
                      <div>
                      <v-list-title-content>
                        {{point.text}}
                      </v-list-title-content>
                      </div>
                    </v-list-item>
                  </v-list>
                </div>
                <div class="text-center">
                  <v-btn rounded color="green" dark :href=project.detailLink>Details</v-btn>
                </div>
                <div>
                  Technologies
                  <div>
                    <v-list-item  v-for="(technology, i) in project.technologies" :key="i">
                      <v-chip label color="green" dark>
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
                  <v-img :src="project.src"></v-img>
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
.bold{font-weight:bold; color:blue}
.time{position:absolute; left:-115px;}
.timeline-wrapper {
  padding-left:80px;
  min-width: 800px;
  font-family: 'Helvetica';
  font-size: 20px;
  /*border: 1px solid #CCC;*/
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
  background-color: green;
}
.StepProgress strong {
  display: block;
}
.card-layout  {
  padding-left: 50px;
}
.card-item  {
  font-size: 20px;
  background-color: white
}
</style>

