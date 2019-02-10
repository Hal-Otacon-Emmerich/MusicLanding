<template>
  <div>
    <Header id="header"/>
    <About id="genre"/>
    <Charts id="charts"/>
    <YoutubeMusic id="search"/>
    <Photo id="photo"/>
    <Form id="contacts"/>
    <Footer/>
  </div>
</template>
<script>
import Header from './Header';
import About from './About';
import YoutubeMusic from './YoutubeMusic';
import Photo from './Photo';
import Charts from "./Table";
import Form from './Form';
import Footer from '../Footer';
export default {
  name: "Landing",
  components: {
    Header,
    About,
    YoutubeMusic,
    Charts,
    Photo,
    Form,
    Footer,
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
