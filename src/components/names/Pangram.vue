<template>
  <div class="font-mono bg-gray-100" style="width: 76%" v-html="text"></div>
  <div>Your name: <span>{{ name }}</span></div>
  <div>
    <button class="btn full" @click="add()">Add</button>
    <button class="btn outline" @click="remove()">Remove</button>
    <button class="btn link">Ok</button>
  </div>
  <hr class="mt-10"/>
</template>

<script>
export default {
  name: 'Pangram',
  created() {
    this.ary = 'the quick brown fox jumps over the lazy dog'.split('')
    this.interval = setInterval(() => {
      this.text = this.ary.slice(0,this.currentPos).join('')
      this.text += '<span class="border border-gray-700 bg-green-500 text-white">' +
                      this.getSelectedText(0) +
                   '</span>'
      this.text += this.ary.slice(this.currentPos + 2).join('')
      this.currentPos += this.direction
      if(this.currentPos > this.ary.length-3 || this.currentPos == 0) this.direction *= -1
    }, 200);
  },
  data() {
    return {
      direction: 1,
      interval: null,
      currentPos: 0,
      text: '',
      ary: '',
      name: ''
    }
  },
  methods: {
    add: function() {
      this.name += this.getSelectedText(1)
    },
    remove: function() {
      this.name = this.name.slice(0,-1)
    },
    getSelectedText: function(off) {
      return this.ary.slice(this.currentPos - off*this.direction,
             this.currentPos + 2 - off*this.direction).join('')
    }
  }
}
</script>
