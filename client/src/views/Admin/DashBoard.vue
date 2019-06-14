<template>
<div class="page-wrapper">
     <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

    <a class="navbar-brand mr-1 text-white" >Hotel</a>

    <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle"  @click="show = !show" href="#">
     <i class="fas fa-bars"></i>
    </button>

    <!-- Navbar Search -->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    <!-- Navbar -->
    <ul class="navbar-nav ml-auto ml-md-0">
      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user-circle fa-fw "></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <a class="dropdown-item btn btn-primary" href="#" data-toggle="modal" data-target="#logoutModal"  @click="logout()">
            <i class="fa fa-power-off"></i>
                 <span>Logout</span>
            </a>
        </div>
      </li>
    </ul>
  </nav>
 <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <transition name="slide">
    <ul class="sidebar navbar-nav p-2" v-show="show">
      <li class="nav-item active">
        <router-link class="nav-link" to="/dashBoard/Overview">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Overview</span>
       </router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link" to="/dashBoard/Enquiries">  <span>Enquiries</span></router-link>
         </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/dashBoard/Messages"><span>Messages</span> </router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/dashBoard/NewEstablishment"> <span>New Establishment</span> </router-link>
         </li>
          <li class="nav-item ">
             <a class="nav-link"  href="#" @click="logout()">
               <i class="fa fa-power-off"></i>
                 <span>Logout</span>
                   </a>
                </li>
    </ul>
  </transition>
        <!-- Page Content  -->


<div id="content-wrapper">

        <router-view/>
      </div>
        </div>
        </div>


</template>

<script>
// @ is an alias to /src
import AdminComponent from '@/components/Admin/AdminComponent.vue';

export default {
  name: 'dashBoard',
  components: {
    AdminComponent,
  },

  data(){
      return{
        name: 'Admin',
        show: true,
      }
  },
   beforeCreate: function () {
    if (!sessionStorage.getItem( 'Token')) {
      this.$router.push('/admin');
    }
  },
  methods:{
    closeMenu(e){
      e.preventDefault();

    $(".sidebar").toggleClass("toggled");
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



.slide-enter {
  transform: translate(-100%, 0);
}

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


#sidebar-wrapper {
    display: flex;
     align-items: stretch;
      #content-wrapper {
    overflow-x: hidden;
    width: 100%;
    padding-top: 1rem;
  }
}

.sidebar {

  background-color: $main-bg-color;
  min-height: 100vh;
  .nav-item {
    .nav-link {
      color: $white-color;
      &:active,
      &:focus,
      &:hover {
        color: $hover-color;
      }
    }
  }
  &.toggled {
    width: 0 !important;
    overflow: hidden;
  }
}

@mixin rotate {
  transform: rotate(15deg);
}

@mixin sidebar-icons {
  .nav-item {
    &:last-child {
      margin-bottom: 1rem;
    }
    .nav-link {
      text-align: center;
      padding: 0.75rem 1rem;
      span {
        font-size: 0.65rem;
        display: block;
      }
    }
    .dropdown-menu {
      position: absolute !important;
      transform: none !important;
      margin: 0;
      &.dropup {
        bottom: 0;
        top: auto !important;
      }
    }
    &.dropdown .dropdown-toggle::after {
      display: none;
    }
  }
}


@media (min-width: 768px) {
  .sidebar {


    .nav-item {
      .nav-link {
        display: block;
        width: 100%;
        text-align: left;
        padding: 1rem;

        span {
          font-size: 1rem;
          display: inline;
        }
      }
      .dropdown-menu {
        position: static !important;
        margin: 0 1rem;
        // Position fix for Firefox
        top: 0;
      }
      &.dropdown .dropdown-toggle::after {
        display: block;
      }
    }
    &.toggled {
      overflow: visible;
      width: 100% !important;
    }
  }
}


</style>

