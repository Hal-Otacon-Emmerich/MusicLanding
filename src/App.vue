<template>
  <v-app>
    <Navigation />
    <transition appear name="slide-y-transition" mode="out-in">
      <router-view />
    </transition>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
// import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Navigation,
    // Footer,
  }
}
</script>
