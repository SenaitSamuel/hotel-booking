<template>
 <div class="page-wrapper">
</div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'bookingConformation',
  components: {
    Navigation,
    Footer,
  },
};
</script>
<style scoped lang="scss">
.page-wrapper {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
}
</style>
