<template>
  <v-app>
    <v-toolbar
      class="px-15"
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
      <router-view />
    </v-main>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="400"
      >
        <v-card>
          <v-card-title class="navBtn headline grey lighten-2">
            Inloggning
          </v-card-title>
          <v-text-field
            class="px-12 fontStyle_1"
            label="E-post"
            hide-details="auto"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field
            class="px-12 fontStyle_1"
            label="Lösenord"
            hide-details="auto"
          ></v-text-field>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="navBtn ml-2"
              rounded
              depressed
              small
              color="primary"
              dark
              @click="dialog = false"
            >
              Logga in
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
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
.fontStyle_1 {
  font-family: "Poppins", sans-serif;
}
</style>
