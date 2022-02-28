<script>
  import FooterC from './components/FooterC.vue'

  export default {
    components: {
      FooterC
    },
    data() {
      return {
        menu: 'menu',
        UlOne: 'UlOne'
      }
    }
  }
</script>

<style>
  #app {
    margin: 0;
    background-color: rgb(255, 237, 215);
  }
  h1 {
    margin: 0;
  }

  body {
    margin: 0;
  }

  #menu {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    color: black;
    height: 3em;
    align-items: center;
    overflow: hidden;
    margin-top: 0;
  }
  #UlOne {
    margin: 0;
  }
</style>

<template>
  <nav :id="menu">
    <h1>Welcome</h1>
    <ul :id="UlOne">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>

  <main>
    <routerView />
  </main>

  <footerC />
</template>
