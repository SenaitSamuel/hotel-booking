<template>
 <div id="app">
      <SearchFilterComponent
        :options="options"
        v-on:selected="validateSelection"
        :disabled="false"
        placeholder="Please select an animal"
      />


    </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import SearchFilterComponent from '@/components/Client/SearchFilterComponent.vue';
import HotelComponent from '@/components/Client/HotelComponent.vue';

import axios from 'axios';

export default {
  name: 'search',
  components: {
    SearchFilterComponent,
    Navigation,
    HotelComponent,
    Footer,
  },
 data () {
          return {
            options: [  ],
            selected:"",
          }
        },

        methods: {
          validateSelection(selection) {
            this.selected = selection;
            console.log(selection.establishmentName+' has been selected');

          },
},

     }
</script>

<style lang="scss" scoped>

</style>
