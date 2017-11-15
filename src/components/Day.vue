<template>
  <div class="task-list">
    <router-link :to="{name: 'Day', params: {date: getPrev()}}">Prev Day</router-link>
    --- {{date.format('DD MMMM YYYY')}} ---
    <router-link :to="{name: 'Day', params: {date: getNext()}}">Next Day</router-link>
    <h1>Task List</h1>
    <tasklist :tasks="tasks"/>
  </div>
</template>

<script>
import TaskListView from './TaskListView'
import moment from 'moment'

export default {
  name: 'Day',
  data () {
    return {
      date: moment(this.$route.params.date, 'YY-MM-DD').startOf('day')
    }
  },
  computed: {
    tasks () {
      return this.$store.getters.getTaskByDate(this.date)
    }
  },
  methods: {
    getPrev () {
      return moment(this.date).subtract(1, 'd').format('YY-MM-DD')
    },
    getNext () {
      return moment(this.date).add(1, 'd').format('YY-MM-DD')
    }
  },
  components: {
    'tasklist': TaskListView
  },
  watch: {
    '$route' (to, from) {
      this.date = moment(to.params.date, 'YY-MM-DD').startOf('day')
    }
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
