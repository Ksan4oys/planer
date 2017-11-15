<template>
  <div class="day-view">
    {{getDay(date)}}
    <ul v-for="task in tasks" :key="task.id">
      <li><p class="clip" :class="{strike: task.complete}"><star active="true"/> {{task.title}}</p></li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import StarButton from './StarButton'
export default {
  name: 'DayView',
  props: ['date'],
  computed: {
    tasks () {
      console.log('DayView', this.date)
      return this.$store.getters.getStarTaskByDate(this.date)
    }
  },
  methods: {
    getDay (ts) {
      return moment(ts).date()
    }
  },
  components: {
    'star': StarButton
  }
}
</script>

<style lang="sass" scoped>
.day-view
  overflow: hidden
  ul
    position: relative
    overflow: hidden
    margin: 0
    padding: 0
    list-style: none
  li
    overflow: hidden
    text-align: left
    font-size: 11px
    line-height: 14px
    margin: 0
    padding: 0
    list-style: none
  p.clip
    margin: 0
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
  .strike
    text-decoration: line-through
</style>
