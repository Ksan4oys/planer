import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AddTask from '@/components/AddTask'
import TaskListView from '@/components/TaskListView'

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
      name: 'TaskListView',
      component: TaskListView
    }
  ]
})
