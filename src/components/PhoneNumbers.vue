<template>
  <div class="my-10"><Random /></div>
  <div class="my-10"><Select /></div>
</template>

<script>
  import Select from './phone_numbers/Select.vue'
  import Random from './phone_numbers/Random.vue'

  export default {
    name: 'PhoneNumbers',
    components: {
      Select,
      Random
    }
  }
</script>
