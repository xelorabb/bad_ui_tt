<template>
  <div class="my-10"><AddOne /></div>
  <div class="my-10"><Slider /></div>
  <div class="my-10"><Counter /></div>
  <div class="my-10"><Random /></div>
  <div class="my-10"><Select /></div>
</template>

<script>
  import Select from './phone_numbers/Select.vue'
  import Random from './phone_numbers/Random.vue'
  import Counter from './phone_numbers/Counter.vue'
  import Slider from './phone_numbers/Slider.vue'
  import AddOne from './phone_numbers/AddOne.vue'

  export default {
    name: 'PhoneNumbers',
    components: {
      Select,
      Random,
      Counter,
      Slider,
      AddOne
    }
  }
</script>
