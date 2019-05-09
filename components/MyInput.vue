<template>
  <div>
    <input ref="input" type="text">
      <my-button class="btn" @click="onInputClick" />
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import MyButton from '@/components/MyButton'



export default {
  name: 'Input',
  components: {
    MyButton
  },
  methods: {
    onClick(e) {
      this.$emit('click')
    },
      ...mapActions(['updateTitle']),
      onInputClick(e) {
      let inputValue = this.$refs.input.value
      this.updateTitle(inputValue)
    },
  }
}

</script>
