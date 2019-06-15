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
                  <input type="text" name="establishmentName" id="establishmentName" class="form-control p-4" v-validate="'required'"  placeholder="Establishment Name"  v-model="establishmentName">
                  <span class="error" v-if="errors.has('establishmentName')">{{errors.first('establishmentName')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " :class="{error: errors.has('email')}" >
                  <input type="text" name="establishmentEmail" id="establishmentEmail" class=" [ form-control ]  [ p-4 9 "  placeholder="Establishment Email"  v-validate="'required|email'" v-model="establishmentEmail">
                  <span class="error" v-if="errors.has('establishmentEmail')">{{errors.first('establishmentEmail')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " :class="{error: errors.has('image')}" >
                  <input type="text" name="imageUrl" id="imageUrl" class=" [ form-control ]  [ p-4 ] " placeholder="Image URL"  v-validate="'required'" v-model="imageUrl">
                  <span class="error" v-if="errors.has('imageUrl')">{{errors.first('imageUrl')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ]   " :class="{error: errors.has('price')}" >
                  <input type="number" name="price" id="price" class=" [ form-control ]  [ p-4 ] "  placeholder="Price per person per night ($)"  v-validate="'required|numeric'" v-model="price">
                  <span class="error" v-if="errors.has('price')">{{errors.first('price')}}</span>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                  <input type="number" name="maxGuests" class=" [ form-control ]  [ p-4 ]  "  placeholder="Max guests" id="maxGuests">
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                  <input type="text" name="googleLat"  class=" [ form-control ]  [ p-4 ] " id="googleLat" placeholder="Google Coordinates Latitude" >
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                  <input type="text" name="googleLong" class="form-control p-4"  id="googleLong" placeholder="Google Coordinates Longitude" >
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                  <input type="text" name="description" class=" [ form-control p-4 ] " id="description" placeholder="Description" >
                </div>
               <div class=" [ form-group row  form-radio ]  [ mb-4 ] ">
                <label for="selfCatering " class=" [radio-inline ] [ px-3 ] " >Self-catering</label>
                <label class=" [ radio-inline ]  [ px-3 ] ">
                <input type="radio" id="true" name="selfCatering"   value="true">
                True
                </label>

                <label class=" [ radio-inline  ]  [ px-3 ] ">
                  <input type="radio" id="false" name="selfCatering"  value="false" >
                  False
                   </label>
               </div>
                 <div class=" [ form-group row ]  [ mb-4 ] ">
                  <input type="number" name="id" id="id" class=" [ form-control ] [ p-4 ] " placeholder="ID" >
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
import style from '@/styles.scss';
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
