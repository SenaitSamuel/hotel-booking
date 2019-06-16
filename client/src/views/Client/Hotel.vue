<template>
  <div class=" [ page-wrapper ] ">
     <Navigation/>
     <div class=" [ jumbotron ]  [ p-5  ] " :style="setBackgroundImage">
       <h2 class=" [ text-white p-3 mt-5] ">What ever accommodations you’re looking for, <br><br>we've got them...</h2>
         <hr class="my-4">
       <router-link to="/Enquiry" class=" [ btn btn-primary btn-lg ]  [ mt-3 ] " tag="button">Book Now</router-link>
       </div>
        <!-- Navbar Search -->
     <!-- Navbar Search -->
     <SearchFilterComponent
        :options="options"
        v-on:selected="validateSelection"
        :disabled="false"
        placeholder="f.eks.Oslo"
      />

     <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import SearchFilterComponent from '@/components/Client/SearchFilterComponent.vue'
import axios from 'axios';
import style from '@/styles.scss';

export default {
  name: 'hotel',
  components: {
    SearchFilterComponent,
    Navigation,
    Footer,
  },
  data() {
    return{
      // baseUrl: process.env.VUE_APP_BASE_URL,
     options: [  ],
      selected:"",
      heroImage:"https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      }
    },

    methods: {
      validateSelection(selection) {
            this.selected = selection;
            console.log(selection.establishmentName+' has been selected');

          },
  },
  computed:{
     setBackgroundImage(){
            return {backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+this.heroImage+")"}
            }
        }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .card{
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
  transition:all .4s ease-in-out;
  &:hover{
  transform:scale(1.05);
  box-shadow:10px 10px 10px #888888;
}

}
 .jumbotron{
.btn{
  width: 202px;
  border-radius: 12px;
  cursor: pointer;
}
}

@media only screen and (max-width : 767px) {

h2{
  font-size: 20px;
  justify-content: flex-start;
}

}


</style>
