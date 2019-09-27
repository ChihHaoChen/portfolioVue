import projects from "./modules/projects"
import publications from "./modules/publications"
import pdf from "./modules/pdf"
import axios from "axios"
const apiUrl = "https://portfoliovue-6c2b7.firebaseio.com/publications.json"

export const modules = {
  projects,
  publications,
  pdf
}

export const actions = {
  nuxtServerInit(vuexContext) {
    const publicationsArray = []
    return axios
      .get(apiUrl)
      .then(response => {
        for (const key in response.data) {
          publicationsArray.push({ ...response.data[key], id: key })
        }
        vuexContext.commit("setPublications", publicationsArray)
        vuexContext.commit("setProjects", publicationsArray)
      })
      .catch(err => console.log("the err is", err))
  }
}
