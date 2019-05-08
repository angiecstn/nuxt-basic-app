export const state = () => ({
  text: 'hello world',
  newText: 'bye bye',
  isPressed: false,
  count: 0,
  title: 'initial title',
  backgroundColor: '#fff'
})

export const getters = {
  text: state => state.isPressed ? state.text + '!!!' : state.newText,
  title: state => state.title,
  backgroundColor: state => state.backgroundColor
}

export const actions = {
  updateIsPressed ({ commit, state }) {
    commit('setIsPressed', !state.isPressed )
  },
  updateTitle ({ commit }, input) {
    commit('setTitle', input)
  },
  updateColor ({ commit}, color) {
    commit('setBackgroundColor', color)
  }
}

export const mutations = {
  setIsPressed (state, bool) {
    state.isPressed = bool
  },
  setTitle(state, input) {
    state.title = input
  },
  setBackgroundColor(state, color) {
    state.backgroundColor = color
  }
}