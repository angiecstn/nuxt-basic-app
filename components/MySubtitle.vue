<template>
  <h5>
      {{ text }}
  </h5>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
  name: 'MySubtitle',
  props: {
     text: {
      type: String,
      required: true
     }
  }
}


</script>

<style>

</style>
