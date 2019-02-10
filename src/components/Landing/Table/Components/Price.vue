<template>
  <section>
    <v-layout row wrap justify-center my-3>
      <v-flex xs12 sm12 md10 mx-2 class="table">
        <v-layout row wrap>
          <v-flex xs12 class="header">
            <v-layout row wrap>
              <v-flex xs1>
                №
              </v-flex>
              <v-flex xs1>
                Cover
              </v-flex>
              <v-flex xs5 pl-3>
                Track
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 my-1 class="table-columns" v-for="(item, index) in price" :key="index">
            <v-layout row wrap>
              <v-flex xs1 sm1 md1 d-flex align-center>
                {{ index + 1}}
              </v-flex>
              <v-flex xs1 md1 sm1 d-flex align-center>
                <img width="80%" :src="item.img" :alt="item.name">
              </v-flex>
              <v-flex xs8 sm8 md5 pl-3 d-flex align-center>
                <p>{{ item.name }}</p>
              </v-flex>
              <v-flex xs1 md1 offset-md4 d-flex align-center class="listen-btn">
                <v-btn round dark color="#1e032c" class="elevation-5">Listen</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {
  name: "Price",
  props: {
    price: {
      type: Array,
      default(){
        return {
        }
      }
    }
  },
  data: () => ({
  })
}
</script>
<style lang="scss" scoped>
.table{
  border-radius: 5px;
}
.header{
  background-color: #e23872;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  padding: 0 5%;
  min-height: 45px;
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.table-columns{
  padding: 0 5%;
  min-height: 45px;
  display: flex;
  align-items: center;
  font-size: 16px;
  transform: scale(1);
  box-shadow: none;
  transition: transform 0.6s, box-shadow 0.4s, border-radius 0.3s, z-index 0.4s;
  z-index: 1;
  border-radius: 4px;
  &:hover{
    border-radius: 4px;
    z-index: 2;
    transform: scale(1.02);
    transition: transform 0.2, box-shadow 0.4s, border-radius 0.2s, z-index 0.2s;
    box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)
  }
  // &:nth-child(odd){
  //   background-color: #90A4AE;
  // }
  // &:nth-child(even){
  //   background-color: #EEEEEE;
  // }
  a{
    width: 80%;
    background-color: #1e032c;
    border-radius: 20px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    color: #e23872;
    text-align: center;
    transition: background-color 0.3s;
    &:hover{
      background-color: #1e032c * 1.6;
    }
  }
}
@media(max-width: 600px){
  .listen-btn{
    display: none !important;
  }
}
</style>
