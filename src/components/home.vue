<template>
  <div>
    <app-header :name="name" :profile="profile"></app-header>
    <app-nav></app-nav>
    <functional-card></functional-card>
  </div>
</template>

<script>
import Header from './public/header.vue'
import Nav from './public/nav.vue'
import Functional from './private/functional.vue'
import Operational from './private/operations.vue'

export default {
  components:{
    appHeader:Header,
    appNav:Nav,
    functionalCard:Functional,
    operationalCard:Operational
  },
  data:function(){
    return{
      name: "lokesh",
      profile: "job Seeker"
    }
  }
}
</script>

<style>

</style>
