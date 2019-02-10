<template>
  <section>
    <div class="title">
      <h3>Music genre</h3>
      <h4>choose your music preferences</h4>
    </div>
    <div>
      <v-flex xs12 sm6 md3  pa-2 v-for="(item, index) in service" :key="index">
        <router-link :to="item.link">
          <div class="sevice-category">
            <p>{{ item.name }}</p>
            <img width="120" :src="item.img" :alt="item.name">
          </div>
        </router-link>
      </v-flex>
    </div>
  </section>
</template>
<script>
export default {
  name: "About",
  data: () => ({
    service: [
      {name: 'EDM', link: {name: 'Service', query: {category: "oil"}}, img: require('../../../assets/covers/edm.png')},
      {name: 'Hip-hop/Rap', link: {name: 'Service'}, img: require('../../../assets/covers/rap.jpg')},
      {name: 'Pop', link: {name: 'Service'}, img: require('../../../assets/covers/pop.jpg')},
      {name: 'Rock', link: {name: 'Service'}, img: require('../../../assets/covers/rock.jpg')},
      {name: 'Future House', link: {name: 'Service'}, img: require('../../../assets/covers/future_house.jpg')},
      {name: 'Future Bass', link: {name: 'Service'}, img: require('../../../assets/covers/future_bass.jpg')},
      {name: 'House', link: {name: 'Service'}, img: require('../../../assets/covers/house.jpg')},
      {name: 'Indie', link: {name: 'Service'}, img: require('../../../assets/covers/indie.jpg')},
    ],
  })
}
</script>
<style lang="scss" scoped>
  section{
    color: #fefefe;
    background-color: #1e032c;
    .title{
      padding: 25px 100px;
    }
    h3{
      font-size: 30px;
      font-weight: 400;
      color: #e23872;
      margin-bottom: 20px;
    }
    h4{
      color: #ddd;
      font-size: 20px;
      font-weight: 400;
    }
    div{
      &:nth-child(2) {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding: 25px 100px;
        a {
          text-decoration: none;
          width: 100%;
        }
        .sevice-category{
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: space-between;
          color: #212121;
          background-color: #fefefe;
          min-width: 100%;
          height: 100%;
          border-radius: 2px;
          transition: background-color 0.5s, color 0.3s;
          img{
            transition: transform 0.4s, box-shadow 0.2s;
            text-align: center;
            margin-bottom: 20px;
          }
          &:hover{
            background-color: #e23872;
            color: #eee;
            img{
              transform: scale(1.2);
              box-shadow: 5px 5px 10px 0 rgba(0,0,0,0.35);
            }
          }
          p{
            margin: 0;
            padding: 20px 0 10px 0;
            font-size: 20px;
          }
          i{
            padding: 10px 0 20px 0;
            font-size: 36px;
          }
        }
      }
    }
  }
  @media(max-width: 768px){
    section{
      .title{
        padding: 25px;
      }
      div{
        &:nth-child(2){
          padding: 25px;
        }
      }
    }
  }
</style>
