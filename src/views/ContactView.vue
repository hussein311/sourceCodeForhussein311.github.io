<script>
  import GreetingUser from '../components/greetingUser.vue'
  // import  from ''
  import Ithogskolan from '../../assets/Ithogskolan.jpg'

  export default {
    components: { GreetingUser },
    data() {
      return {
        bildId: 'bildId',
        Ithogskolan
      }
    }
  }
</script>

<style>
  #bildId {
    width: 60%;
  }
</style>
<template>
  <h1>Contact</h1>
  <div>
    <GreetingUser namn="Adam" />
    <GreetingUser namn="Emma" />
    <GreetingUser namn="Mohammad" />
  </div>

  <div>
    <section id="form-karta">
      <h2 class="">Contact Us by</h2>
      <p>Telephone: 031-xxxxxx</p>
      <p>Mail: huss@gmail.com</p>
      <section>
        <h2>Visiting address:</h2>
      </section>

      <img :src="Ithogskolan" alt="Ithogskolanonmapp" :id="bildId" />
    </section>
  </div>
</template>
