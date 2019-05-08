<template>
  <div>
    <input ref="input" type="text">
    <button @click="onClick"> Submit </button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'


export default {
  name: 'Input',
  methods: {
    ...mapActions(['updateTitle']),
    onClick(e) {
      let inputValue = this.$refs.input.value
      this.updateTitle(inputValue)
    }
  }
}

</script>
