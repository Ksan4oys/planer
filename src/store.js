import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import _ from 'lodash'
import uuid from 'uuid/v4'

Vue.use(Vuex)

const getDayOffset = (date) => {
  date = moment(date)
  const result = Math.floor((moment(date).valueOf() + date.utcOffset() * 1000 * 60) / 86400000)
  console.log('getDayOffset', result)
  return result
}

const state = {
  taskList: []
}

const mutations = {
  addTask (state, taskItem) {
    let date = moment(taskItem.date)
    let day = getDayOffset(date)
    console.log('addTask', day, date.toString())
    state.taskList.push({
      ...taskItem,
      id: uuid(),
      day: day,
      time: date.format('HH:mm')
    })
  },
  toggleStar (state, taskItem) {
    taskItem.star = !taskItem.star
  },
  toggleCheck (state, taskItem) {
    taskItem.complete = !taskItem.complete
  }
}

const getters = {
  getTaskByDate: (state, getters) => (date) => {
    const day = getDayOffset(date)
    return _.filter(state.taskList, (e) => { return e.day === day })
  },
  getTaskBeforeDate: (state, getters) => (date) => {
    const day = getDayOffset(date)
    return _.filter(state.taskList, (e) => { return e.day < day })
  },
  getStarTaskByDate: (state, getters) => (date) => {
    const day = getDayOffset(date)
    console.log('getStarTaskByDate', day)
    let result = _.filter(state.taskList, (e) => { return e.day === day && e.star })
    if (result.length > 0) {
      console.log(result)
    }
    return result
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
