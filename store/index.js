import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      currentTab: 'Title 2',
      timerDuration: 5000,
      timerStopped: true
    },
    mutations: {
      setHomePage (state, obj) {
        state.homePage = obj
      },
      windowResize (state, size) {
        state.window = size
      },
      setConnection (state, type) {
        state.connection = type
      },
      selectTab (state, tab) {
        state.currentTab = tab
      }
    }
  })
}

export default createStore
