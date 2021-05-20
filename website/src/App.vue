<template>
  <v-app>
    <v-toolbar class="px-15" flat>
      <v-toolbar-title style="font-family: 'Lobster', cursive;"><h2>Bakeriet</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="navBtn text-capitalize"
        plain
        to="/"
        color="black"
      >Start</v-btn>
      <v-btn
        class="navBtn text-capitalize"
        plain
        to="/varor"
        color="black"
      >Varor</v-btn>
      <v-btn
        class="navBtn text-capitalize"
        plain
        to="/best"
        color="black"
      >Beställningar</v-btn>
      <v-btn
        class="navBtn text-capitalize"
        plain
        to="/omoss"
        color="black"
      >Om oss</v-btn>
      <v-btn
        class="navBtn ml-2"
        rounded
        depressed
        small
        color="primary"
      >Logga in</v-btn>
    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.navBtn{
  font-family: 'Lobster', cursive;
}
</style>
