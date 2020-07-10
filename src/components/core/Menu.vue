<template>
  <v-navigation-drawer app permanent>
    <router-link to="/">
      <v-img src="@/assets/vue_display.jpg" width="100%"/>
    </router-link>
    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item>menu1</v-list-item>
        <v-list-item>menu2</v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
  export default {
    name: "Menu",
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        selectedMenu: 0,
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

