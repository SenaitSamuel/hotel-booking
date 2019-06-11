<template>
 <tr>
      <td>{{ clientName }}</td>
      <td>{{ email }}</td>
      <td>{{ message}}</td>
  </tr>
</template>

<script>
export default {
  name: 'messages',
  props: ['clientName', 'email', 'message'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
