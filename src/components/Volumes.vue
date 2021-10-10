<template>
  <div class="my-10"><Odd /></div>
  <div class="my-10"><Bouncing /></div>
</template>

<script>
  import Bouncing from './volumes/Bouncing.vue'
  import Odd from './volumes/Odd.vue'

  export default {
    name: 'Volumes',
    components: {
      Bouncing,
      Odd
    }
  }
</script>
