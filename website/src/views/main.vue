<template>
  <div>
      <h1>{{ title }}</h1>
      <p>{{ getCakes }}</p>
  </div>
</template>

<script>

// async function postData(url = 'http://localhost:3000/cakes', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// this.staff = postData()

export default {
    data: () => ({
        title: "Hello",
        staff: []
    }),
}

</script>

<style>

</style>