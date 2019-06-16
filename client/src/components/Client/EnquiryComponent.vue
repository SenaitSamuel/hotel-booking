<template>
<div class= " [ container ]  [ mt-5 ] ">
         <div class=" [ row justify-content-center ] ">
            <div class=" [ col-md-6 ]  [ mt-2 bg-light rounded ] ">
                <div>
                        <h2 class= " [ text-center ]  [ pt-4 ] ">Enquiry</h2>
                        <hr class=" [ bg-light ]   [ mb-5 ] ">
                </div>
                <form @submit="Submit" class=" [ p-3 ] " id="myForm" method="POST" action="http://localhost/hotel-booking/server/enquiry-success.php" >
                    <div class=" [ form-group ]   [ mb-5 ] "  >
                    <input list="establishment" type="text" name="establishment" id="establishment" class=" [ form-control ]  [ p-4 ] " :class="{ 'error-border':  inputEstablishmentError }" v-model="user.establishment" required  placeholder="Establishment*" >
                     <div  v-if="showEstablishmentError"><span class="error" >Please enter Establishment </span> </div><br>
                   </div>

                    <div class=" [ form-group ]   [ mb-5 ] "  >
                    <input type="text" name="clientName" id="clientName" class=" [ form-control ]  [ p-4 ] " v-model="user.clientName" :class="{ 'error-border': inputClientNameError }"  required   placeholder="First Name*" >
                      <div  v-if="showClientNameError"><span class="error" >Please enter name </span> </div><br>
                   </div>

                    <div class=" [ form-group ]   [ mb-5 ] "   >
                  <input type="text" name="email" id="email" class=" [ form-control ]  [ p-4 ] "   :class="{ 'error-border': inputEmailError }"  v-model="user.email" required  placeholder="Email*">
                   <div  v-if="showEmailError"><span class="error" >Please enter email</span> </div><br>
                </div>

                 <div class=" [ form-group ]   [ mb-5 ] "   >
                  <input type="date" name="checkin" id="checkin" class=" [ form-control ]  [ p-4 ] " :class="{ 'error-border': inputCheckinError }"  required   v-model="user.checkin">
                  <div  v-if="showCheckinError"><span class="error" >Please enter checkin </span> </div><br>
                </div>
                 <div class=" [ form-group ]   [ mb-5 ] "   >
                  <input type="date" name="checkout" id="checkout" class=" [ form-control ]   [ p-4 ] "  :class="{ 'error-border': inputCheckoutError }"  required   v-model="user.checkout">
                   <div  v-if="showCheckoutError"><span class="error" >Please enter checkout </span> </div><br>
                </div>
                     <div>
                        <button type="submit" value="Submit" class="btn btn-lg btn-primary mb-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import style from '@/styles.scss';
export default {
  name: 'EnquiryComponent',
   data: function () {
      return {
        user:{
         establishment:'',
        clientName: '',
        email: '',
        checkin:'',
        checkout:'',
        },
         showEstablishmentError: false,
          showClientNameError: false,
          showEmailError: false,
          showCheckinError: false,
          showCheckoutError: false,
          inputEstablishmentError: false,
          inputClientNameError: false,
          inputEmailError: false,
          inputCheckinError: false,
          inputCheckoutError: false,
          message:" "


      };
      },
   methods: {
      Submit() {
         if (this.user.clientName== " " || this.user.email == " " || this.user.establishment == " " || this.user.checkin == " " || this.user.checkout== " " ) {
          this.message = 'Please Fill the blank form';
                  this.showEstablishmentError = ture;
                  this.showClientNameError = ture;
                  this.showEmailError = ture;
                  this.showCheckinError = ture;
                  this.showCheckoutError = ture;
                  this.inputEstablishmentError = ture;
                 this. inputClientNameError = ture;
                  this.inputEmailError = ture;
                  this.inputCheckinError = ture;
                  this.inputCheckoutError = ture;
               }
                   else {

      document.querySelector('#myForm').submit();
         alert("Enquiry is submitted");
      }

      }

}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn{
  width: 202px;
}
span.error {
  color: #9F3A38;
}

</style>
