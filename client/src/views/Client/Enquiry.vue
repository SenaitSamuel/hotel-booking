<template>
 <div class="page-wrapper">
   <Navigation/>
    <EnquiryComponent/>
     <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import EnquiryComponent from '@/components/Client/EnquiryComponent.vue';

export default {
  name: 'enquiry',
  components: {
    EnquiryComponent,
    Navigation,
    Footer
  },

};
</script>
<style scoped lang="scss">

</style>
