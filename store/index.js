import Vue from "vue"
import Vuex from "vuex"
// import projects from "./modules/projects"

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedProjects: []
    },
    mutations: {
      setProjects(state, projects) {
        state.loadedProjects = projects
      }
    },
    getters: {
      loadedProjects(state) {
        return state.loadedProjects
      }
    },
    actions: {
      nuxtServerInit(vuexContext) {
        return new Promise(resolve => {
          setTimeout(() => {
            vuexContext.commit("setProjects", [
              {
                start: "2017",
                end: "2019",
                title: "Projects",
                description: "This is description",
                color: "#1F7087",
                src:
                  "https://miro.medium.com/max/4800/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg",
                artist: "Foster the People",
                detailLink: "https://github.com/ChihHaoChen",
                summary: {
                  header: "Summary Header1",
                  points: [
                    { text: "This is point1.", textid: 0 },
                    { text: "This is point2.", textid: 1 },
                    { text: "This is point3.", textid: 2 },
                    { text: "This is point4.", textid: 3 }
                  ]
                },
                technologies: [
                  { item: "NodeJS" },
                  { item: "VueJS" },
                  { item: "Swift" }
                ]
              },
              {
                start: "2019",
                end: "2020",
                title: "test2",
                description: "This is the description for the card2",
                color: "#952175",
                src:
                  "https://miro.medium.com/max/4800/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg",
                artist: "Ellie Goulding",
                detailLink:
                  "https://www.linkedin.com/in/chih-hao-chen-13583369/",
                summary: {
                  header: "Summary Header2",
                  points: [
                    { text: "This is point1.", textid: 0 },
                    { text: "This is point2.", textid: 1 }
                  ]
                },
                technologies: [
                  { item: "NodeJS" },
                  { item: "VueJS" },
                  { item: "Swift" },
                  { item: "C" }
                ]
              }
            ])
            resolve()
          }, 1000)
        })
      },
      setProjects(vuexContext, projects) {
        vuexContext.commit("setProjects", projects)
      }
    }
  })
}

export default createStore
