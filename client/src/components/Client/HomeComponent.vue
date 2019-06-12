<template>
<div class=" [ carousel ] " >
        <img class=" [ d-block w-100 ] " :src="image" alt="Image slide"  :style="setBackgroundImage">
        <div class=" [ carousel-layer ] "></div>
        <div class=" [ carousel-caption ] ">
          <h1 class=" [ h1-responsive mb-5 ]  " >{{ title }} </h1>
          <h3 class=" [ h1-responsive mb-5 ]  " >{{ subtitle }} </h3>
          <router-link to="/Hotel" class=" [ btn btn-primary btn-lg ]  [ mt-3 ] " tag="button">Explore More</router-link>

         </div>

  </div>
</template>

<script>
import style from '@/styles.scss';
export default {
    props: ["image", "title", "subtitle"],
     computed:{
        setBackgroundImage(){
            return {
              backgroundImage : "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url("+this.image+")"}
        }
},

}
</script>

<style scoped lang="scss">
.carousel-layer {
    background-color: black;
    position: absolute;
    opacity: 0.5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
img{
   height:100vh;
    width: 100vw;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    animation-fill-mode: forwards;
     animation-name:zoom;
    animation-duration: 4s;
    animation-iteration-count: 1;
}
@keyframes zoom{
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.1);
    }
}
.carousel-caption {
    top: 40%;
    bottom: auto;
}
@media only screen and (max-width : 767px) {
 img{
    background-size:550px !important ;
}
h1{
  font-size: 28px;
  margin-top: 10px;

}
h3{
  font-size: 20px;
}

}
</style>
