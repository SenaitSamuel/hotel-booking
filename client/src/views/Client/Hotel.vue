<template>
  <div class="page-wrapper">
     <Navigation/>
     <div class="jumbotron p-5" :style="setBackgroundImage">
       <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
         <hr class="my-4">
       <router-link to="/Enquiry" class="btn btn-primary  mt-4" tag="button">Book now</router-link>
       </div>
        <!-- Navbar Search -->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="input-group">
        <input type="text" class="form-control" v-model="search" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary btn-sm" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
     <div class="container">
        <div class="row">
       <div v-for="(hotel, index) in  searchFilter " :key="hotel.index" class="col-md-4 mt-3 mb-3 " >
         <div class="card bg-light mb-4">
            <HotelComponent
              :image=" hotel.imageUrl "
              :name=" hotel.establishmentName"
              :price=" hotel.price"
            />
            <router-link v-bind:to="'/hotelDetail/' + hotel.id"  class="btn btn-primary btn-lg btn-block" tag="button">View More</router-link>
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
