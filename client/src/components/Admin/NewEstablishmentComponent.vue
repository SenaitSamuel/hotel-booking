<template>
   <div class= " [ container ]  [ mt-5 ] ">
         <div class=" [ row justify-content-center ] ">
            <div class=" [ col-md-8 ]  [ mt-3 bg-light rounded ] ">
                <div>
                        <h2 class= " [ text-center ]  [ pt-5 ] ">New Establishment</h2>
                        <hr class=" [ bg-light ]   [ mb-5 ] ">
                </div>

                <form @submit="Submit" id="myForm" method="POST" action="http://localhost/hotel-booking/server/add-establishments-success.php">
                <div class=" [ form-group row ]  [ mb-4 ] " :class="{error: errors.has('name')}" >
                 <label for="establishmentName" class="col-sm-3 col-form-label" >Establishment Name:</label>
                  <input type="text" name="establishmentName" id="establishmentName" class="form-control p-4" v-validate="'required'" v-model="establishmentName">
                  <span class="error" v-if="errors.has('establishmentName')">{{errors.first('establishmentName')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " :class="{error: errors.has('email')}" >
                 <label for="establishmentEmail" class=" [ col-sm-3 col-form-label ] ">Establishment Email</label>
                  <input type="text" name="establishmentEmail" id="establishmentEmail" class=" [ form-control ]  [ p-4 9 "  v-validate="'required|email'" v-model="establishmentEmail">
                  <span class="error" v-if="errors.has('establishmentEmail')">{{errors.first('establishmentEmail')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " :class="{error: errors.has('image')}" >
                  <label for="imageUrl" class=" [ col-sm-3 col-form-label ] " >Image URL</label>
                  <input type="text" name="imageUrl" id="imageUrl" class=" [ form-control ]  [ p-4 ] "  v-validate="'required'" v-model="imageUrl">
                  <span class="error" v-if="errors.has('imageUrl')">{{errors.first('imageUrl')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ]   " :class="{error: errors.has('price')}" >
                 <label for="price" class=" [ col-sm-3 col-form-label ] " >Price per person per night ($)</label>
                  <input type="number" name="price" id="price" class=" [ form-control ]  [ p-4 ] "  v-validate="'required|numeric'" v-model="price">
                  <span class="error" v-if="errors.has('price')">{{errors.first('price')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 <label for="maxGuests" class=" [ col-sm-3 col-form-label ] ">Max guests</label>
                  <input type="number" name="maxGuests" class=" [ form-control ]  [ p-4 ]  " id="maxGuests">
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 <label for="googleLat" class=" [ col-sm-3 col-form-label ] " >Google Coordinates Latitude</label>
                  <input type="text" name="googleLat"  class=" [ form-control ]  [ p-4 ] " id="googleLat" >
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 <label for="googleLong" class=" [ col-sm-3 col-form-label ] " >Google Coordinates Longitude</label>
                  <input type="text" name="googleLong" class="form-control p-4"  id="googleLong">
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 <label for="description" class=" [ col-sm-2 col-form-label ] " >Description</label>
                  <input type="text" name="description" class=" [ form-control p-4 ] " id="description" >
                </div>
               <div class=" [ form-group form-check form-check-inline ]  [ mb-3 ] ">
                <label for="selfCatering ">Self-catering</label>
                  <label for="true" class="form-check-label"  >True</label>
                  <input type="radio" id="true" name="selfCatering" class=" [ form-group form-check-input ] " value="true">
                  <label for="false" class="form-check-label"  >False</label>
                  <input type="radio" id="false" name="selfCatering" class=" [ form-group form-check-input ] "  value="false" >
               </div>
                 <div class=" [ form-group row ]  [ mb-4 ] ">
                  <label for="id" class="col-sm-1 col-form-label" >ID</label>
                  <input type="number" name="id" id="id" class=" [ form-control ] [ p-4 ] "  >
                </div>
                 <div>
                        <button type="submit" class=" [ btn btn-lg btn-primary ]  [ mb-2 ] ">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NewEstablishment',
   data: function () {
      return {
        establishmentName: '',
        establishmentEmail: '',
        price: '',
        imageUrl: '',
      };
      },
    methods: {
      Submit(e) {
        e.preventDefault();
        this.$validator.validateAll().then(() => {
           document.querySelector('#myForm').submit();

      }).catch(()=> {
        return false
      });
    },

}
};
</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$main-bg-color: #301133;
$hover-color: #fa8900;
$button-color: #f55600;
$white-color: #ffffff;
$form-color: #e5e5e6;
.bg-light {
    background-color: #e5e5e6 !important;
}
.btn{
  min-width:150px;

&:hover{
            color:black;
            cursor: pointer;
     }

  }
.btn-primary {
    color: #fff;
    background-color:$button-color !important;
    border-color: $button-color !important;

}
span.error {
  color: #9F3A38;
}
</style>
