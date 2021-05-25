<template>
  <v-app>
    <v-toolbar
      class="px-14"
      flat
    >
      <v-toolbar-title style="font-family: 'Lobster', cursive;">
        <h2>Bakeriet</h2>
      </v-toolbar-title>
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
        dark
        @click="dialog = !dialog"
      >
        Logga in
      </v-btn>
    </v-toolbar>
    <v-main>
      <v-dialog v-model="dialog">
        <v-card
          width="500"
          transition="scale-transition"
          origin="center center"
        >
          <v-card-title class="headline grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Logga in
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    dialog: false
  }),
};
</script>

<style>
.navBtn {
  font-family: "Lobster", cursive;
}
</style>
