<template>
  <sidebarceo />
  <div class="min-h-screen w-full">
    <chart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Chart from '../components/chart.vue'
import Sidebarceo from '../components/sidebarceo.vue'

export default defineComponent({
  name: 'admin',
  components: { Sidebarceo, Chart }
})
</script>
