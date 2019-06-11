<template>
<div class="row">
        <div class="col-md-12 mt-3">
            <div class="card d-flex flex-row ">
                    <div class="col-md-6">
                         <img :src="image" class="card-img-top" alt="Hotel image">
                    </div>
                    <div class="card-body col-md-6 flex-column justify-content-start">
                        <p class="card-text text-left "><b>Establishment Name: </b>{{ name }}</p>
                         <p class="card-text text-left "><b>Price: </b> ${{ price }}</p>
                          <p class="card-text text-left "><b>MaxGuests: </b> {{ maxGuests }}</p>
                          <p class="card-text text-left "><b>GoogleLat: </b> {{ googleLat }}</p>
                          <p class="card-text text-left "><b>GoogleLong: </b> {{ googleLong }}</p>
                          <p class="card-text text-left "><b>Description: </b> {{ description }}</p>
                          <p class="card-text text-left "><b>SelfCatering: </b> {{ selfCatering }}</p>
                          <router-link to="/Enquiry" class="btn btn-primary " tag="button">Book now</router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import style from '@/styles.scss';
export default {
  name: 'HotelDetailComponent',
  props: ['name', 'image', 'price', 'maxGuests', 'googleLat', 'googleLong', 'description', 'selfCatering'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$form-color: #e5e5e6;

.card{
  background-color: $form-color;
  img {
  height: 55vh;
  object-fit: cover;
}
}

@media only screen and (max-width : 767px) {
  .card {
    flex-direction: column !important;
    img {
  height: auto;
  object-fit: cover;

}
  }
}





</style>
