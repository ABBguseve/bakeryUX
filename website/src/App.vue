<template>
  <v-app>
    <v-toolbar
      class="px-15"
      flat
    >
      <v-toolbar-title style="font-family: 'Lobster', cursive">
        <h2>Bakeriet</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="screenWidth > 700">
        <v-btn
          class="navBtn text-capitalize"
          plain
          to="/varor"
          color="black"
        >Varor</v-btn>
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
          @click="login_dialog = !login_dialog"
          v-if="!currentUser"
        >
          Logga in
        </v-btn>
        <v-avatar
          class="mx-2"
          v-else
          clickable
          @click="konto_dialog = !konto_dialog"
        >
          <img :src="currentUser.avatar">
        </v-avatar>
      </div>
      
      <div v-else>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        
      </div>

    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>
    <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
        >
          <v-list
            nav
            dense
          >
              <v-list-item>
                <v-btn
                  class="navBtn text-capitalize"
                  plain
                  to="/varor"
                  color="black"
                >Varor</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  class="navBtn text-capitalize"
                  plain
                  to="/omoss"
                  color="black"
                >Om oss</v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn
                  class="navBtn ml-2"
                  rounded
                  depressed
                  small
                  color="primary"
                  dark
                  @click="login_dialog = !login_dialog"
                  v-if="!currentUser"
                >
                  Logga in
                </v-btn>
                <v-avatar
                  class="mx-2"
                  v-else
                  clickable
                  @click="konto_dialog = !konto_dialog"
                >
                  <img :src="currentUser.avatar">
                </v-avatar>
              </v-list-item>
          </v-list>
        </v-navigation-drawer>
    <div
      v-if="!currentUser"
      class="text-center"
    >
      <v-dialog
        v-model="login_dialog"
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
            <h4
              v-if="logInError"
              class="fontStyle_1 shake"
              style="color: red"
            >Fel E-post eller lösenord</h4>
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
    <div
      v-else
      class="text-center"
    >
      <v-dialog
        v-model="konto_dialog"
        width="400"
      >
        <v-card>
          <v-card-title class="navBtn headline grey lighten-2">
            Konto
          </v-card-title>
          <h4 class="px-12 navBtn">Namn</h4>
          <v-spacer></v-spacer>
          <h4 class="px-12 fontStyle_1">{{ currentUser.name }}</h4>
          <v-spacer></v-spacer>
          <v-divider></v-divider>
          <h4 class="px-12 navBtn">E-post</h4>
          <v-spacer></v-spacer>
          <h4 class="px-12 fontStyle_1">{{ currentUser.email }}</h4>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="navBtn my-3 mr-8"
              rounded
              depressed
              small
              color="primary"
              dark
              @click="logOut"
            >
              Logga ut
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>

<script>
import axios from "axios"

export default {
  name: "App",

  data: () => ({
    login_dialog: false,
    konto_dialog: false,
    drawer: false,
    customers: {},
    currentUser: null,
    mail: "",
    password: "",
    logInError: false
  }),
  mounted () {
    axios
      .get("http://localhost:3000/customers")
      .then(response => (this.customers = response.data))
    this.currentUser = JSON.parse(localStorage.getItem("Storage_customer"))
  },
  methods: {
    logIn () {
      let customers = this.customers
      for (let c in customers) {
        if (this.mail == customers[c].email) {
          if (this.password == customers[c].password) {
            this.currentUser = customers[c]
            console.log(customers[c].name)
            console.log("logged in")
            this.login_dialog = false
          }
          else {
            this.logInError = true
          }
        }
        else {
          this.logInError = true
        }
      }
      localStorage.setItem('Storage_customer', JSON.stringify(this.currentUser))
    },
    logOut () {
      this.mail = null
      this.password = null
      this.currentUser = null
      this.konto_dialog = false
      localStorage.removeItem('Storage_customer')
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
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
