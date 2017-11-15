<template>
  <div class="task-list">
    <h1>Task List</h1>
    <h5>--- {{date.format('DD MMMM YYYY')}} ---</h5>
    <tasklist :tasks="tasks"/>
    <div v-show="missedTasks.length > 0">
      <label>Missed tasks:</label>
      <tasklist :tasks="missedTasks"/>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import TaskListView from './TaskListView'

export default {
  name: 'Today',
  data () {
    return {
      date: moment().startOf('day')
    }
  },
  computed: {
    tasks () {
      return this.$store.getters.getTaskByDate(this.date)
    },
    missedTasks () {
      return this.$store.getters.getTaskBeforeDate(this.date)
    }
  },
  components: {
    'tasklist': TaskListView
  }
}
</script>

<style lang="sass" scoped>
.task-list
  .list-view
    display: table
    width: 30vw
    margin: auto auto
    font: 18px "Noto Serif"
</style>
