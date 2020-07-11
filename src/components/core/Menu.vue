<template>
  <v-navigation-drawer app permanent>

    <router-link to="/">
      <v-img src="@/assets/vue_display.jpg" width="100%"/>
    </router-link>

    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item v-for="([icon, title, route], i) in menus" :key="i">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-tile-title>
              {{ title }}
            </v-list-tile-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Menu",
    data () {
      return {
        selectedMenu: 0,
        menus: [
          ['mdi-apps-box', 'Stock', '/stock'],
          ['mdi-chart-areaspline', 'Report', '/report'],
          ['mdi-apple-safari', 'About', '/about'],
        ]
      }
    },
    methods: {
      sayHello() {
        alert('hi')
      }
    }
  }
</script>

<style>

</style>

