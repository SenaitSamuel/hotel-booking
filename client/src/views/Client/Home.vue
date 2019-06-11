<template >

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" >
              <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
                    <div class="carousel-item"  v-for="(banner, idx) in banners" :key="idx" :class="{ active: idx==0 }"  >
                      <HomeComponent :image="banner.url"
                                     :title="banner.title"
                       />

                </div>
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
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
                    title: "welcome to "
                },
                 {
                    id: 1,
                    url : "https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
                    title: "Batman on the roof"
                },
                {
                    id: 2,
                    url : "https://images.unsplash.com/photo-1551906993-c8b38a6ab201?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
                    title: "Suicide Squad"
                },
                {
                    id: 3,
                    url : "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    title: "Flash & Reverse Flash"
                },
                {
                    id: 4,
                    url : "https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                    title: "Batman Red"
                }
            ],

        }
    },

}
</script>

<style>

</style>
