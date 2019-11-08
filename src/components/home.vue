<template>
  <div>
    <app-header :name="name" :profile="profile"></app-header>
    <app-nav></app-nav>
    <functional-card></functional-card>
    <div class="display-mid">
      <div class="pull-left">
        <operational-card :functions="functions" ></operational-card>
    </div>
    <div class="pull-right">
      <app-card :job="job"></app-card>
    </div>
    </div>
  </div>
</template>

<script>
import Header from './public/header.vue'
import Nav from './public/nav.vue'
import Functional from './private/functional.vue'
import Operational from './private/operations.vue'
import Cards from './private/cards.vue'
import appJob from '../data/jobs.json'
import functionalAreas from '../data/functional_area.json'
export default {

  components:{
    appHeader:Header,
    appNav:Nav,
    functionalCard:Functional,
    operationalCard:Operational,
    appCard:Cards
  },
  data:function(){
    return{
      name: "lokesh",
      profile: "job Seeker",
      job: appJob,
      functions:functionalAreas
    }
  }
}
</script>

<style>
.display-mid{
    margin-top: 40px;
    width: 80%;
    margin:0 auto;
    height: 100%;
    background-color:lightgrey;
}
.pull-left{
  float:left;
  height: 400px;
  width: 30%;
}
.pull-right{
  float:right;
 
  height: 400px;
  width: 70%;
}
</style>
