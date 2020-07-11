<template>
  <v-app>
    <Header v-if="false"/>
    <Menu v-if="false"/>
    <Content />
  </v-app>
</template>

<script>
import Header from '@/components/core/Header'
import Menu from '@/components/core/Menu'
import Content from '@/components/core/Content'

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content
  },

  data: () => ({
    //
  })
};
</script>
