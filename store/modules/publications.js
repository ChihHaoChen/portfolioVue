const state = () => ({
  loadedPublications: []
})

const mutations = {
  setPublications(state, publications) {
    state.loadedPublications = publications
  }
}

const actions = {
  setPublications(vuexContext, publications) {
    vuexContext.commit("setPublications", publications)
  }
}

const getters = {
  loadedPublications(state) {
    return state.loadedPublications
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
