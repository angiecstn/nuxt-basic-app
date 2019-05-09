<template>
  <div>
    <input type="color" ref="input" >
    <my-button class="btn" @click="onColorClick" />
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import MyButton from '@/components/MyButton'


export default {
  name: 'ColorPicker',
   components: {
    MyButton
  },
    methods: {
        onClick(e) {
        this.$emit('click')
      },
      ...mapActions(['updateColor']),
      onColorClick(e) {
        let inputColor = this.$refs.input.value
        this.updateColor(inputColor)
    }
  }
}

</script>
