<template>
  <div>Is this your phone number? {{ random_number }}</div>
  <div>
    <button class="btn full" @click="gen_random_number()">No</button>
    <button class="btn outline">Yes</button>
  </div>
  <hr class="mt-10"/>
</template>

<script>
export default {
  name: 'Random',
  created() {
    this.gen_random_number()
  },
  data() {
    return {
      random_number: "",
    }
  },
  methods: {
    gen_random_number: function() {
      this.random_number = Math.floor(
        Math.random() * 9000000000) + 1000000000
    }
  }
}
</script>
