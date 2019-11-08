<template>
  <div class="myheader">
    <div class="innerHeader">
      <div class="logoContainer">
        <h3>HireXL</h3>
      </div>
      <div class="account">
       <!-- <span>
          <router-link to='#'><i class="fa fa-user-circle-o fa-3x" aria-hidden="true"></i></router-link>
        </span>
        <span>
          <router-link to="#">{{name}}</router-link> <br>
          <router-link to="#">{{profile}}</router-link>
        </span> 
        <div class="profile">
          <router-link to='#'><i class="fa fa-user-circle-o fa-3x" aria-hidden="true"></i></router-link>
        </div>
        <div class="nameProfile">
          <h4><router-link to="#">{{name}}</router-link></h4>
          <p> <router-link to="#">{{profile}}</router-link></p>
        </div>-->

      </div>
    </div>
    </div>
</template>

<script>
export default {
  props:['name','profile']
  
}
</script>

<style>   
.nameProfile{
  display: table-cell;
  vertical-align: middle;
  margin-left: 10px;
}
.logoContainer{
  display: table;
  height:100%;
  float: left;
}
.profile{
  display: table-cell;
  vertical-align: middle;
}
.account{
  display: table;
  height:100%;
  float: right;
}
.logoContainer h3{
    font-family: sans-serif;
    color: #ff6451;
    font-size: 1.8em;
    line-height: 1.5em;
    font-weight: bold;
    display: table-cell;
    vertical-align: middle;
    font-size: 30px;
    font-weight: 800;
}
p{
  margin: 0px;
  padding: 0px;
}
h3 h4{
  margin: 0px;
}
  .myheader{
    background-color:#FFFFFF;
    width: 100%;
    height: 80px;
    display: block;
    border-bottom: 1px solid lightgrey;
  }
  .innerHeader{
    width: 80%;
    margin:0 auto;
    height: 100%;
    display: block;
    background-color:#FFFFFF;
  }
</style>
