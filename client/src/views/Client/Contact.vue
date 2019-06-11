<template>
<div class="page-wrapper">
    <Navigation/>
    <ContactComponent msg="Welcome to contact"/>
     <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import ContactComponent from '@/components/Client/ContactComponent.vue';

export default {
  name: 'contact',
  components: {
    ContactComponent,
    Navigation,
    Footer,
  },
};
</script>
<style scoped lang="scss">

</style>
