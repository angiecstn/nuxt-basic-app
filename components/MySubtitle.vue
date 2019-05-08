<template>
  <h5>
      {{ text }}
  </h5>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
  name: 'subtitle',

  computed: {
    ...mapGetters(['text'])
  }
}


</script>

<style>

</style>
