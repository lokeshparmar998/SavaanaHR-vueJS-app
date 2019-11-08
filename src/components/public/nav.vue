<template>
  <div class="appnav">
    <div class="innernav">
      <ul>
      <!--  <li> <router-link to="/">Home</router-link></li>
        <li> <router-link to="/jobs">Jobs</router-link></li>
        <li> <router-link to="/block">Blog</router-link></li>
        <li> <router-link to="/applied">Applied Jobs</router-link></li> -->
        <router-link to="/"> <li>Home</li></router-link>
        <router-link to="/job"> <li>Jobs</li></router-link>
        <router-link to="/Blog"> <li>Blog</li></router-link>
        <router-link to="/applied"> <li>Applied Jobs</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
ul{
  padding: 0px;
  margin: 0px;
}
.appnav{
  background-color:#FFFFFF;
    width: 100%;
    height: 65px;
    display: block;
    border-bottom: 1px solid lightgrey;
}
.innernav{
    width: 80%;
    margin:0 auto;
    height: 100%;
    display: block;
    background-color:#FFFFFF;
}


.innernav ul a{
  display: table;
  height: 100%;
  float: left;
}

.innernav a li{
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  color: #6E7687;
  display: table-cell;
  vertical-align: center;
}
.innernav a li:hover{
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  color: #6E7687;
  display: table-cell;
  vertical-align: center;
  text-decoration: none;
}

</style>
