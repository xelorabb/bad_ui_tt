<template>
  <div>
    Your phone number: {{ number }}
  </div>
  <div>
    <button class="btn full" @click="reset()">Reset</button>
    <button class="btn outline" @click="add()">+1</button>
    <button class="btn link">Ok</button>
  </div>
  <hr class="mt-10"/>

  <TransitionRoot :show="isOpen" appear as="template">
    <Dialog @close="setIsOpen" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex items-center justify-center" style="min-height: 40%">
        <TransitionChild enter="duration-1000 ease-out"
                         enter-from="opacity-0"
                         enter-to="opacity-100"
                         leave="duration-100 ease-in"
                         leave-from="opacity-100"
                         leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
        </TransitionChild>

        <div class="relative max-w-sm mx-auto bg-white rounded p-5 border border-green-500">
          <TransitionChild enter="duration-1000 ease-out"
                           enter-from="opacity-0 scale-95"
                           enter-to="opacity-100 scale-100"
                           leave="duration-100 ease-in"
                           leave-from="opacity-100 scale-100"
                           leave-to="opacity-0 scale-95">
            <DialogTitle>Do you need an auto clicker?</DialogTitle>

            <div class="flex justify-center">
              <button class="btn full">Yes</button>
              <button class="btn outline">No</button>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionRoot,
  TransitionChild
} from "@headlessui/vue"

export default{
  name: 'AddOne',
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionRoot,
    TransitionChild
  },
  data() {
    return {
      isOpen: false,
      value: 0
    }
  },
  methods: {
    add: function() {
      this.value++

      if(this.value % 13 == 0) {
        this.isOpen = true
      }
    },
    reset: function() {
      this.value = 0
    },
    setIsOpen: function(v) {
      this.isOpen = v
    }
  },
  computed: {
    number: function() {
      return String(this.value).padStart(10,'0')
    }
  }
}
</script>
