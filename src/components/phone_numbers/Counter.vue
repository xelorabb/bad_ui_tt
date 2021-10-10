<template>
  <div>Set your phone number: {{number}}</div>
  <div>
    <button class="btn full" @click="restart()">Restart</button>
    <button class="btn outline" @click="set()">Set</button>
    <button class="btn link">Ok</button>
  </div>
  <hr class="mt-10"/>
</template>

<script>
export default {
  name: 'Counter',
  created() {
    this.restart()
    this.createInterval()
  },
  data() {
    return {
      pos: 0,
      count: 0,
      number: "",
      itime: 0,
      interval: null
    }
  },
  methods: {
    restart: function() {
      this.pos = 0
      this.itime = 200
      this.number = new Array(10).fill(0).join('')
      this.createInterval()
    },

    set: function() {
      this.pos++
      this.itime -= 20
      this.createInterval()
    },

    createInterval: function() {
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.number = this.number.replace(
          /./g, (c, i) => i == this.pos ? this.count : c)

        this.count++
        if(this.count > 9) this.count = 0

      }, this.itime)
    }
  }
}
</script>
