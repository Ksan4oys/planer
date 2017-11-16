<template>
  <div class="add-task">
    <h2>Add Task</h2>
    <md-input-container>
      <label for="day">Date</label>
      <md-select name="day" id="day" v-model="day">
        <md-option value="1">1</md-option>
        <md-option value="2">2</md-option>
        <md-option value="3">3</md-option>
        <md-option value="4">4</md-option>
        <md-option value="5">5</md-option>
        <md-option value="6">6</md-option>
        <md-option value="7">7</md-option>
        <md-option value="8">8</md-option>
        <md-option value="9">9</md-option>
        <md-option value="10">10</md-option>
        <md-option value="11">11</md-option>
        <md-option value="12">12</md-option>
        <md-option value="13">13</md-option>
        <md-option value="14">14</md-option>
        <md-option value="15">15</md-option>
        <md-option value="16">16</md-option>
        <md-option value="17">17</md-option>
        <md-option value="18">18</md-option>
        <md-option value="19">19</md-option>
        <md-option value="20">20</md-option>
        <md-option value="21">21</md-option>
        <md-option value="22">22</md-option>
        <md-option value="23">23</md-option>
        <md-option value="24">24</md-option>
        <md-option value="25">25</md-option>
        <md-option value="26">26</md-option>
        <md-option value="27">27</md-option>
        <md-option value="28">28</md-option>
        <md-option value="29">29</md-option>
        <md-option value="30">30</md-option>
        <md-option value="31">31</md-option>
      </md-select>
      <md-select name="month" id="month" v-model="month">
        <md-option value="1">January</md-option>
        <md-option value="2">February</md-option>
        <md-option value="3">March</md-option>
        <md-option value="4">April</md-option>
        <md-option value="5">May</md-option>
        <md-option value="6">June</md-option>
        <md-option value="7">July</md-option>
        <md-option value="8">August</md-option>
        <md-option value="9">September</md-option>
        <md-option value="10">October</md-option>
        <md-option value="11">November</md-option>
        <md-option value="12">December</md-option>
      </md-select>
      <md-select name="year" id="year" v-model="year">
        <md-option value="2017">2017</md-option>
        <md-option value="2018">2018</md-option>
      </md-select>
    </md-input-container>

    <md-input-container>
      <label for="hours">Time</label>
      <md-select name="hours" id="hours" v-model="hours">
        <md-option value="0">00</md-option>
        <md-option value="1">01</md-option>
        <md-option value="2">02</md-option>
        <md-option value="3">03</md-option>
        <md-option value="4">04</md-option>
        <md-option value="5">05</md-option>
        <md-option value="6">06</md-option>
        <md-option value="7">07</md-option>
        <md-option value="8">08</md-option>
        <md-option value="9">09</md-option>
        <md-option value="10">10</md-option>
        <md-option value="11">11</md-option>
        <md-option value="12">12</md-option>
        <md-option value="13">13</md-option>
        <md-option value="14">14</md-option>
        <md-option value="15">15</md-option>
        <md-option value="16">16</md-option>
        <md-option value="17">17</md-option>
        <md-option value="18">18</md-option>
        <md-option value="19">19</md-option>
        <md-option value="20">20</md-option>
        <md-option value="21">21</md-option>
        <md-option value="22">22</md-option>
        <md-option value="23">23</md-option>
      </md-select>
      <span>:</span>
      <md-select name="minutes" id="minutes" v-model="minutes">
        <md-option value="0">00</md-option>
        <md-option value="5">05</md-option>
        <md-option value="10">10</md-option>
        <md-option value="15">15</md-option>
        <md-option value="20">20</md-option>
        <md-option value="25">25</md-option>
        <md-option value="30">30</md-option>
        <md-option value="35">35</md-option>
        <md-option value="40">40</md-option>
        <md-option value="45">45</md-option>
        <md-option value="50">50</md-option>
        <md-option value="55">55</md-option>
      </md-select>
    </md-input-container>
  
    <md-input-container>
      <label>Task</label>
      <md-input v-model="title"></md-input>
    </md-input-container>
    
    <div>
      <md-checkbox v-model="star" class="md-primary">Favorite</md-checkbox>
    </div>

    <md-button class="md-raised md-primary" v-on:click="createTask">Add</md-button>
  </div>
</template>

<script>
// import Datepicker from 'vue-material-datepicker'
import moment from 'moment'

export default {
  name: 'AddTask',
  data () {
    let date = moment().startOf('hour')

    return {
      year: date.get('year').toString(),
      month: (date.get('month') + 1).toString(),
      day: date.get('date').toString(),
      hours: date.get('hours').toString(),
      minutes: date.get('minutes').toString(),
      title: '',
      star: false
    }
  },
  methods: {
    createTask () {
      let date = moment({
        year: this.year,
        month: this.month - 1,
        day: this.day,
        hours: this.hours,
        minutes: this.minutes
      })
      let task = {
        date: date,
        title: this.title,
        star: this.star,
        complete: false
      }
      this.$store.commit('addTask', task)
      console.log(date, date.format('YY-MM-DD'))
      this.$router.push({path: `/day/${date.format('YY-MM-DD')}`})
    }
  }
}
</script>

<style lang="sass" scoped>
.add-task
  max-width: 360px
  margin: 0 auto
</style>
