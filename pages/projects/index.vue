<template>
  <div>
    <TimeProjectCard v-bind:projects="projects"/>
  </div>
</template>

<script>
import TimeProjectCard from '@/components/Cards/TimeProjectCard'
export default {
  components: {
    TimeProjectCard
  },
  data() {
    return  {
      projects: [
      {
        start: "2017",
        end: "2019",
        title: "Title",
        description: "This is description",
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        artist: 'Foster the People',
        detailLink: 'https://github.com/ChihHaoChen',
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
        detailLink:"https://www.linkedin.com/in/chih-hao-chen-13583369/",
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
      }]
    }
  }
}
</script>

<style scoped>

</style>

