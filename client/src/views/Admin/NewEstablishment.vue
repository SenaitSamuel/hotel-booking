<template>
  <div class=" [ page-wrapper ]  ">
<!-- As a heading -->

<ol class=" [ breadcrumb ] ">
          <li class=" [ breadcrumb-item ] ">
            <a href="">Dashboard</a>
          </li>
          <li class=" [ breadcrumb-item ] [ active ] ">New Establishment</li>
        </ol>
    <NewEstablishmentComponent/>
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
