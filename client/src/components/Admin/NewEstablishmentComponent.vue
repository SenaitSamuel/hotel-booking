<template>
   <div class= " [ container ]  [ mt-5 ] ">
         <div class=" [ row justify-content-center ] ">
            <div class=" [ col-md-12  ]  [ mt-3 bg-light rounded ] ">
                <div>
                        <h2 class= " [ text-center ]  [ pt-5 ] ">New Establishment</h2>
                        <hr class=" [ bg-light ]   [ mb-5 ] ">
                </div>

                <form @submit="Submit" id="myForm" method="POST" action="http://localhost/hotel-booking/server/add-establishments-success.php">
                <div class=" [ form-group row ]  [ mb-4 ] "  >
                 EstablishmentName <input type="text" name="establishmentName" id="establishmentName" class="form-control p-4" :class="{ 'error-border': inputEstablishmentNameError }"  v-model="admin.establishmentName" required  >
                 <div  v-if="showEstablishmentNameError"><span class="error" >Please enter name </span> </div><br>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] "  >
                 EstablishmentEmail <input type="text" name="establishmentEmail" id="establishmentEmail" class=" [ form-control ]  [ p-4 9 ] "  :class="{ 'error-border': inputEstablishmentEmailError }"   v-model="admin.establishmentEmail" required  >
                 <div  v-if="showEstablishmentEmailError"><span class="error" >Please enter name </span> </div><br>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] "  >
                 ImageUrl <input type="text" name="imageUrl" id="imageUrl" class=" [ form-control ]  [ p-4 ] " :class="{ 'error-border': inputImageUrlError }"  v-model="admin.imageUrl" required  >
                  <div  v-if="showImageUrlError"><span class="error" >Please enter Image </span> </div><br>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ]   "  >
                 Price <input type="number" name="price" id="price" class=" [ form-control ]  [ p-4 ] "  :class="{ 'error-border': inputPriceError }"   v-model="admin.price" required  >
                 <div  v-if="showPriceError"><span class="error" >Please enter Price </span> </div><br>
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 MaxGuests <input type="number" name="maxGuests" class=" [ form-control ]  [ p-4 ]  " >

                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 GoogleLat <input type="text" name="googleLat"  class=" [ form-control ]  [ p-4 ] " id="googleLat"  >
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 GoogleLong <input type="text" name="googleLong" class="form-control p-4"  id="googleLong"  >
                </div>
                 <div class=" [ form-group row ]  [ mb-4 ] " >
                 Description <input type="text" name="description" class=" [ form-control p-4 ] "  id="description"  >

                </div>
               <div class=" [ form-group row  form-radio ]  [ mb-4 ] ">
               SelfCatering
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
                Id  <input type="number" name="id" id="id" class=" [ form-control ] [ p-4 ] " :class="{ 'error-border': inputIdError }"  v-model="admin.Id" required   >
                    <div  v-if="showIdError"><span class="error" >Please enter id </span> </div><br>
                </div>
                 <div>
                        <button type="submit" value="Submit" class=" [ btn btn-lg btn-primary ]  [ mb-2 ] ">Submit</button>
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
        admin:{
        establishmentName: '',
        establishmentEmail: '',
        price: '',
        imageUrl: '',
        id: '',
      },
      inputEstablishmentNameError:false,
     inputEstablishmentEmailError:false,
     inputImageUrlError:false,
     inputPriceError:false,
     inputIdError:false,
     showEstablishmentNameError:false,
     showEstablishmentEmailError:false,
     showImageUrlError:false,
     showPriceError:false,
     showIdError:false,
      };
      },
   methods: {
      Submit() {
         if (this.admin.establishmentName== " " || this.admin.establishmentEmail == " " || this.admin.price == " " || this.admin.imageUrl == " " || this.admin.id == " " ) {
          this.message = 'Please Fill the blank form';
                  this. inputEstablishmentNameError = ture;
                  this.inputEstablishmentEmailError = ture;
                  this. inputImageUrlError = ture;
                  this.inputPriceError = ture;
                  this.inputIdError = ture;
                 this. showEstablishmentNameError = ture;
                  this.showEstablishmentEmailError = ture;
                  this.showImageUrlError = ture;
                  this.showPriceError = ture;
                  this.showIdError = ture;
               }
                   else {

      document.querySelector('#myForm').submit();
         alert("New establishment  is added");
      }

      }

}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input{
  cursor:text;

}
.btn{
  width: 202px;
}
span.error {
  color: #9F3A38;
}
</style>
