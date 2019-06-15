<template>
 <div id="app">
      <SearchFilterComponent
        :options="options"
        v-on:selected="validateSelection"
        :disabled="false"
        placeholder="Please select an animal"
      />
      <img :src="image" class="card-img-top" alt="Hotel image">
      <div class="card-body">
        <h5 class="card-title">{{ selected.establishmentName }}</h5>
        <h5 class="card-title"><span>$ {{ price }} </span></h5>
      </div>
      <p >Selected animal: {{ selected.establishmentName || 'none' }}</p>
      <p >Selected animal: {{ selected.imageUrl || 'none' }}</p>
      <p >Selected animal: {{ selected.price || 'none' }}</p>
      <br />

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
