<template >
<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="carousel-item" v-for="(banner, idx) in banners" :key="idx" :class="{ active: idx==0 }" >
       <HomeComponent :image="banner.url"
                                     :title="banner.title"
                                     :subtitle="banner.subtitle"
                       />
    </div>
  </div>
  <!-- Controls -->
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>

    </template>

<script>
import HomeComponent from '@/components/Client/HomeComponent.vue';
export default {
    components : {
     HomeComponent
    },

    data(){
        return{
              banners: [
                {
                    id: 0,
                    url : "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    title: "Welcome to Holidaze",
                    subtitle: "The best Hote Booking Site",
                },
                 {
                    id: 1,
                    url : "https://images.unsplash.com/photo-1544085701-4d54e9f41c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
                    title: "Experience the passion of Hospitality"

                },
                {
                    id: 2,
                    url : "https://images.unsplash.com/photo-1469394576569-858815b13427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=849&q=80",
                    title: "Hotels with Personality",
                    subtitle: "Make Yourself at Home",
                },
                {
                    id: 3,
                    url : "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    title: "More than just hotels…",
                    subtitle:"Discover pure comfort with homes & apartments",
                },
            ],

        }
    },

}
</script>

<style <style lang="scss" scoped>

</style>

