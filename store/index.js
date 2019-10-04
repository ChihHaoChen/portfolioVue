import projects from "./modules/projects"
import publications from "./modules/publications"
import profile from "./modules/profile"
import pdf from "./modules/pdf"
import axios from "axios"
const apiUrl = "https://portfoliovue-6c2b7.firebaseio.com/publications.json"
const profileUrl = "https://portfoliovue-6c2b7.firebaseio.com/profile.json"

export const modules = {
  profile,
  projects,
  publications,
  pdf
}

export const actions = {
  nuxtServerInit(vuexContext) {
    const publicationsArray = []
    const profileUser = []
    return axios
      .all([axios.get(profileUrl), axios.get(apiUrl)])
      .then(
        axios.spread((profile, publications) => {
          profileUser.push(profile.data)
          for (const key in publications.data) {
            publicationsArray.push({
              ...publications.data[key],
              id: key
            })
          }
          vuexContext.commit("setProfile", profileUser)
          vuexContext.commit("setPublications", publicationsArray)
          vuexContext.commit("setProjects", publicationsArray)
        })
      )
      .catch(err => console.log("the err is", err))
  }
}
