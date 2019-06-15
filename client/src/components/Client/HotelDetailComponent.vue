<template>
<div class=" [ row mb-3 ] ">
  <div  class=" [ col-md-12 ]  [ mt-3 ] ">
    <h2 class="text left"> Hotel Detail</h2>
  </div>
        <div class=" [ col-md-12 ]  [ mt-3 ] ">
            <div class=" [ card d-flex flex-row  ] ">
                    <div class=" [ col-md-6  ] ">
                         <div :src="image"  :style="setBackgroundImage" class=" [ card-img-top card-image ] " alt="Hotel image"></div>
                    </div>
                    <div class=" [ card-body col-md-6 ]  [ flex-column justify-content-start ] ">
                        <p class=" [ card-text p-1 ] [ text-left ]  "><b>Establishment Name: </b>{{ name }}</p>
                         <p class=" [ card-text p-1  ]  [ text-left ]  "><b>Price: </b> ${{ price }}</p>
                          <p class=" [ card-text p-1  ]  [ text-left ]  "><b>MaxGuests: </b> {{ maxGuests }}</p>
                          <p class=" [ card-text p-1  ]  [ text-left ]  "><b>GoogleLat: </b> {{ googleLat }}</p>
                          <p class=" [ card-text p-1  ]  [ text-left ]  "><b>GoogleLong: </b> {{ googleLong }}</p>
                          <p class=" [ card-text p-1  ] [ text-left ]  "><b>Description: </b> {{ description }}</p>
                          <p class=" [ card-text p-1  ]  { text-left ] "><b>SelfCatering: </b> {{ selfCatering }}</p>
                          <router-link to="/Enquiry" class=" [ btn btn-primary btn-lg mt-3 ] " tag="button">Book now</router-link>
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
   computed:{
        setBackgroundImage(){
            return {
              backgroundImage : " url("+this.image+")"}
        }
       }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$form-color: #e5e5e6;

.card{
  background-color: $form-color;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
  .card-image {
  height: 55vh;
    width: 100%;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    animation-fill-mode: forwards;
     animation-name:zoom;
    animation-duration: 4s;
    animation-iteration-count: 1;
}
.btn{
  width: 202px;
}
p{
  font-size: 20px;
}
}

@media only screen and (max-width : 767px) {
  .card {
    flex-direction: column !important;
   .card-image {
     height: 50vh;
}
p{
  font-size: 16px;
  padding: 0;
}
  }
}





</style>
