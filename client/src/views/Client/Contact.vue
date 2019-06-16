<template>
<div class=" [ page-wrapper ] ">
    <Navigation/>
    <ContactComponent/>
     <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import ContactComponent from '@/components/Client/ContactComponent.vue';
import style from '@/styles.scss';

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
