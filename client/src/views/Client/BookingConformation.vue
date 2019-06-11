<template>
 <div class="page-wrapper">
    <Navigation/>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4 class="modal-title w-100 font-weight-bold">Thank You for booking with Us!</h4>
        <p>The booking detail will be send to email</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <router-link to="/Hotel" class="btn btn-primary" tag="button">Main page</router-link>
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
