<template>
  <v-navigation-drawer
    v-model="toggle"
    absolute
    dark
    temporary>
    <v-list dense class="pt-0">
      <v-list-tile v-for="(item, index) in links" :key="index">
        <v-list-tile-content>
          <v-list-tile-title>
            <a :href="item.link">
              {{ item.name }}
            </a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "",
  data: () => ({
    toggle: false,
    links: [
      {name: 'Home', link: '/'},
      {name: 'Genre', link: '#genre'},
      {name: 'Charts', link: '#charts'},
      {name: 'Search', link: '#search'},
      {name: 'Photo', link: '#photo'},
      {name: 'Contact', link: '#contacts'},
    ]
  })
}
</script>
<style lang="scss" scoped>
</style>
