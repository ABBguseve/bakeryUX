<template>
  <v-app>
    <div  class="d-flex justify-between " style="background: #F5C96A;">
      <div class="d-flex align-center" style="height: 100%; margin-left: 10px">
        <h1 style="font-family: 'Lobster', cursive; font-weight: lighter; color: white" >Bakeriet</h1>
      </div>
      <v-spacer></v-spacer>
      <div style="margin: 0; height: 100%">
        <template style="height: 100%">
          <v-tabs
            color="white"
            style="height: 100%"
          >
          <v-tabs-slider color="secondary"></v-tabs-slider>
            <v-tab style="height: 100%" class="tab">Item One</v-tab>
            <v-tab class="tab">Item Two</v-tab>
            <v-tab class="tab">Item Three</v-tab>
          </v-tabs>
        </template>
      </div>
    </div>

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
.tab{
  background: #F5C96A;
}
</style>
