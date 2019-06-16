<template>
<div class= " [ container ]  [ mt-5 ] ">
         <div class=" [ row justify-content-center ] ">
            <div class=" [ col-md-6 ]  [ mt-3 bg-light rounded ] ">
                <div>
                        <h2 class= " [ text-center ]  [ pt-5 ] ">Contact Us</h2>
                        <hr class=" [ bg-light ]   [ mb-5 ] ">
                </div>
                <form @submit="Submit" id="myForm" class="p-2" method="POST" action="http://localhost/hotel-booking/server/contact-success.php" >
                    <div class=" [ form-group ]  [ mb-5 ] "  >
                    <input type="text" name="clientName" id="clientName" class=" [ form-control ]  [ p-4 ]"  :class="{ 'error-border': inputClientNameError }"  v-model="user.clientName" required  placeholder="First Name*" >
                     <div  v-if="showCientNameError"><span class="error" >Please enter name </span> </div><br>

                   </div>

                    <div class="[ form-group ]  [ mb-5 ] " >
                  <input type="text" name="email" id="email" class=" [ form-control ]  [ p-4 ] "  required :class="{ 'error-border': inputEmailError }"  v-model="user.email" placeholder="Email*">
                   <div  v-if="showEmailError"><span class="error" >Please enter email</span> </div><br>
                </div>
                     <div class="[ form-group ]  [ mb-5 ] ">
                      <textarea  name="message" id="message" class=" [ form-control ] [ rounded-0 ] " rows="8" cols="80" placeholder="Text..."></textarea>
                    </div>
                     <div>
                        <button type="submit" value="Submit" class="btn btn-lg btn-primary mb-2">Contact Us</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import style from '@/styles.scss';
export default {
  name: 'ContactComponent',
   data: function () {
      return {
         user:{
           clientName: '',
           email: '',
           message: 'Please  fill form',
         },
         showCientNameError: false,
          showEmailError: false,
          inputClientNameError: false,
          inputEmailError: false,
      };
      },
   methods: {
      Submit() {
         if (this.user.clientName== " " ) {
          this.message = 'Please enter ClientName';
                   this.showCientNameError = true;
                   this.inputClientNameError = true;
      } else if (this.user.email == " ") {
       this.message = 'Please enter email';
                   this.showEmailError = true;
                   this.inputEmailError = true;
      } else {

      document.querySelector('#myForm').submit();
         alert("Message is submitted");
      }

      }

}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-border{
  border: 1px solid red;
}
.error{
  color: red;
}
</style>
