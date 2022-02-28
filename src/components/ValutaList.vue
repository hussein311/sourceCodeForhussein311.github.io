<script>
  export default {
    created() {
      fetch('	https://open.er-api.com/v6/latest/USD')
        .then((response) => response.json())
        .then((result) => {
          this.valutor = result

          this.lastUpdate = result.time_last_update_utc
          this.nextUpdate = result.time_next_update_utc
          this.rat = result.rates

          console.log(this.rat)
          this.ratKeys = Object.keys(result.rates)
          this.values = Object.values(result.rates)
        })
    },
    data() {
      return {
        valutor: null,
        lastUpdate: 'lastUpdate',
        nextUpdate: '',
        rat: null,
        firstDiv: 'firstDiv',
        convertDiv: 'convertDiv',
        ratKeys: null,
        values: null,

        from: 'USD',
        to: 'SEK',
        no: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  #firstDiv {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    padding: 3em;
    margin-bottom: 2em;
    margin-top: 2em;
    background-color: #09faef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
  }
  #convertDiv {
    padding: 2em;
    background-color: rgb(128, 204, 240);
    height: auto;
  }
  input[type='text'],
  select {
    width: 20%;
    padding: 0.6em;
    border: 0.3em solid rgb(22, 19, 19);
    border-radius: 4px;
    box-sizing: border-box;

    resize: vertical;
  }
  #allCurrency {
    background-color: rgb(128, 204, 240);
    height: auto;
  }
</style>
<template>
  <main>
    <div :id="firstDiv">
      <h2>Last update utc</h2>
      <p>
        {{ lastUpdate }}
      </p>
      <h2>Next update utc</h2>
      <p>{{ nextUpdate }}</p>
    </div>

    <div :id="convertDiv">
      <input type="text" value="1.00" />
      <select v-model="from">
        <option>USD</option>
        <!-- <option>SEK</option>
        <option>EUR</option> -->
      </select>
      <select v-model="to">
        <option>USD</option>
        <option>SEK</option>
        <option>EUR</option>
      </select>
      <input type="button" value="Convert" />
      <input type="text" />
      <input @click="no = !no" type="checkbox" name="verify-age" />
      <label>tryck om du är +18</label>
      <p v-if="no">you are under 18</p>
      <p v-else>You are +18</p>
    </div>
    <div id="allCurrency">
      <ol>
        <h3>All currency</h3>
        <!-- <li :key="rates.id" v-for="rates in ratKeys">{{ rates }}:</li> -->
        <li :key="valuta.id" v-for="(valuta, rates) in rat">
          {{ rates }} = {{ valuta }}
        </li>
      </ol>
    </div>
  </main>
</template>
