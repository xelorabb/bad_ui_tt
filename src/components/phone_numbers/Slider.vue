<template>
  <div>
    Your phone number:
  </div>
  <div>
    <input class="inline-block align-middle mr-1 mb-1"
           type="range" min="0" max="9999999999"
           v-model.number="value"/>
    <span>{{ String(value).padStart(10, '0') }}</span>
  </div>
  <div>
    <Collapse title="Advanced Funtions">
      <button class="btn" @click="add()">+1</button>
      <button class="btn" @click="multiply()">*3</button>
      <button class="btn" @click="divide()">/5</button>
      <button class="btn" @click="substract()">-7</button>
    </Collapse>
    <button class="btn full" @click="reset()">Reset</button>
    <button class="btn outline">Ok</button>
  </div>
  <hr class="mt-10"/>
</template>

<script>
import Collapse from '../Collapse.vue'

export default {
  name: "Slider",
  components: {
    Collapse
  },
  data() {
    return {
      value: 0
    }
  },
  methods: {
    reset: function() {
      this.value = 0
    },
    add: function() {
      this.value = this.value + 1
    },
    multiply: function() {
      this.value = this.value * 3
    },
    divide: function() {
      this.value = Math.floor(this.value / 5)
    },
    substract: function() {
      this.value = this.value - 7
    }
  }
}
</script>
