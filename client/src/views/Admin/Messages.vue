<template>
<div class=" [ page-wrapper ] ">
         <!-- List of Messages -->
    <div class=" [ card  col-md-12 ]  [ [ mb-3 ] ">
          <div class=" [ card-header ] ">
            <i class=" [ fas fa-table ] "></i>
           List of Messages</div>
          <div class=" [ card-body ] ">
           <div class=" [ table-responsive ]  [ table-full-width ] ">
            <table class=" [ table ]  [ table-hover table-striped ] " id="dataTable" cellspacing="0">
    <thead>
    <tr>
     <th >client Name</th>
      <th >email</th>
      <th >Messages</th>
    </tr>
  </thead>
  <tbody>
     <MessagesComponent  v-for=" list in messages " :key="list.id"
              :clientName=" list.clientName "
              :email =" list.email "
              :message =" list.message "
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
import MessagesComponent from '@/components/Admin/MessagesComponent.vue';
import axios from 'axios';

export default {
  name: 'messages',
  components: {
    MessagesComponent,
  },
  data() {
    return{
   // baseUrl: process.env.VUE_APP_BASE_URL,

      messages:[ ],
      }
    },
    created() {
    // Fetch Data
    this.fetchData();
},
    methods: {
       fetchData:function () {
          axios.get('./contact.json' )
           .then(response => this.messages = response.data)
     }
  },
};
</script>

