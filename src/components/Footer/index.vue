<template>
  <footer>
    <div class="map">
      <iframe src="https://yandex.ru/map-widget/v1/-/CBRkVKfxdD" width="100%" height="400" frameborder="0" allowfullscreen="true"></iframe>
    </div>
    <v-layout row wrap class="footer-info">
      <v-flex xs12 sm12 md3>
        <v-layout column>
          <v-flex xs6 pb-3>
            <h4>Music Freedom</h4>
          </v-flex>
          <v-flex xs4>
            <v-icon style="color: #fff; font-size: 54px;">fas fa-compact-disc</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm12 md2>
        <v-layout column>
          <p>Map</p>
          <v-flex py-1 xs12 v-for="(item, index) in map" :key="index">
            <router-link :to="item.link">
              {{item.name}}
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm12 md3>
        <p>Address</p>
        <v-flex xs12 pt-1 pb-3>
          <a href="#">
            New-York, NY, Time-Squre st.
          </a>
        </v-flex>
        <p>Contact us</p>
        <v-flex xs12 pt-2>
          <a href="mailto:nidken250@gmail.com">nidken250@gmail.com</a>
        </v-flex>
        <v-flex xs12 py-2>
          <a href="tel: +79991111111">+7 (999) 11-11-111</a>
        </v-flex>
      </v-flex>
      <v-flex xs12 sm12 md2>
        <p>Socials</p>
        <v-flex xs12 py-1 v-for="(item, index) in socials" :key="index">
          <a :href="item.link">{{item.name}}</a>
        </v-flex>
      </v-flex>
    </v-layout>
  </footer>
</template>
<script>
export default {
  name: "",
  data: () => ({
    map: [
      {name: 'Home', link: '/'},
      {name: 'Genre', link: '#genre'},
      {name: 'Charts', link: '#charts'},
      {name: 'Search', link: '#search'},
      {name: 'Photo', link: '#photo'},
      {name: 'Contact', link: '#contacts'},
    ],
    socials: [
      {name: 'VK', link: '#'},
      {name: 'Twitter', link: '#'},
      {name: 'Instagram', link: '#'},
    ]
  })
}
</script>
<style lang="scss" scoped>
  footer{
    background-color: #000;
    color: #fefefe;
    .map{
        min-height: 400px;
    }
    .footer-info{
      padding: 50px 100px 75px 100px;
    }
    h4{
      font-weight: 300;
      font-size: 18px;
    }
    p{
      font-size: 14px;
      color: #fefefe;
      margin-bottom: 0;
      font-weight: 300;
    }
    i {
      color: #fff;
    }
    a{
      text-decoration: none;
      color: #424242;
      transition: color 0.5s;
      padding: 10px 0;
      &:hover{
        color: #e23872;
      }
    }
  }
  @media(max-width: 768px){
    .footer-info{
      padding: 50px 25px 75px 25px !important;
      > div{
        margin-bottom: 25px;
      }
    }
  }
</style>
