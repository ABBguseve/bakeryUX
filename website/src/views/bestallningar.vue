<template>
    <div>
        <div
            class="d-flex flex-column justify-center align-center"
            style="font-family: 'Lobster', cursive; width: 100%; text-align: center"
            v-if="currUser"
        >
            <div style="width: 80%" v-for="i in inCart" :key="i.id">
                <div v-if="i.quantity > 0" style="display: flex">
                    <h1 >{{i.name}}</h1>
                    <v-spacer></v-spacer>
                    <h2>{{i.quantity}}</h2>
                    <v-btn
                        fab
                        color="positive"
                        small
                        @click="add(i.id)"
                        class="ml-5"
                    >
                    <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        color="negative"
                        class="ml-5"
                        @click="remove(i.id)"
                    >
                    <v-icon>mdi-minus</v-icon>
                    </v-btn>
                </div>
            </div>
            <h1 class="mt-15">Totalt pris: {{totPrice}}Kr</h1>
            <v-btn
                class="navBtn mt-15"
                color="primary"
                x-large
                @click="order()"
            >Beställ nu!</v-btn>
        </div>
        <div
            class="d-flex flex-column justify-center align-center"
            style="font-family: 'Lobster', cursive; width: 100%; text-align: center"
            v-else
        >
        <h1 style="color: #599FA8">Logga in för att handla</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",

  data: () => ({
      inCart: null,
      currUser: null
  }),
  mounted () {
      this.inCart = JSON.parse(localStorage.getItem("inCart"))
      this.currUser = JSON.parse(localStorage.getItem("Storage_customer"))
  },
  methods: {
      remove(ID){
        let cartItems = JSON.parse(localStorage.getItem("inCart"))
        for(let item in cartItems){
            if(cartItems[item].id == ID){
                if(cartItems[item].quantity == 0){
                    cartItems[item] = 0
                    console.log(cartItems)
                }
                else{
                    cartItems[item].quantity -= 1
                }
            }
        }
        localStorage.removeItem("inCart")
        localStorage.setItem("inCart", JSON.stringify(cartItems))
        this.inCart = JSON.parse(localStorage.getItem("inCart"))
    },
    add(ID){
        let cartItems = JSON.parse(localStorage.getItem("inCart"))
        for(let item in cartItems){
            if(cartItems[item].id == ID){
                cartItems[item].quantity += 1
            }
        }
        localStorage.removeItem("inCart")
        localStorage.setItem("inCart", JSON.stringify(cartItems))
        this.inCart = JSON.parse(localStorage.getItem("inCart"))
    },
    order(){
        let cakeList = []
        let inCart = this.inCart
        for(let i in inCart){
            if(inCart[i].quantity > 0){
                cakeList.push({id: inCart[i].id, quantity: inCart[i].quantity})
            }   
        }
        const orderItem = {customerID: JSON.parse(localStorage.getItem("Storage_customer")).id, cakes: cakeList, totalPrice: this.totPrice}
        axios
        .post('http://localhost:3000/orders', orderItem)

        localStorage.removeItem("inCart")
        localStorage.setItem("inCart", JSON.stringify([]))
        alert("Din beställning är skickad!")
        this.$router.push("/")
    }
  },
  computed: {
      totPrice() {
          let totalPrice = 0
          for(let i in this.inCart){
              if(this.inCart[i].quantity > 0){
                  totalPrice += (this.inCart[i].price*this.inCart[i].quantity)
              }
          }
          return totalPrice
      }
  }
}
</script>
