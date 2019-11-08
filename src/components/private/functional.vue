<template>
  <div class="myfunctional">
    <div class="innerfunctional">
   <!-- <div class="container-flex">
        <div class="row">
       <form action="" class="">
          <div class="col-md-4">
          <input type="text" name="" id="" placeholder="Role,Designation">
        </div>
        <div class="col-md-3 ">
          <input type="text" name="" id="" placeholder="Location">
        </div>
        <div class="col-md-2 ">
          <input type="text" name="" id="" placeholder="Salary">
        </div>
        <div class="col-md-2 ">
          <input type="text" value="" placeholder="Experience">
        </div>
        <div class="col-md-1 ">
          <input type="button" value="Search">
        </div>
       </form>
      </div>
      </div> 
    
      <div class="container-flex">-->
        <div class="wrapper">
            <input type="text" name="" id="" placeholder="Role,designation and functional area" class="input-field role">
            <input type="text" name="" id="" placeholder="Locations" class="input-field location">
            <input type="text" name="" id="" placeholder="Salary" class="input-field salary">
            <input type="text" name="" id="" placeholder="Experience" class="input-field experience">
            <button class="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.salary{
  width: 115px;
}
button{
  width: 100px;
  height: 45px;
}
.experoence{
  width: 115px;
}
.wrapper{
  border: 0.5px solid lightgrey;
  padding: 10px;
  
}
.location{
  width: 230px;
}
.input-field{
  height: 45px;
  border-radius: 5px;
}
.role{
  width: 350px;
}
.myfunctional{
   background-color:#FFFFFF;
    width: 100%;
    height: 65px;
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
}
.innerfunctional{
    width: 75%;
    margin:0 auto;
    height: 100%;
    display: block;
    background-color:#4981CD;
}
</style>
