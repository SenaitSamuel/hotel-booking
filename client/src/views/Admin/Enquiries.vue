<template>
<div class="container-fluid ">
<!-- As a heading -->

<ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Enquiries</li>
        </ol>
            <!-- List of enquiries -->
        <div class="card mb-3">
          <div class="card-header">
            <i class="fas fa-table"></i>
           List of Enquiries</div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th >establishment</th>
                    <th >clientName</th>
                    <th >email</th>
                    <th >checkin</th>
                    <th >checkout</th>
                  </tr>
                </thead>
                 <tbody>
             <EnquiriesComponent v-for=" list in enquiries " :key="list.id"
              :establishment=" list.establishment "
              :clientName =" list.clientName "
              :email =" list.email "
              :checkin =" list.checkin "
              :checkout =" list.checkout "
              />
             </tbody>
              </table>
            </div>
          </div>
        </div>
</div>
</template>

<script>
// @ is an alias to /src
import EnquiriesComponent from '@/components/Admin/EnquiriesComponent.vue';
import axios from 'axios';

export default {
  name: 'enquiries',
  components: {
    EnquiriesComponent,
  },
  data() {
    return{
   // baseUrl: process.env.VUE_APP_BASE_URL,

      enquiries:[ ],
      }
    },
    created() {
    // Fetch Data
    this.fetchData();
},
    methods: {
       fetchData:function () {
          axios.get('./enquiries.json' )
           .then(response => this.enquiries = response.data)
     },

  },
};
</script>
<style scoped lang="scss" >
.navbar-brand{
  font-size: 2.0rem;
}
</style>
