import projects from "./modules/projects"
import publications from "./modules/publications"
import profile from "./modules/profile"
import pdf from "./modules/pdf"
import axios from "axios"

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
    const projectsArray = []
    return axios
      .all([
        axios.get(process.env.PROFILEURL),
        axios.get(process.env.PUBLICATIONURL),
        axios.get(process.env.PROJECTSURL)
      ])
      .then(
        axios.spread((profile, publications, projects) => {
          profileUser.push(profile.data)
          for (const key in publications.data) {
            publicationsArray.push({
              ...publications.data[key],
              id: key
            })
          }
          for (const key in projects.data) {
            projectsArray.push({
              ...projects.data[key],
              id: key
            })
          }
          vuexContext.commit("setProfile", profileUser)
          vuexContext.commit("setPublications", publicationsArray)
          vuexContext.commit("setProjects", projectsArray)
        })
      )
      .catch(err => console.log("the err is", err))
  }
}
