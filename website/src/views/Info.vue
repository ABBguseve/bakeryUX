<template>
  <div
    class="d-flex flex-column justify-center"
    style="font-family: 'Lobster', cursive; width: 100%; text-align: center"
  >
    <h1 class="mb-5 ">
      Information
    </h1>
    <h4
      style="font-family: 'Poppins', sans-serif"
      class="my-5 px-15"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat orci lectus, id scelerisque tortor fringilla in. Morbi nec tortor tristique, elementum leo eu, commodo ante. Morbi ornare quam sit amet egestas suscipit. Etiam suscipit in erat vel rhoncus. Nam sollicitudin ante neque, ac maximus leo aliquet eget. Donec nec aliquet lacus. Cras nec congue neque, tincidunt aliquet odio. Sed rhoncus quam eu urna finibus, vitae sollicitudin dolor convallis. Proin nulla lorem, accumsan non massa ac, aliquam ornare lorem. Maecenas ac lacus porttitor, euismod mi a, aliquet mi. Fusce et tincidunt sapien. Morbi at nisi dignissim, consectetur tellus vel, malesuada ligula. Sed arcu ex, posuere a mi et, maximus tincidunt mauris. Donec bibendum massa id orci auctor, sed lacinia ligula ornare. Vestibulum metus diam, iaculis sit amet euismod non, blandit eget mi.
    </h4>
    <h1 class="my-5">
      Personal
    </h1>
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
