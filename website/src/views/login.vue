<template>
  <div class="form">
      <h1>Bakeriet</h1>
        <div>
            <v-text-field
            class="formInp"
            label="Användarnamn"
            color="primary"
            hide-details="auto"
            ></v-text-field>
        </div>
        <div>
            <v-text-field
            class="formInp"
            type="password"
            label="Lösenord"
            color="primary"
            hide-details="auto"
            ></v-text-field>
        </div>
    <v-btn
        class="loginBtn"
        color="primary"
        rounded
        large
    >Logga In</v-btn>
  </div>
</template>

<script>

export default {
    data: () => ({

    }),
  }
</script>

<style>
*{
    box-sizing: border-box;
}
:root{
    --primary: #F5C96A
}
.form{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Lobster', cursive;
}
.form .formInp{
    margin-bottom: 5px;
    width: 250px;
    padding: 5px;
    font-size: 16px;
}
.form .loginBtn{
    margin-top: 20px;
    font-size: 18px;
    width: 250px;
    box-shadow: none;
}
.form h1{
    color: var(--primary);
    font-size: 56px;
    font-weight: lighter;
}
</style>