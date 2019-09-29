<template>
  <v-app id="app">
    <v-content class="content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
@import "./css/reset.css";
@import "./css/style.scss";

</style>