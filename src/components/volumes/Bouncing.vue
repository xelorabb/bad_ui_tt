<template>
  <div id="pane" class="w-72 py-2 text-center">
    <button class="btn full w-7" @click="down()">-</button>
    <input type="range" class="inline-block align-middle mx-2 mb-1"
           min="0" max="100" v-model.number="volume" disabled  />
    <button class="btn full w-7" id="right" @click="up()">+</button>
    <div>Volume: {{ volume }}</div>
  </div>
  <div>
    <button class="btn full" @click="reset()">Reset</button>
    <button class="btn outline">Ok</button>
  </div>
  <hr class="mt-10"/>
</template>

<script>
// TODO: change everything *KAPPA*
export default {
  name: 'Bouncing',
  mounted() {
    const vm = this
    const pane = document.getElementById('pane')
    pane.style.cssText = 'transform: rotate(0deg)'

    document.onmousemove = function(e) {
      vm.currentPos = e.clientY

      if(vm.lastPos > 0) {
        vm.diff = (vm.currentPos - vm.lastPos) * vm.direction
        if(vm.diff <= 20 && vm.diff >= -20) {
          pane.style.cssText = 'transform: rotate('+(vm.diff*0.8)+'deg)'
        }
      }
    }
  },
  data() {
    return {
      volume: 0,
      lastPos: 0,
      currentPos: 0,
      diff: 0,
      active: false,
      interval: null,
      direction: 0
    }
  },
  methods: {
    reset: function() {
      clearInterval(this.interval)
      this.volume = 0
    },
    down: function() {
      this.direction = -1
      this.volume = this.volume - 5
      if(this.volume < 0) this.volume = 0
      this.move()
    },
    up: function() {
      this.direction = 1
      this.volume = this.volume + 5
      if(this.volume > 100) this.volume = 100
      this.move()
    },
    move: function() {
      this.active = !this.active

      if(this.active) {
        this.lastPos = this.currentPos

        this.interval = setInterval(() => {

          if(this.diff < 100){
            this.volume = this.volume + this.diff
            if(this.volume < 0) this.volume = 0
            if(this.volume > 100) this.volume = 100
          }
        }, 100)
      } else {
        this.lastPos = 0
        clearInterval(this.interval)

        this.interval = setInterval(() => {
          const pane = document.getElementById('pane')

          if(this.diff > 0) { this.diff -= 1 }
          else if(this.diff < 0) { this.diff += 1 }

          pane.style.cssText = 'transform: rotate('+(this.diff)+'deg)'
          this.volume = this.volume + this.diff

          if(this.diff == 0) { clearInterval(this.interval) }
        }, 50)
      }
    }
  }
}
</script>
