<template>
    <button class="btn" @click="onClick"> Click me</button>
</template>

<script>

export default {
  name: 'MyButton',

  methods: {
    onClick(e) {
      this.$emit('click')
    }
  }
}

</script>

<style scoped>
.btn {
  background-color: black;
  color: white;
}
</style>