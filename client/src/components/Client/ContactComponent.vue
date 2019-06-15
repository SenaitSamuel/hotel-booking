<template>
<div class= " [ container ]  [ mt-5 ] ">
         <div class=" [ row justify-content-center ] ">
            <div class=" [ col-md-6 ]  [ mt-3 bg-light rounded ] ">
                <div>
                        <h2 class= " [ text-center ]  [ pt-5 ] ">Contact Us</h2>
                        <hr class=" [ bg-light ]   [ mb-5 ] ">
                </div>
                <form @submit.prevent ="Submit" id="myForm" class="p-2" method="POST" action="http://localhost/hotel-booking/server/contact-success.php" >
                    <div class=" [ form-group ]  [ mb-5 ] " :class="{error: errors.has('name')}" >
                    <input type="text" name="clientName" id="clientName" class=" [ form-control ]  [ p-4 ]" v-model="clientName" v-validate="'required'"  placeholder="First Name*" >
                     <span class="error" v-if="errors.has('clientName')">{{errors.first('clientName')}}</span>
                   </div>

                    <div class="[ form-group ]  [ mb-5 ] " :class="{error: errors.has('email')}" >
                  <input type="text" name="email" id="email" class=" [ form-control ]  [ p-4 ] "  v-validate="'required|email'" v-model="email" placeholder="Email*">
                  <span class="error" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
                     <div class="[ form-group ]  [ mb-5 ] ">
                      <textarea  name="message" id="message" class=" [ form-control ] [ rounded-0 ] " rows="8" cols="80" placeholder="Text..."></textarea>
                    </div>
                     <div>
                        <button type="submit" class="btn btn-lg btn-primary mb-2">Contact Us</button>
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
        clientName: '',
        email: '',
      };
      },
   methods: {
      Submit() {
     this.$validator
        .validateAll()
        .then(function(response) {
          // Validation success if response === true
        })
        .catch(function(e) {
          // Catch errors
        })
    },

}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
