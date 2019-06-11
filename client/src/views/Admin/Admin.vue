<template>
  <div class="page-wrapper">
   <AdminComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminComponent from '@/components/Admin/AdminComponent.vue';
export default {
  name: 'admin',
   components: {
    AdminComponent,
  },
};
</script>
<style lang="scss" scoped>

</style>


