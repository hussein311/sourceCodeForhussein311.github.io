<script>
  export default {
    name: 'GreetingUser',
    data() {
      return {
        up: 'up'
      }
    },
    props: { namn: { type: String, required: true } }
  }
</script>
<style>
  #up {
    margin-top: 1em;
  }
</style>
<template>
  <div :id="up" />

  <p>
    Hi {{ namn }}! Welcome to X-chaneg. It’s simple to create an account using
    the our website.
  </p>
</template>
