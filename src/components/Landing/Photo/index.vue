<template>
  <section>
    <h3>Photo</h3>
    <h4>from stages</h4>
    <v-layout row wrap>
      <v-flex class="photo-wrap" xs12 sm12 md4 pa-2 v-for="(item, index) in photo" :key="index">
        <img :src="item.img" alt="">
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
// import Dialog from './Components/Dialog';
export default {
  name: "Photo",
  data: () => ({
    dialog: null,
    photo: [
      {img: require('../../../assets/photo/1.jpg')},
      {img: require('../../../assets/photo/2.jpg')},
      {img: require('../../../assets/photo/3.jpg')},
      {img: require('../../../assets/photo/4.jpeg')},
      {img: require('../../../assets/photo/5.jpg')},
      {img: require('../../../assets/photo/6.png')}
    ],
  })
}
</script>
<style lang="scss" scoped>
section{
  padding: 25px 100px;
}
h3{
  color: #e23872;
  font-size: 32px;
}
h4{
  font-size: 22px;
}
.photo-wrap{
  overflow: hidden;
  img{
    width: 100%;
    min-height: 100%;
    // max-height: 180px;
    transition: transform 0.3s;
    cursor: pointer;
  }
  &:hover{
    img{
      transform: scale(1.05);
    }
  }
}
@media(max-width: 768px){
  section{
    padding: 25px;
  }
}
</style>
