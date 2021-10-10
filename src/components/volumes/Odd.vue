<template>
  <div class="w-72 py-2 text-center">
    <fa icon="volume-up" size="lg"></fa>
    <input type="range" min="0" max="100" v-model.number="volume"
           @mouseleave="changeValue()"
           class="inline-block align-middle mb-1 mx-2 w-60"/>
    <div>Volume: {{ volume }}</div>
  </div>
  <div>
    <button class="btn full" @click="mute()">Mute</button>
    <button class="btn outline" @mouseenter="checkValue()">Ok</button>
  </div>
  <hr class="mt-10"/>
</template>

<script>
  export default {
    name: 'Odd',
    data() {
      return {
        volume: 0,
        lastVolume: 0
      }
    },
    methods: {
      changeValue: function() {
        if(this.volume == 0) { this.volume = 1; return }
        if(this.volume == 100) { this.volume = 99; return }

        if(this.volume > this.lastVolume) this.volume--
        else this.volume++
      },
      checkValue: function() {
        if(this.volume % 2 == 0) this.changeValue()
      },
      mute: function() {
        this.volume = 0
      }
    },
    watch: {
      volume: {
        handler(val, oldVal) {
          this.lastVolume = oldVal
        }
      }
    }
  }
</script>
