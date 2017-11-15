<template>
  <div class="star-button">
    <i class="fa" v-bind:class="[active ? 'fa-star' : 'fa-star-o']" aria-hidden="true" @click="$emit('toggle')"></i>
  </div>
</template>

<script>
export default {
  name: 'StarButton',
  props: ['active']
}
</script>

<style lang="sass" scoped>
.star-button 
  display: inline-block
  color: #FDCF0A
</style>