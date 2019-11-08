<template>
  <div class="functional">
    <h4>Functional Areas</h4>
    <div class="inner-functional">
      <div v-for="data in functions" :key="data">
        <div v-for="count in 13" :key="count">
          <div class="content">
            <span class="left-side">{{data[count].name}}</span> <span class="right-side"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["functions"]
}
</script>

<style>
.functional{
  margin-left: 10px;
  border: 1px solid lightgrey;
}
.content{
  padding: 5px;
  width: 90%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 600;
}

.right-side{
 float: right;
 margin-right: 30px;
 cursor: pointer;
}
.left-side{
  cursor: pointer;
}
.functional h4{
  margin-left: 5px;
  padding: 10px;
  font-weight: 700;
}
</style>
