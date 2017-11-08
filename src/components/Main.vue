<template>
  <div class="main">
    <h1>Main</h1>
    <div class="day-grid">
      <div class="day-cell" v-for="day in days">
        <div class="date">{{ day.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      days: [
        {date: 1},
        {date: 2},
        {date: 3},
        {date: 4},
        {date: 5},
        {date: 6},
        {date: 7},
        {date: 8},
        {date: 9},
        {date: 10},
        {date: 11}
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.day-grid
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
  align-items: flex-start
.day-cell
  flex: 1 1 calc( 100vw/7 )
  flex-wrap: wrap
  text-align: right
  border: 1px solid #aaa
  box-sizing: border-box
  width: 
  height: calc((100vh/7)/4*3)
</style>
