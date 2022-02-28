<script>
  export default {
    data() {
      return {
        footerId: 'Myfooter'
      }
    }
  }
</script>

<style>
  #Myfooter {
    margin: 0;
    font-weight: bold;
    background-color: rgb(33, 0, 151);
    width: 100%;
    height: 15em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
  }
</style>

<template>
  <footer :id="footerId">
    <section :class="{ kontakt: true }">
      <h2>Contact Us</h2>
      <p>Telephone: 031-xxxxxx</p>
      <p>Mail: huss@gmail.com</p>
    </section>
    <section :class="{ kontakt: true }">
      <h2>Adress</h2>
      <p>Mölndalsvägen 33 43134 Mölndal</p>
    </section>
    <section :class="{ kontakt: true }">
      <h2>More About Us</h2>
      <p>xxxx</p>
      <p>yyyy</p>
    </section>
  </footer>
</template>
