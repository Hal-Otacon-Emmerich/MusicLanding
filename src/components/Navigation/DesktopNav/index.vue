<template>
  <v-tabs
    class="nav-wrap"
    id="nav"
    right
    dark
    color="transparent"
    slider-color="transparent">
    <div class="tabs-wrap">
      <a v-for="(item, index) in links" :key="index" :href="item.link">
        <v-tab>
          {{ item.name }}
        </v-tab>
      </a>
    </div>
  </v-tabs>
</template>
<script>
export default {
  name: "DesktopNav",
  data(){
    return {
      links: [
        {name: 'Home', link: '/'},
        {name: 'Genre', link: '#genre'},
        {name: 'Charts', link: '#charts'},
        {name: 'Search', link: '#search'},
        {name: 'Photo', link: '#photo'},
        {name: 'Contact', link: '#contacts'},
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.menu-tabs{
  float: right;
}
.fixed{
  background-color: #2b2b2b;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12) !important;
}
.nav-wrap{
  background-color: rgba(0, 0, 0, 0) !important;
  transition: background-color 0.4s;
  /deep/ .v-tabs__bar {
    width: 100%;
  }
  .tabs-wrap{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
  a{
    height: 100%;
    text-decoration: none;
  }
}
</style>
