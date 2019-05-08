<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'MyTitle',
  computed: {
    ...mapGetters(['title'])
  },
}

</script>
