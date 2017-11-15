<template>
  <div class="list-row">
    <div class="list-cell check"><check :checked="task.complete" @toggle="toggleCheck()"/></div>
    <div class="list-cell time" :class="{ strike: task.complete }">{{ task.time }}</div>
    <div class="list-cell" :class="{ strike: task.complete }">{{ task.title }}</div>
    <div class="list-cell star"><star :active="task.star" @toggle="toggleStar()"/></div>
  </div>
</template>

<script>
import StarButton from './StarButton'
import CheckButton from './CheckButton'

export default {
  name: 'TaskView',
  props: ['task'],
  components: {
    'star': StarButton,
    'check': CheckButton
  },
  methods: {
    toggleStar () {
      console.log('toggleStar click')
      this.$store.commit('toggleStar', this.task)
    },
    toggleCheck () {
      console.log('toggleCheck click')
      this.$store.commit('toggleCheck', this.task)
    }
  }
}
</script>

<style lang="sass" scoped>
  .list-row
    display: table-row
  .list-cell
    padding-top: 10px
    min-height: 24px
    line-height: 24px
    display: table-cell
  .strike
    text-decoration: line-through
</style>
