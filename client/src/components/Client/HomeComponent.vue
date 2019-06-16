<template>
<div class=" [ carousel ] " >
        <div class=" [ carousel-image ]  " :src="image" alt="Image slide"  :style="setBackgroundImage"></div>
        <div class=" [ carousel-layer ] "></div>
        <div class=" [ carousel-caption ] ">
          <h1 class=" [ h1-responsive mb-5 ]  " >{{ title }} </h1>
          <h3 class=" [ h1-responsive mb-5 ]  " >{{ subtitle }} </h3>
          <router-link to="/Hotel" class=" [ btn btn-primary btn-lg text-center ]  [ mt-3 ] " tag="button">Explore More &rarr;
          <i class="far fa-arrow-right p-2"></i>
          </router-link>

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
              backgroundImage : " url("+this.image+")"}
        }
},

}
</script>

<style scoped lang="scss">
.carousel{
  .carousel-layer {
    background-color: black;
    position: absolute;
    opacity: 0.5;
    top: 0;
    left: 0;
    height:100%;
    width: 100%;
}
.carousel-image{
  height: 100vh;
    width: 100%;
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
.btn{
  width: 202px;
  border-radius: 12px;
  cursor: pointer;
}
}

@media only screen and (max-width : 767px) {

h1{
  font-size: 30px;
  margin-top: 10px;

}
h3{
  font-size: 22px;
}
.carousel-caption {
    top: 20%;
}
}
</style>
