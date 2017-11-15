import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AddTask from '@/components/AddTask'
import Today from '@/components/Today'
import Day from '@/components/Day'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/add',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/today',
      name: 'Today',
      component: Today
    },
    {
      path: '/day/:date',
      name: 'Day',
      component: Day
    }
  ]
})
