<template>
  <div>
    <input type="color" ref="input" id="body" name="body">
    <button @click="onClick"> Submit </button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'


export default {
  name: 'ColorPicker',
    methods: {
    ...mapActions(['updateColor']),
    onClick(e) {
      let inputColor = this.$refs.input.value
      this.updateColor(inputColor)
    }
  }
}

</script>
