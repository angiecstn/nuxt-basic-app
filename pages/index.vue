<template>
  <section class="container" :style="{'backgroundColor': backgroundColor}" id="container">
      <my-title class="title" :text="title"/>
      <my-subtitle class="subtitle" :text="text" />
      <my-button class="btn" @click="onTitleClick" />
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
import MyButton from '@/components/MyButton'


export default {
  components: {
    MySubtitle,
    MyTitle,
    MyInput,
    MyColorPicker,
    MyButton
  },
  computed: {
    ...mapGetters(['backgroundColor', 'title', 'text'])
  },
  methods: {
    ...mapActions(['updateIsPressed']),
    onTitleClick(e) {
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

.btn-out {
  position: absolute;
  bottom: -20px;
  transform: translateY(100%);
  margin-left: 30%;
  height: 25px;
}
/*
.btn-out {
  text-align: center;
} */

</style>
