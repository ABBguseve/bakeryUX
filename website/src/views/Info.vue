<template>
  <div
    class="d-flex flex-column justify-center"
    style="font-family: 'Lobster', cursive; width: 100%; text-align: center"
  >
    <h1 class="mb-5">Information</h1>
    <h4
      style="font-family: 'Poppins', sans-serif"
      class="my-5 px-15"
    >
      Bakeriet är ett litet företag som säljer olika slags tårtor. Tårtorna som
      man köper alltid är nybaggade och innehåller bara de bästa ingrädienterna.
      Våra bagare jobbar för att fylla er dag med glädje och bra smak.
    </h4>
    <h1 class="my-5">Personal</h1>
    <v-spacer></v-spacer>
    <StaffCards> </StaffCards>
  </div>
</template>

<script>
import StaffCards from "../components/StaffCards.vue"

export default {
  components: {
    StaffCards
  },
  name: "Omoss"
};
</script>

<style></style>
