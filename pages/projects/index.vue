<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12 >
      <div class="timeline-wrapper" > 
      <ul class="StepProgress" > 
        <li class="StepProgress-item" v-for="(schedule, i) in schedules" v-bind:class="'is-done'" :key="i">
        <div class="bold time">{{`${schedule.start} - ${schedule.end}`}} </div> 
        <v-container class="card-layout" fluid>
          <v-card flat class="card-item" width=640 column>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <div>
                  {{schedule.title}}
                </div>
                <div>
                  {{schedule.description}}
                </div>
                <div> 
                  <v-list dense>
                    <v-header>
                      {{schedule.summary.header}}
                    </v-header>
                    <v-list-item  v-for="(point, i) in schedule.summary.points" :key="i">
                      <div>
                      <v-list-title-content>
                        {{point.text}}
                      </v-list-title-content>
                      </div>
                    </v-list-item>
                  </v-list>
                </div>
                <div class="text-center">
                  <v-btn rounded color="green" dark>Details</v-btn>
                </div>
                <div>
                  Technologies
                  <div>
                    <v-list-item  v-for="(technology, i) in schedule.technologies" :key="i">
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
                  <v-img :src="schedule.src"></v-img>
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
  data()  {
    return  {
      schedules: [
      {
        start: "2017",
        end: "2019",
        title: "Title",
        description: "This is description",
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        artist: 'Foster the People',
        summary: {
          header: "Summary Header1",
          points: [ {text: "This is point1."}, 
                    {text: "This is point2."}]
        },
        technologies: [
          { item: "NodeJS"},
          { item: "VueJS"},
          { item: "Swift"}
        ]
        
      },
       {
        start: "2019",
        end: "2020",
        title: "test2",
        description: "This is the description for the card2",
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        artist: 'Ellie Goulding',
        summary: {
          header: "Summary Header2",
          points: [ {text: "This is point1."}, 
                    {text: "This is point2."}]
        },
        technologies: [
          { item: "NodeJS"},
          { item: "VueJS"},
          { item: "Swift"},
          { item: "C"}
        ]
      },
      
      ],
      range:  {
        start: "2017",
        end: "2019",
      title: "test",
      t: '1em'
      }
    }

  },
  components: {

  }
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

