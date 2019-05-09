<template>
  <h1>
    {{ text }}
  </h1>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'MyTitle',
  props: {
     text: {
      type: String,
      required: true
     }
  }
}

</script>
