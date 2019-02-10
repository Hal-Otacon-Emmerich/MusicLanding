<template>
  <div>
    <div class="title">
      <h3>Hot Charts</h3>
      <h4>right now</h4>
    </div>
    <Price
      :price="price"/>
  </div>
</template>
<script>
import Price from './Components/Price';
export default {
  name: "Service",
  components: {
    Price
  },
  data: () => ({
    price: [
      { name: 'Calvin Harris & Sam Smith - Promises', img: require('../../../assets/charts/promises.jpg') },
      { name: 'Don Diablo - Survive', img: require('../../../assets/charts/survive.jpg') },
      { name: 'Imagine Dragons - Natural', img: require('../../../assets/charts/natural.jpg') },
      { name: 'Calvin Harris & Dua Lipa - One Kiss', img: require('../../../assets/charts/one_kiss.jpg') },
      { name: 'Marshmello & Bastille - Happier', img: require('../../../assets/charts/happier.jpg') },
      { name: 'Post Malone - Better Now', img: require('../../../assets/charts/better_now.jpg') },
      { name: 'Halsey - Without Me', img: require('../../../assets/charts/without_me.jpg') },
      { name: 'Loud Luxury feat. Brando - Body', img: require('../../../assets/charts/body.jpg') },
      { name: 'San Holo - We Rise', img: require('../../../assets/charts/we_rise.jpg') },
      { name: 'Starley - Call On Me', img: require('../../../assets/charts/call_on_me.jpg') },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.title{
  padding: 25px 100px;
}
h3{
  color: #e23872;
  font-size: 32px;
}
h4{
  font-size: 22px;
}
@media(max-width: 768px){
  .title{
    padding: 25px;
  }
}
</style>
