<template>
  <div class=" [ page-wrapper ] ">
     <div class=" [ login-page ] ">
       <h1 class=" [ mb-3 ] ">HOLIDAZE</h1>
  <div class="form">
    <form  @submit.prevent="registeredForm" class=" [ register-form ] ">
      	<div class=" [ input-group form-group ]  [ mb-4 ] ">
						<input type="text" placeholder="Name" class=" [ form-control ]  [ p-3 ] " v-model="registeredUser.name" required />
					</div>

          <div class=" [ input-group form-group ]  [ mb-4 ] ">
					 <input type="text" placeholder="User name" class=" [ form-control ]  [ p-2 ] "  v-model="registeredUser.username" required />
					</div>
          <div class="input-group form-group mb-4">
					 <input type="password" placeholder="Password" class=" [ form-control ]  [ p-3 ] "  v-model="registeredUser.password" required />
					</div>
           <div class=" [ form-group ]  [ mb-4 ] ">
					 <button type="submit" class=" [ btn btn-primary btn-block ]  "  >Create</button>
      <p class=" [ message ] ">Already registeredUser? <a href="#" @click="signIn" >Sign In</a></p>
					</div>


    </form>
    <form @submit.prevent="loginForm" class="login-form">

		 <input type="text" class=" [ form-control ] [ p-3 ]"
      placeholder="Username"
      name="loginUser.username"
     v-model="loginUser.username"

      :class="{ 'error-border': loginUser.inputUsernameError }" />

     <div v-if="loginUser.showUsernameError">
       <span class="error">Please enter a correct username</span></div><br>

				<input type="password" class=" [ form-control ] [ p-3 ]"
         placeholder="Password"
         name="loginUser.password"
        v-model="loginUser.password"
         :class="{ 'error-border': loginUser.inputPasswordError }" />
        <div  v-if="loginUser.showPasswordError"><span class="error" >Please enter a correct password</span> </div><br>

     <div class="form-group mb-4" >
        <button type="submit" class="btn btn-primary  btn-block " >Login</button>
      <p class="message">Not registeredUser? <a href="#" @click="signIn" >Create an account</a></p>
     </div>

    </form>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'adminComponent',
  data() {
    return {
      registeredUser: {
        name: '',
        username: '',
        password: '',

      },
     loginUser: {
        firstName: '',
        username: '',
        password: '',
        message: 'Please enter a username and password',
          showUsernameError: false,
          showPasswordError: false,
          inputUsernameError: false,
          inputPasswordError: false
      },
    };
  },
  beforeCreate: () => {
    if (!localStorage.getItem('Username') && !localStorage.getItem('Password')) {
      localStorage.setItem('Name', 'Senait');
      localStorage.setItem('Username', 'Senait');
      localStorage.setItem('Password', '1234');
    }
  },
  methods: {

    signIn(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    },

    registeredForm() {
        localStorage.setItem('name', this.registeredUser.name);
        localStorage.setItem('Username', this.registeredUser.username);
        localStorage.setItem('Password', this.registeredUser.password);
        sessionStorage.setItem('Token', 'f3h349b12sa234');
        this.$router.push('/dashBoard');

    },
    loginForm() {
      if (this.loginUser.username !== localStorage.getItem('Username')) {
      this.message = 'Please enter correct Username';
                   this.loginUser.showUsernameError = true;
                   this.loginUser.inputUsernameError = true;
      } else if (this.loginUser.password !== localStorage.getItem('Password')) {
       this.message = 'Please enter correct password';
                   this.loginUser.showPasswordError = true;
                   this.loginUser.inputPasswordError = true;
      } else {
        sessionStorage.setItem('Token', 'f3h349b12sa234');
        this.$router.push('/dashBoard/Overview');
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$main-bg-color: #301133;
$hover-color: #fa8900;
$button-color: #f55600;
$white-color: #ffffff;
$form-color: #e5e5e6;
body{
  background-color: $form-color;
}

 .login-page {
  width: 400px;
  padding: 10% 0 0;
  margin: auto;
  h1{
    color: $button-color;
  }

.form {
  margin: 0 auto 100px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  input:focus {
    background-color: white;
    width: 300px;
    color:black;
  }
  .btn{
  min-width:150px;
          &:hover,
          &:active,
          &:focus{
            color:black;
            cursor: pointer;
            background-color: $hover-color;
     }

  }
.btn-primary {
    color: #fff;
    background-color:$button-color !important;
    border-color: $button-color !important;

}
.message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
  a {
  color: #4CAF50;
  text-decoration: none;
}
}
.register-form {
  display: none;
}
.error-border{
  border: 1px solid red;
}
.error{
  color: red;
}
}
}

</style>
