<template>
  <div class=" [ page-wrapper ] ">
     <Navigation/>
     <div class=" [ container mt-5 ] [ container-hoteldetail ] ">
      <div v-for=" (hotels, index) in establishments " :key="index">
         <div v-if="hotelId == hotels.id ">
            <HotelDetailComponent
              :image=" hotels.imageUrl "
              :name=" hotels.establishmentName"
              :price=" hotels.price"
              :maxGuests=" hotels.maxGuests"
              :googleLat=" hotels.googleLat"
              :googleLong=" hotels.googleLong"
              :description=" hotels.description"
              :selfCatering=" hotels.selfCatering"
            />
          </div>
        </div>
     </div>
       <Footer/>
     </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import HotelDetailComponent from '@/components/Client/HotelDetailComponent.vue';
import axios from 'axios';

export default {
  name: 'hotelDetail',
  components: {
    HotelDetailComponent,
    Navigation,
    Footer,
  },
  data() {
    return{
     hotelId:this.$route.params.id,
      establishments:[ ],
      }
    },
    created() {
    // Fetch Data
    this.fetchData();
},
    methods: {
       fetchData: function () {
           axios.get('./establishments.json')
           .then( response => this.establishments = response.data);

     }

  },
};
</script>
<style scoped lang="scss">
.page-wrapper {
    width: 100%;
    padding-right: 0;
    padding-left: 0;

}
.container{
min-height: 70vh !important;
}
</style>
