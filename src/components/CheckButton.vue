<template>
  <div class="check-button" @click="$emit('toggle')">
    <i class="fa fa-check" :class="[checked ? '' : 'hide']" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: ['checked']
}
</script>

<style lang="sass" scoped>
.check-button
  width: 24px
  height: 24px
  border: 1px solid #ddd
  background: #f2f2f2
  .hide
    opacity: 0
  i
    position: relative
    top: -1px
</style>