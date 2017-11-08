<template>
  <div class="task-list">
    <h1>TaskList</h1>
    <ul>
      <task v-for="task in tasks" v-bind:key="task.title" v-bind:task="task"></task>
    </ul>
  </div>
</template>

<script>

let TaskView = {
  name: 'TaskView',
  template: '<li>{{ task.title }}</li>',
  props: ['task']
}

export default {
  name: 'TaskList',
  data () {
    return {}
  },
  computed: {
    tasks () {
      return this.$store.state.taskList
    }
  },
  components: {
    'task': TaskView
  }
}
</script>

<style lang="sass" scoped>
.task-list
  ul
    list-style: none
    font: 18px "Noto Serif"
</style>
