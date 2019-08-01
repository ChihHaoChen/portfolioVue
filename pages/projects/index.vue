<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="timeline-wrapper"> 
      <ul class="StepProgress"> 
        <li  v-for="schedule in schedules" class="StepProgress-item" v-bind:class="'is-done'">
          <div class="bold time">{{`${schedule.start} - ${schedule.end}`}} </div> 
          <div style="margin: 0 0 0 68px;" class="bold">{{schedule.title}}</div>
          <div style="margin: 0 0 0 68px">{{schedule.description}}</div>
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
        description: "This is a test"
      },
       {
        start: "2019",
        end: "2020",
        title: "test2",
        description: "This is a test2"
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
  min-width: 400px;
  font-family: 'Helvetica';
  font-size: 14px;
  /*border: 1px solid #CCC;*/
}
.StepProgress {
  position: relative;
  padding-left: 45px;
  list-style: none;
  
  -webkit-transition: 2s; /* For Safari 3.1 to 6.0 */
  transition: 2s;
}
.StepProgress::before {
  display: inline-block;
  content: '';
  position: absolute;
  top: 0;
  left: 85px;
  width: 52px;
  height: 100%;
  border-left: 2px solid #CCC;
}
.StepProgress-item {
  
  position: relative;
  counter-increment: list;
}
.StepProgress-item:not(:last-child) {
  padding-bottom: 20px;
}
.StepProgress-item::before {
  display: inline-block;
  content: '';
  position: absolute;
  left: 40px;
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
</style>

