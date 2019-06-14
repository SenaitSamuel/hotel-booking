<template>
  <div class=" [ page-wrapper ] ">
     <Navigation/>
     <div class=" [ jumbotron ]  [ p-5 ] " :style="setBackgroundImage">
       <h6 class=" [ display-4 text-white p-3 ] ">Whatever accommodations you’re looking for, <br>we've got them...</h6>
         <hr class="my-4">
       <router-link to="/Enquiry" class=" [ btn btn-primary ]  [ mt-4 ] " tag="button">Book now</router-link>
       </div>
        <!-- Navbar Search -->
    <form class=" [ d-none d-md-inline-block form-inline ]  [ ml-auto mr-0 mr-md-3 my-2 my-md-0 ] ">

     <SearchFilter/>
    </form>
     <div class=" [ container ] ">
        <div class=" [ row ] ">
       <div v-for="(hotel, index) in  searchFilter " :key="index" class=" [ col-md-4  ] [ mt-3 mb-3 ]  " >
         <div class=" [ card ]   [ bg-light mb-4 ] ">
            <HotelComponent
              :image=" hotel.imageUrl "
              :name=" hotel.establishmentName"
              :price=" hotel.price"
            />
            <router-link v-bind:to="'/hotelDetail/' + hotel.id"  class=" [ btn btn-primary btn-lg btn-block ] " tag="button">View More</router-link>
          </div>
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
import HotelComponent from '@/components/Client/HotelComponent.vue';
import axios from 'axios';
import style from '@/styles.scss';

export default {
  name: 'hotel',
  components: {
    HotelComponent,
    Navigation,
    Footer,
  },
  data() {
    return{
      // baseUrl: process.env.VUE_APP_BASE_URL,
      establishments:[ ],
      search:"",
      heroImage:"https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      }
    },
    created() {
    // Fetch Data
    this.fetchData();
},
    methods: {
       fetchData: function () {
           axios.get('./establishments.json' )
           .then(response => this.establishments = response.data)
     }
  },
  computed:{
    searchFilter: function(){
      return this.establishments.filter((hotel) =>{
        return hotel.establishmentName.toLowerCase().includes(this.search.toLowerCase());
      })
    },
     setBackgroundImage(){
            return {backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+this.heroImage+")"}
            }
        }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">




</style>
