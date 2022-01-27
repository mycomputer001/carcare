<template>
  <sidebarceo />
  <div class="min-h-screen w-full" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebarceo from '../components/sidebarceo.vue'

export default defineComponent({
  name: 'admin',
  components: { Sidebarceo }
})
</script>
