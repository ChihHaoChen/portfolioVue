import projects from "./modules/projects"
import publications from "./modules/publications"

export const modules = {
  projects,
  publications
}

export const actions = {
  nuxtServerInit(vuexContext) {
    return new Promise(resolve => {
      vuexContext.commit("setProjects", [
        {
          start: "2017",
          end: "2019",
          title: "Projects",
          description: "This is description",
          color: "#1F7087",
          src: "https://miro.medium.com/max/4800/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg",
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
          src: "https://miro.medium.com/max/4800/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg",
          artist: "Ellie Goulding",
          detailLink: "https://www.linkedin.com/in/chih-hao-chen-13583369/",
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
      vuexContext.commit("setPublications", [
        {
          start: "2015",
          end: "2018",
          title: "GMRES-DR",
          description: "This is description",
          color: "#1F7087",
          src: "https://miro.medium.com/max/4800/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg",
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
          start: "2018",
          end: "2019",
          title: "GCRO-DR",
          description: "This is the description for the card2",
          color: "#952175",
          src: "https://miro.medium.com/max/4800/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg",
          artist: "Ellie Goulding",
          detailLink: "https://www.linkedin.com/in/chih-hao-chen-13583369/",
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
    })
  }
}
