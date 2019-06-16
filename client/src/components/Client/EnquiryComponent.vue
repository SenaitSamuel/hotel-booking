<template>
<div class= " [ page-wrapper ]  [ mt-5 ] ">
         <div class=" [ row justify-content-center ] ">
            <div class=" [ col-md-6 ]  [ mt-2 bg-light rounded ] ">
                <div>
                        <h2 class= " [ text-center ]  [ pt-4 ] ">Enquiry</h2>
                        <hr class=" [ bg-light ]   [ mb-5 ] ">
                </div>
                <form @submit="Submit" class=" [ p-3 ] " id="myForm" method="POST" action="http://localhost/hotel-booking/server/enquiry-success.php" >
                    <div class="   [  form-group  mb-5 ] "  >
                    <select list="establishment" type="text" name="establishment" id="establishment" class=" [  show-menu-arrow ]  [ p-4 ]  "
                    :class="{ 'error-border':  inputEstablishmentError }" v-model="user.establishment" required
                    data-style="form-control" data-live-search="true"  >
                    <option  v-for="(option, index) in establishments" :key="index">
                      {{ option.establishmentName}}
                      </option>
                     </select>
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
                  <input type="date" name="checkin" id="checkin" class=" [ form-control ]  [ p-4 ] " :class="{ 'error-border': inputCheckinError }"  required  placeholder="dd/mm/yyyy" v-model="user.checkin">
                  <div  v-if="showCheckinError"><span class="error" >Please enter checkin </span> </div><br>
                </div>
                 <div class=" [ form-group ]   [ mb-5 ] "   >
                  <input type="date" name="checkout" id="checkout" class=" [ form-control ]   [ p-4 ] "  :class="{ 'error-border': inputCheckoutError }"  required  placeholder="dd/mm/yyyy"  v-model="user.checkout">
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
import axios from 'axios';
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
          message:" ",
           establishments:[ ],

      };
      },
       created() {
    // Fetch Data
    this.fetchData();
},
   methods: {
       fetchData: function () {
           axios.get('./establishments.json' )
           .then(response => this.establishments = response.data)
     },
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

      },


}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
select {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;

}
.btn{
  width: 202px;
}
span.error {
  color: #9F3A38;
}

</style>
