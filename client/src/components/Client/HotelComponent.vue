<template>
    <div>
      <img :src="image" class=" [ card-img-top ] " alt="Hotel image">
      <div class=" [ card-body ] ">
        <h5 class=" [ card-title ] ">{{ name }}</h5>
        <h5 class=" [ card-title ] "><span>$ {{ price }} </span></h5>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HotelComponent',
  props: ['name', 'image', 'id','price'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  img {
  height: 30vh;
  object-fit: cover;
  transition: .5s ease;

}
span{
  color: #9F3A38;
}


</style>
