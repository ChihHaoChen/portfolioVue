const state = () => ({
  loadPDF: []
})

const mutations = {
  setPDF(state, pdf) {
    state.loadPDF = pdf
  }
}

const actions = {
  setPDF(vuexContext, pdf) {
    vuexContext.commit("setPDF", pdf)
  }
}

const getters = {
  loadPDF(state) {
    return state.loadPDF
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
