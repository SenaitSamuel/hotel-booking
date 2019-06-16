<template>
    <div class=" [ page-wrapper ] ">
        <!-- Sidebar Holder -->
        <nav id="sidebar" :class="{ active: active}"  >
            <div class=" [ sidebar-header ] [ pt-3 ] ">
                <h3>HOLIDAZE</h3>
            </div>

            <ul class=" [ navbar-nav ]  [ p-4  text-left ] ">
      <li class=" [ nav-item ] [ active  p-2 ] ">
        <router-link class=" [ nav-link ]  " to="/dashBoard/Overview">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Overview</span>
       </router-link>
      </li>
      <li class=" [ nav-item ]  [ p-2 ] ">
        <router-link class=" [ nav-link ]    " to="/dashBoard/Enquiries">  <span>Enquiries</span></router-link>
         </li>
        <li class=" [ nav-item ] [ p-2 ]  ">
          <router-link class=" [ nav-link ]  " to="/dashBoard/Messages"><span>Messages</span> </router-link>
        </li>
        <li class=" [ nav-item ] [ p-2 ]  ">
          <router-link class=" [ nav-link ]   " to="/dashBoard/NewEstablishment"> <span>New Establishment</span> </router-link>
         </li>
          <li class=" [ nav-item ] [ p-2 ] ">
             <a class=" [ nav-link ] "  href="#" @click="logout()">
               <i class="fa fa-power-off"></i>
                 <span>Logout</span>
                   </a>
                </li>
    </ul>

        </nav>

        <!-- Page Content Holder -->
        <div id="content-wrapper" class=" [ container-fluid  ] ">

            <nav class=" [ navbar ]  [ navbar-expand-lg navbar-light bg-dark ] ">
                <div class=" [ container-fluid ] ">

                    <button type="button" id="sidebarCollapse" class=" [ navbar-btn ]  "  @click="closeMenu()" >
                      <i class="fas fa-bars"></i>
                    </button>

                </div>
    <!-- Navbar -->
              <ul class=" [ navbar-nav ]  [ ml-auto ml-md-0 ] ">
                <li class=" [ nav-item ]  [ dropdown no-arrow ] ">
                  <a class=" [ nav-link dropdown-toggle text-white ] " href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i class=" [ fas fa-user-circle fa-fw ]  "></i>

                      {{name}}
                  </a>
                  <div class=" [ dropdown-menu ] [ dropdown-menu-right ] " aria-labelledby="userDropdown">
                    <a class=" [ dropdown-item ]  " href="#" data-toggle="modal" data-target="#logoutModal"  @click="logout()">
                      <i class="[ fa fa-power-off ] "></i>
                          <span>Logout</span>
                      </a>
                  </div>
                </li>
              </ul>
                      </nav>


        <router-view/>

        </div>
    </div>
</template>

<script>
import style from '@/styles.scss';
// @ is an alias to /src

export default {
  name: 'dashBoard',

  data(){
      return{
        name:'Admin',
        active: false,

      }
  },
   beforeCreate: function () {
    if (!sessionStorage.getItem( 'Token')) {
      this.$router.push('/admin');
    }
  },
  methods:{
    closeMenu(){
       this.active = !this.active;
    },
     logout(){
       localStorage.clear()

      this.$router.push('/admin');

  }
  }
};
</script>

<style scoped lang="scss" >

$main-bg-color: #301133;
$hover-color: #fa8900;
$button-color: #f55600;
$white-color: #ffffff;
$form-color: #e5e5e6;

.page-wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    perspective: 1500px;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: $main-bg-color;
    color: #fff;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
    &.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}
    .sidebar-header {
    background:  $main-bg-color;
}
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


#content-wrapper{
  width: 100%;
  padding: 0px;
  min-height: 100vh;
   transition: all 0.3s;

     .bg-dark {
    background-color: $main-bg-color !important;
    }
  #sidebarCollapse{
    width: 40px;
    height: 40px;
    background:$white-color;
    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
    transition-delay: 0.2s;
    cursor: pointer;
}
 .dropdown-item:hover {
   color:$hover-color;
 }


}

@media (max-width: 768px) {
#sidebar {
        margin-left: -250px;
        transform: rotateY(90deg);
        &.active {
        margin-left: 0;
        transform: none;
    }
    }

}


</style>

