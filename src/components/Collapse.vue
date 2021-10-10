<template>
  <div>
    <button type="button" class="collapse" @click="toggle($event)">
      {{ title }}
    </button>
    <div class="content">
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Collapse",
  props: {
    title: String
  },
  methods: {
    toggle: function(e) {
      let content = e.target.nextElementSibling
      if(content.style.maxHeight) {
        content.style.maxHeight = null
      } else {
        content.style.maxHeight = content.scrollHeight + "px"
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .collapse {
    @apply text-green-500;
    cursor: pointer;
  }

  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
</style>
