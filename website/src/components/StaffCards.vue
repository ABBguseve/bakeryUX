<template>
  <div>
    <div>
        <carousel-3d>
            <slide v-for="member in coworkers.data" :key="member.id" :index="member.id">
                <v-card
                    class="my-2 mx-3"
                    max-width="340"
                    outlined
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                        {{ member.role}}
                        </div>
                        <v-list-item-title class="headline mb-1">
                        {{ member.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ member.email}}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ member.phone}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        size="80"
                    >
                    <v-img
                        max-height="100"
                        max-width="100"
                        :src="member.avatar"
                    ></v-img>
                    </v-list-item-avatar>
                    </v-list-item>
                </v-card>
            </slide>
        </carousel-3d>    
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'
//import VueAxios from 'vue-axios'

Vue.use(Carousel3d);


export default {
    name: "info",
    data: () => ({
      coworkers: {}
    }),
    mounted () {
      axios
        .get('http://localhost:3000/staff')
        .then(response => (this.coworkers = response))
    },
    components: {
        Carousel3d,
        Slide
    }
}
</script>

<style>

</style>