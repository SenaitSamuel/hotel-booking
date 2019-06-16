<template>
  <div class=" [ page-wrapper ]  ">
     <div class=" [ card  col-md-12 ]  [ [ mb-3 ] ">
          <div class=" [ card-body ] ">
    <NewEstablishmentComponent/>
  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewEstablishmentComponent from '@/components/Admin/NewEstablishmentComponent.vue';

export default {
  name: 'newEstablishment',
  components: {
    NewEstablishmentComponent,
  },
};
</script>
