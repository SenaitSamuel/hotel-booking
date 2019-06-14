<template>
<nav class=" [ navbar navbar-expand-lg  navbar-dark bg-dark ] " role="navigation" >
        <div class=" [ container ] ">
          <a class=" [ navbar-brand ] " href="#">Hotel</a>
          <button class=" [ navbar-toggler ] " type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class=" [ navbar-toggler-icon ] "></span>
            </button>
          <div class="[ collapse ]  [ navbar-collapse  ] " id="navbarCollapse">
             <ul class=" [ nav navbar-nav ]  [ ml-auto ] ">
            <li class=" [ nav-item  ]  [ active p-3 ] ">
           <router-link class= "nav-link" to="/" exact >Home</router-link>
            </li>
          <li class=" [ nav-item  p-3 ] ">
            <router-link class= "nav-link" to="/Hotel">Hotel</router-link>
          </li>
          <li class=" [ nav-item  p-3 ] ">
            <router-link class= "nav-link" to="/searchFilter">searchFilter</router-link>
          </li>
          <li class=" [ nav-item p-3 ] ">
           <router-link class= "nav-link" to="/Enquiry">Enquiry</router-link>
          </li>
          <li class=" [ nav-item p-3  ] ">
             <router-link class= "nav-link" to="/Contact">Contact</router-link>
          </li>
        </ul>
    </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  data() {
    return {
      show: false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$main-bg-color: #301133;
$hover-color: #fa8900;
$button-color: #f55600;
$white-color: #ffffff;
$form-color: #e5e5e6;


.bg-dark {
    background-color: $main-bg-color !important;
}


 .navbar {
    transition: background-color 0.2s ease;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

    .navbar-brand {
      color: $hover-color;
      font-size:36px;
    }
  .navbar-nav {
    .router-link-exact-active{
     color: $hover-color !important;
     }
      .nav-link {
        color: $white-color;
        font-size:20px;
        &:hover,
        &:active {
           color:$hover-color;
        }
         &.active {
          color: $hover-color !important;
        }
    }
  }
   .navbar-toggler {
     color: $white-color;
     border-color: $white-color;
   }
 }
 @media only screen and (min-width: 320px) and (max-width: 768px) {

  .nav-link {
    width:100%;
    float:none;
  }
}
</style>
