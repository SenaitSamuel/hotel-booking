<template>
<div class="slideImage" >
        <img class="d-block w-100" :src="image" alt="Second slide"  :style="setBackgroundImage">
        <div class="carousel-caption">
          <h1 class="h1-responsive mb-5 " >{{ title }} </h1>
          <router-link to="/Hotel" class="btn btn-primary  mt-3 " tag="button">Explore More</router-link>

         </div>

  </div>
</template>

<script>
import style from '@/styles.scss';
export default {
    props: ["image", "title"],
     computed:{
        setBackgroundImage(){
            return {
              backgroundImage : "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url("+this.image+")"}
        }
}

}
</script>

<style scoped lang="scss">
img{
    height:100vh;
    width: 100%;
    background-size: contain !important;
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
    height:100vh;
}

}
</style>
