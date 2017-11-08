import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  taskList: []
}

const mutations = {
  addTask (state, taskItem) {
    state.taskList.push({...taskItem})
  }
}

export default new Vuex.Store({
  state,
  mutations
})
