<template>
  <div class="day-grid">
    <div class="gap" v-bind:class="'offset-'+firstDayOffset"></div>
    <div class="day-cell" v-for="day in days" :key="day.date" @click="$router.push({path: getRoute(day.date)})">
      <day :date="day.date"/>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DayView from './DayView'

export default {
  name: 'CalendarView',
  data () {
    return {
      firstDayOffset: 0
    }
  },
  computed: {
    days () {
      let result = []
      let start = moment().startOf('month')
      this.firstDayOffset = (start.day() + 6) % 7
      let daysInMonth = moment().daysInMonth()
      for (let i = 1; i <= daysInMonth; i++) {
        result.push({date: start.valueOf()})
        start.add(1, 'd')
      }
      return result
    }
  },
  components: {
    'day': DayView
  },
  methods: {
    getRoute (ts) {
      return `/day/${moment(ts).format('YY-MM-DD')}`
    }
  }
}
</script>

<style lang="sass" scoped>
.day-grid
  max-width: 77vw
  margin: auto auto
  display: flex
  flex-flow: row wrap
  justify-content: flex-start
  align-items: flex-start
.day-cell
  flex: 0 1 calc( 70vw/7 )
  width: calc( 70vw/7 )
  margin: 1px
  padding: 5px
  flex-wrap: wrap
  text-align: right
  border: 1px solid #aaa
  box-sizing: border-box
  height: calc((100vw/7)/4*3)
  &:hover
    background: #FEF2AB
.gap
  flex-wrap: wrap
  text-align: right
  box-sizing: border-box
  height: calc((100vw/7)/4*3)
.offset-0
  display: none
.offset-1
  flex: 0 1 calc( 70vw/7 + 2px )
.offset-2
  flex: 0 1 calc( 70vw*2/7 + 4px )
.offset-3
  flex: 0 1 calc( 70vw*3/7 + 6px )
.offset-4
  flex: 0 1 calc( 70vw*4/7 + 8px )
.offset-5
  flex: 0 1 calc( 70vw*5/7 + 10px )
.offset-6
  flex: 0 1 calc( 70vw*6/7 + 12px )
</style>
