<template>
  <div id="app">
    <nav>
      <ul class="navbar">
        <li><router-link to="/">Calendar</router-link></li>
        <li><router-link to="/today">Today Tasks</router-link></li>
        <li><router-link to="/add">+ Add Task</router-link></li>        
      </ul>
    </nav>
    <div class="app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
.navbar
  list-style: none
  li
    list-style: none
    margin: 10px 20px
    display: inline-block

</style>
