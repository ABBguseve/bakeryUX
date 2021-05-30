<template>
        <div class="mx-15 grid-container" >
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
      orders: {}
    }),
    mounted () {
      axios
        .get('http://localhost:3000/cakes')
        .then(response => (this.cakes = response.data))
    },
    methods: {
        addToCart(cakeID){
            let cakes = this.cakes
            let c = 0
            for(c in cakes){
                console.log()
                if(cakes[c].id == cakeID){
                    axios.post('http://localhost:3000/orders', )
                }
                c++
            }
            c = 0
        }
    }
}
</script>

<style>
.grid-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
}
</style>