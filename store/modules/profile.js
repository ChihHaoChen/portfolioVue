const state = () => ({
  loadProfile: []
})

const mutations = {
  setProfile(state, profile) {
    state.loadProfile = profile
  }
}

const actions = {
  setProfile(vuexContext, profile) {
    console.log("store Commited", profile)
    vuexContext.commit("setProfile", profile)
  }
}

const getters = {
  loadProfile(state) {
    return state.loadProfile
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
