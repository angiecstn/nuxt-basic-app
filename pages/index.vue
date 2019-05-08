<template>
  <section class="container" :style="{'backgroundColor': backgroundColor}" id="container">
      <my-title class="title" />
      <my-subtitle class="subtitle"/>
      <button class="btn" @click="onClick"> Click me</button>
      <my-input class="input" />
       <my-color-picker class="color-picker" />
  </section>
</template>

<script>
import MySubtitle from '@/components/MySubtitle'
import MyTitle from '@/components/MyTitle'
import { mapActions, mapGetters } from 'vuex'
import MyInput from '@/components/MyInput'
import MyColorPicker from '@/components/MyColorPicker'


export default {
  components: {
    MySubtitle,
    MyTitle,
    MyInput,
    MyColorPicker
  },
  computed: {
    ...mapGetters(['backgroundColor']),
  },
  methods: {
    ...mapActions(['updateIsPressed']),
    onClick(e) {
      this.updateIsPressed()
    }
  }
}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 1fr auto;
  border: 1px solid green;
  align-content: space-between;
  justify-content: center;
  padding: 20px;
  grid-gap: 20px;
  height: 500px;
  position: relative;
}

.title,
.subtitle,
.color-picker {
  grid-column: span 2;
  margin: 0;
  text-align: center;
}

.color-picker {
  position: absolute;
  bottom: -20px;
  transform: translateY(100%);
}

/* .title {
  text-align: center;
} */

</style>
