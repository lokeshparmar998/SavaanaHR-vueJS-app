<template>
    <div class="wrapper">
       <!--  -->
       <div v-for="data in job" :key="data">
           <div v-for="x in 20" :key="x">
               <div class="inner-wrapper">
                   <div class="role same">
                       <h4>{{data[x].job_title}}</h4>
                   </div>
                   <div class="location-exp same">
                       <span><i class="fa fa-suitcase fa-lg" aria-hidden="true"></i></span>
                       <span>  {{data[x].min_experience}} - {{data[x].max_experience}}  Years</span>
                       <span class="location-ig"> <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></span>
                       <span>
                             {{data[x].job_location}}
                       </span>
                   </div>
                   <div class="body same">
                      <div class="row">
                           <span class="areas col-md-2">
                              Key Areas:                  
                       </span>
                       
                       <span class="desc col-md-8">
                            {{data[x].job_title}}
                       </span>
                      </div>
                       <br>
                      <div class="row">
                           <span class="areas col-md-2">
                              Description:
                       </span>
                       <span class="desc descriptions col-md-9">
                            {{data[x].job_description}}
                       </span>
                      </div>
                   </div>
                   <hr>
                   <div class="foot row">
                       <div class="money col-md-2">
                           <span>
                               <i class="fa fa-inr" aria-hidden="true"></i>
                           </span>
                           <span>
                               {{data[x].min_salary}} - {{data[x].max_salary}} LPA
                           </span>
                       </div>
                       <div class="time col-md-4">
                           <span>
                               <i class="fa fa-calendar-o" aria-hidden="true"></i>
                           </span>
                           <span>
                               Posted:  
                           </span>
                           <span>
                               2 Months ago
                           </span>
                       </div>
                   </div>
               </div>
                   <div class="space"></div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['job']
}
</script>
<style scoped>
.location-ig{
    padding-left: 10px;
}
.space{
    margin-top: 30px;
    margin-bottom: 30px;
    content: "";
    display: block;
    clear: both;

}
.wrapper{
    width: 90%;
    height:100%;
    
    margin: 0 auto;
    
}
.inner-wrapper{
    border: 0.5px solid lightgrey;
    margin-bottom: 30px;
    font-family: "Source Sans Pro", sans-serif;
    color: #495057;
}
.inner-wrapper:hover{
    border-bottom: 2px solid #4981CD;
    margin-bottom: 30px;
    cursor: pointer;
}
.same{
    padding-left: 10px;
    padding-top: 10px;
}
.descriptions{
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis; 
}
hr{
    border: 0.5px solid lightgrey;
    margin-top: 5px;
    margin-bottom: 5px;
}
.money{
    margin-left: 10px;
    float: left;
    padding: 10px;
}
.time{
    margin-right: 0px;
    float: right;
    padding: 10px;
}
</style>
