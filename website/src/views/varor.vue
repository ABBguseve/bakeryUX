<template>
  <div class="mx-15 grid-container">
    <v-btn
      fab
      color="primary"
      class="cartButton"
      @click="cartList = !cartList"
      v-if="currentUser != null"
    >
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <h3
      class="cartButton"
      style="background: red; color: white; padding: 10px"
      v-if="!currentUser"
    >
      Logga in för att handla
    </h3>
    <v-dialog v-model="cartList" width="600">
      <v-card class="pa-10">
        <h1>Items in your cart</h1>
        <div v-if="cart != 0" class="pa-10">
          <div v-for="i in cart" :key="i" style="display: flex">
            <h1>{{ i.name }}</h1>
            <v-spacer></v-spacer>
            <v-btn fab color="positive" small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn fab small color="negative" class="ml-5">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </div>
        </div>
        <div v-else class="pa-10">
          <h1>No items in cart</h1>
        </div>
        <v-btn class="navBtn" color="primary" style="width: 100%" to="/best"
          >köp nu</v-btn
        >
      </v-card>
    </v-dialog>
    <div>
      <v-row no-gutters>
        <template v-for="cake in cakes">
          <v-col :key="cake.id" class="d-flex justify-center">
            <v-card class="ma-2 navBtn" width="250" style="background: #599fa8">
              <v-img height="100" :src="cake.image"></v-img>
              <v-card-title style="color: white">{{ cake.title }}</v-card-title>
              <p class="ml-5" style="font-size: 20px; color: white">
                {{ cake.price }} Kr
              </p>
              <v-card-actions>
                <v-btn
                  class="navBtn"
                  color="primary"
                  style="width: 100%"
                  @click="addToCart(cake.id)"
                  >köp nu</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
      cakes: {},
      cart: null,
      cartList: false,
      currentUser: null
    }),
    mounted () {
      axios
        .get('http://localhost:3000/cakes')
        .then(response => (this.cakes = response.data))

      if(!JSON.parse(localStorage.getItem("inCart"))){
        localStorage.setItem("inCart", JSON.stringify([]))
      }
      this.cart = JSON.parse(localStorage.getItem("inCart"))
      this.currentUser = JSON.parse(localStorage.getItem("Storage_customer"))
    },
    methods: {
        addToCart(cakeID){
            this.currentUser = JSON.parse(localStorage.getItem("Storage_customer"))
            let cakes = this.cakes
            for(let c in cakes){
                if(cakes[c].id == cakeID){
                    const item = {name: cakes[c].title, id: cakes[c].id}
                    this.cart = JSON.parse(localStorage.getItem("inCart"))
                    this.cart.push(item)
                    localStorage.removeItem("inCart")
                    localStorage.setItem("inCart", JSON.stringify(this.cart))
                    console.log(localStorage.inCart)
                }
            }
        }
      }
    }
  }
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.cartButton {
  position: fixed;
  bottom: 20px;
  right: 80px;
  z-index: 10;
}
</style>
