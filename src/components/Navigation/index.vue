<template>
  <div :class="{fixed_menu: scrollOffset > 0}">
    <v-icon class="mx-2" style="color: #fff;">fas fa-compact-disc</v-icon>
    <Menu class="desktop-menu"/>
    <v-btn fab small dark color="transparent" class="elevation-0 mobile-nav" @click="toggle = !toggle">
      <v-icon>fas fa-bars</v-icon>
    </v-btn>
    <MobileMenu :toggle='toggle' class="mobile-nav"/>
  </div>
</template>
<script>
import Menu from './DesktopNav';
import MobileMenu from './MobileNav';
export default {
  name: "Navigation",
  components: {
    Menu,
    MobileMenu,
  },
  data() {
    return{
      scrollOffset: 0,
      toggle: false,
    }
  },
  methods: {
    menuScroll() {
      return this.scrollOffset = window.pageYOffset;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.menuScroll);
  }
}
</script>
<style lang="scss" scoped>
div{
  z-index: 5;
  position: fixed;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  height: 48px;
  background-color: #fff0;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0);
  transition: background-color 0.5s, box-shadow 0.5s;
  .fixed_menu{
    background-color: #1e032c;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.75);
    transition: background-color 0.5s, box-shadow 0.5s;
  }
  .mobile-nav{
    display: none;
  }
}
@media(max-width: 972px) {
  .mobile-nav{
    display: block !important;
  }
  .desktop-menu{
    display: none;
  }
}
</style>
