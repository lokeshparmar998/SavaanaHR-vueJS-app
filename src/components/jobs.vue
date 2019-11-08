<template>
    <div>
    <app-header ></app-header>
    <app-nav></app-nav>
    <div class="image">
        <img :src="img" alt="coming soon" >
    </div>
    </div>
</template>
<script>
import Header from './public/header.vue'
import Nav from './public/nav.vue'
import img1 from '../image/cs.png'
export default {
    components:{
    appHeader:Header,
    appNav:Nav
    },
    data: function(){
        return{
            img:img1
        }
    }
}
</script>
<style scoped>
    img{
        height: 500px;
        width: 500px;
        margin: 0 auto;
    }
    .image{
        width: 30%;
        height: 100%;
        margin: 0px auto;
    }
</style>