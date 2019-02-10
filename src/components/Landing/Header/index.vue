<template>
  <header>
    <div class="title">
      <h2>Music</h2>
      <hr color="#fff">
      <h1>find your own music genre</h1>
      <v-layout row wrap justify-center mt-5>
        <v-flex class="socials" xs2 v-for="(item, index) in socials" :key="index">
          <a :href="item.link">
            <v-icon>{{ item.icon }}</v-icon>
          </a>
        </v-flex>
      </v-layout>
    </div>
    <img src="../../../assets/header/jungle.png" alt="jungle">
  </header>
</template>
<script>
export default {
  name: "",
  data: () => ({
    socials: [
      {icon: 'fab fa-vk', link: '#'},
      {icon: 'fab fa-twitter', link: '#'},
      {icon: 'fab fa-instagram', link: '#'},
    ],
  })
}
</script>
<style lang="scss" scoped>
header{
  margin-top: -48px;
  height: 100vh;
  background-image: url(../../../assets/header/evening_sky.png);
  background-position: center -300px;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  text-align: center;
  align-items: center;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
  background-color: #ff6b21;
  img {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
  .title{
    z-index: 3;
  }
  h1{
    font-size: 18px;
    color: #fefefe;
    font-weight: 400;
    width: 100%;
  }
  h2{
    font-size: 52px;
    letter-spacing: 5px;
    color: #fefefe;
    font-weight: 400;
  }
  hr{
    max-height: 0;
    margin: 5px auto;
    border-width: 1px 0 0 0;
  }
  .socials{
    a{
      text-decoration: none;
    }
    &:first-child{
      a{
        /deep/ i{
          font-size: 30px;
          color: #4c75a3 !important;
          transition: color 0.3s;

          &:hover{
            color: #4c75a3 * 1.2 !important;
          }
        }
      }
    }
    &:nth-child(2){
      a{
        /deep/ i{
          font-size: 30px;
          color: #0084b4 !important;
          transition: color 0.3s;

          &:hover{
            color: #0084b4 * 1.2 !important;
          }
        }
      }
    }
    &:last-child{
      a{
        /deep/ i{
          font-size: 30px;
          color: #e4405f * 1.2 !important;
          transition: color 0.3s;

          &:hover{
            color: #e4405f * 1.5 !important;
          }
        }
      }
    }
  }
  // .adress{
  //   color: #fefefe;
  //   font-size: 18px;
  //   /deep/ i {
  //     margin-right: 5px;
  //     color: #c62828 !important;
  //   }
  // }
  // .phone{
  //   color: #fefefe;
  //   font-size: 18px;
  //   /deep/ i {
  //     color: #1E88E5;
  //   }
  // }
}
</style>
