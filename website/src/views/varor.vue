<template>
        <div class="mx-15 grid-container">
            <v-btn
                fab
                color="primary"
                class="cartButton"
                v-if="this.$store.state.yourCart =! []"
            >
            <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div>
                <v-row no-gutters>
                    <template v-for="cake in cakes" >
                        <v-col :key="cake.id" class="d-flex justify-center">
                            <v-card
                                class="ma-2 navBtn"
                                width="250"
                            >
                                <v-img
                                    height="100"
                                    :src="cake.image"
                                    ></v-img>
                                <v-card-title>{{cake.title}}</v-card-title>
                                <p class="ml-5" style="font-size: 20px; color: gray">{{cake.price}} Kr</p>
                                <v-card-actions>
                                <v-btn
                                    class="navBtn"
                                    color="primary"
                                    style="width: 100%"
                                    @click="addToCart(cake.id)"
                                >köp nu</v-btn>
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
      cart: []
    }),
    mounted () {
      axios
        .get('http://localhost:3000/cakes')
        .then(response => (this.cakes = response.data))
      try {
        this.cart = JSON.parse(localStorage.getItem("inCart"))
      } catch (error) {
        localStorage.setItem("inCart", JSON.stringify([]))
      }
      
    },
    methods: {
        addToCart(cakeID){
            let cakes = this.cakes
            for(let c in cakes){
                if(cakes[c].id == cakeID){
                    this.$store.state.yourCart.push({name: cakes[c].title, id: cakes[c].id})
                }
            }
        }
    }
}
</script>

<style>
.grid-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
}
.cartButton{
    position: fixed;
    bottom: 20px;
    right: 80px;
    z-index: 10;
}
</style>