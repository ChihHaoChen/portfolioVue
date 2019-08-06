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
            class="pa-2"
            fluid
            grid-list-md
          >
          <v-layout class="card-layout" column>
            <v-flex xs12>
              <v-card flat class="card-item" width=640 :color="schedule.color" column>
                <v-flex xs6>
                  <v-list-item three-line>
                    <v-list-item-content class="align-self-start">
                      <v-list-item-title
                        class="headline mb-2"
                        v-text="schedule.title"
                      ></v-list-item-title>

                      <v-list-item-subtitle v-text="schedule.artist"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-flex>   
                <v-flex xs6>  
                  <v-list-item-avatar
                    size="125"
                    tile
                  >
                    <v-img :src="schedule.src"></v-img>
                  </v-list-item-avatar>
                </v-flex>
              </v-card>
            </v-flex>
          </v-layout>
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
        title: "test",
        description: "This is a test",
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
        
      },
       {
        start: "2019",
        end: "2020",
        title: "test2",
        description: "This is a test2",
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      },
      
      ],
      range:  {
        start: "2017",
        end: "2019",
      title: "test",
      t: '1em'
      },
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
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
}
</style>

