<template>
<div class=" [ page-wrapper ] ">
<!-- As a heading -->


            <!-- List of enquiries -->
        <div class=" [ card col-md-12 ]  [ mb-3] ">
          <div class=" [ card-header ] ">
            <i class=" [ fas fa-table ] "></i>
           List of Enquiries</div>
          <div class=" [ card-body ] ">
            <div class=" [ table-responsive ]  [ table-full-width ] ">
              <table class=" [ table ]  [ table-hover table-striped ] " id="dataTable" cellspacing="0">
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

</style>
