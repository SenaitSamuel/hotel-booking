<template>
<tr>
   <td scoped="row">{{ establishment }}</td>
      <td>{{ clientName }}</td>
      <td>{{ email }}</td>
      <td>{{ checkin }}</td>
      <td>{{ checkout  }}</td>
</tr>


</template>

<script>
export default {
  name: 'enquiries',
  props: ['establishment', 'clientName', 'email', 'checkin', 'checkout'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
