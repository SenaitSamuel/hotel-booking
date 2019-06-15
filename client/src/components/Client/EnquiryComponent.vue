<template>
<div class= " [ container ]  [ mt-5 ] ">
         <div class=" [ row justify-content-center ] ">
            <div class=" [ col-md-6 ]  [ mt-2 bg-light rounded ] ">
                <div>
                        <h2 class= " [ text-center ]  [ pt-4 ] ">Enquiry</h2>
                        <hr class=" [ bg-light ]   [ mb-5 ] ">
                </div>
                <form @submit="Submit" class=" [ p-3 ] " id="myForm" method="POST" action="http://localhost/hotel-booking/server/enquiry-success.php" >
                    <div class=" [ form-group ]   [ mb-5 ] " :class="{error: errors.has('name')}" >
                    <input list="establishment" type="text" name="establishment" id="establishment" class=" [ form-control ]  [ p-4 ] " v-model="establishment" v-validate="'required'"  placeholder="Establishment*" >
                     <span class="error" v-if="errors.has('establishment')">{{errors.first('establishment')}}</span>
                   </div>

                    <div class=" [ form-group ]   [ mb-5 ] " :class="{error: errors.has('name')}" >
                    <input type="text" name="clientName" id="clientName" class=" [ form-control ]  [ p-4 ] " v-model="clientName" v-validate="'required'"  placeholder="First Name*" >
                     <span class="error" v-if="errors.has('clientName')">{{errors.first('clientName')}}</span>
                   </div>

                    <div class=" [ form-group ]   [ mb-5 ] "  :class="{error: errors.has('email')}" >
                  <input type="text" name="email" id="email" class=" [ form-control ]  [ p-4 ] "  v-validate="'required|email'" v-model="email" placeholder="Email*">
                  <span class="error" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>

                 <div class=" [ form-group ]   [ mb-5 ] "  :class="{error: errors.has('email')}" >
                  <input type="date" name="checkin" id="checkin" class=" [ form-control ]  [ p-4 ] "  v-validate="'required'" v-model="checkin">
                  <span class="error" v-if="errors.has('checkin')">{{errors.first('checkin')}}</span>
                </div>
                 <div class=" [ form-group ]   [ mb-5 ] "  :class="{error: errors.has('email')}" >
                  <input type="date" name="checkout" id="checkout" class=" [ form-control ]   [ p-4 ] "  v-validate="'required'" v-model="checkout">
                  <span class="error" v-if="errors.has('checkout')">{{errors.first('checkout')}}</span>
                </div>
                     <div>
                        <button type="submit" class="btn btn-lg btn-primary mb-2">Submit</button>
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
        establishment:'',
        clientName: '',
        email: '',
        checkin:'',
        checkout:'',
      };
      },
    methods: {
      Submit(e) {
        e.preventDefault
        this.$validator.validateAll().then((result) => {
           document.querySelector('#myForm').submit();
         this.$router.push('/bookingConformation');

      }).catch(()=> {
        return false
      });
    },
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
