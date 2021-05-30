<template>
  <div>
    <div
      style="height: 100%"
      :class="sizy"
    >
      <carousel
        :perPage="perPage_count"
        class="mb-10"
      >
        <slide
          v-for="member in coworkers.data"
          :key="member.id"
          :index="member.id"
          style="background: white; border: none"
        >
          <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <v-card
              :data-index="index"
              :class="{
                current: isCurrent,
                onLeft: leftIndex >= 0,
                onRight: rightIndex >= 0
              }"
              style="position: relative; width: 100%; height: 100%; mx-5"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    {{ member.role }}
                  </div>
                  <v-spacer></v-spacer>
                  <v-list-item-title class="headline mb-1">
                    {{ member.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{
                    member.email
                  }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{
                    member.phone
                  }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar size="80">
                  <v-img
                    max-height="100"
                    max-width="100"
                    :src="member.avatar"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Vue from "vue"
import { Carousel, Slide } from "vue-carousel"
//import VueAxios from 'vue-axios'

Vue.use(Carousel)

export default {
  name: "info",
  data: () => ({
    coworkers: {},
    perPage_count: 3,
    sizy: ""
  }),
  mounted () {
    axios
      .get("http://localhost:3000/staff")
      .then(response => (this.coworkers = response))
  },
  updated () {
    if (screen.width < 1000 && screen.width > 680) {
      this.perPage_count = 2
      this.sizy = "mx-10"
    } else if (screen.width < 680) {
      this.perPage_count = 1
      this.sizy = "mx-5"
    } else {
      this.perPage_count = 3
      this.sizy = "mx-15"
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style></style>
