<template>
    <div>
        <h1 v-for="i in inCart" :key="i.id">{{i.name}}</h1>
    </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
      inCart: null
  }),
  mounted () {
      this.inCart = JSON.parse(localStorage.getItem("inCart"))
  }
}
</script>
