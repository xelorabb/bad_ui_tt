<template>
  <div>Select phone number:</div>
  <div>
    <select v-for="n in 10" :key="n" v-model="selected[n-1]" class="select">
      <option v-for="v in 10" :key="v" :value="v-1">
        {{ v-1 }}
      </option>
    </select>
  </div>
  <div>
    <button class="btn full" @click="reset()">Reset</button>
    <button class="btn outline">Ok</button>
  </div>
  <hr class="mt-10"/>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      selected: new Array(10).fill(0)
    }
  },
  methods: {
    reset: function() {
      this.selected.forEach((val, i) => {
        this.selected[i] = 0
      })
    }
  }
}
</script>
