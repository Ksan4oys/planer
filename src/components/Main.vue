<template>
  <div class="main">
    <h1>Main</h1>
    <calendar/>
  </div>
</template>

<script>
import CalendarView from './CalendarView'
export default {
  name: 'Main',
  components: {
    'calendar': CalendarView
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
  margin: 1px
  padding: 5px
  flex-wrap: wrap
  text-align: right
  border: 1px solid #aaa
  box-sizing: border-box
  height: calc((100vw/7)/4*3)
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
