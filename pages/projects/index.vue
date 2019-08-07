<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="timeline-wrapper"> 
      <ul class="StepProgress"> 
        <li  v-for="schedule in schedules" class="StepProgress-item" v-bind:class="'is-done'">
          <div class="bold time">{{`${schedule.start} - ${schedule.end}`}} </div> 
          <div style="margin: 0 0 0 68px;" class="bold">{{schedule.title}}</div>
          <!-- <div style="margin: 0 0 0 68px">{{schedule.description}}</div> -->
          <v-container
            class="card-layout"
            fluid
          >
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
                    {{schedule.summary}}
                  </div>
                  <div class="text-center">
                    <v-btn rounded color="primary" dark>Details</v-btn>
                  </div>
                  <p>
                    Technologies
                  </p>
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
        summary: 'Summary1'
        
      },
       {
        start: "2019",
        end: "2020",
        title: "test2",
        description: "This is a test2",
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        artist: 'Ellie Goulding',
        summary: 'Summary2'
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

