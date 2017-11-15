<template>
  <div class="task-list">
    <task v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>

<script>
import TaskView from './TaskView'

export default {
  name: 'TaskList',
  props: ['tasks'],
  components: {
    'task': TaskView
  }
}
</script>

<style lang="sass" scoped>
.task-list
  display: table
  width: 30vw
  margin: auto auto
  font: 18px "Noto Serif"
</style>
