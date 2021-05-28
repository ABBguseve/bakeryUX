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
        v-if="!currentUser"
      >
        Logga in
      </v-btn>

      <v-avatar
        class="mx-2"
        v-else
        clickable
        @click="dialog = !dialog"
      >
        <img :src="currentUser.avatar">
      </v-avatar>

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
            v-model="mail"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field
            type="password"
            class="px-12 fontStyle_1"
            label="Lösenord"
            hide-details="auto"
            v-model="password"
          ></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="navBtn my-3 mr-8"
              rounded
              depressed
              small
              color="primary"
              dark
              @click="logIn"
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
import axios from 'axios'

export default {
  name: "App",

  data: () => ({
    dialog: false,
    customers: {},
    currentUser: null,
    mail: '',
    password: ''
  }),
  mounted () {
    axios
      .get('http://localhost:3000/customers')
      .then(response => (this.customers = response.data))
  },
  methods: {
    logIn () {
      let customers = this.customers
      console.log("customers")
      console.log(this.customers)
      console.log("currentuser")
      console.log(this.mail)
      console.log(this.password)
      // for (i = 0; i < this.customers.length; i++) {
      //   console.log(this.customers[i])
      // }
      for (let c in customers) {
        if (this.mail == customers[c].email) {
          if (this.password == customers[c].password) {
            this.currentUser = customers[c]
            console.log(customers[c].name)
            console.log("logged in")
          }
          else {
            console.error("no matching password")
          }
        }
      }
      this.dialog = false
    }
  }
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
