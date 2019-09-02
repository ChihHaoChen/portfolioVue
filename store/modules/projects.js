const state = () => ({
  loadedProjects: []
})

const mutations = {
  setProjects(state, projects) {
    state.loadedProjects = projects
  }
}

const actions = {
  setProjects(vuexContext, projects) {
    vuexContext.commit("setProjects", projects)
  }
}

const getters = {
  loadedProjects(state) {
    return state.loadedProjects
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
