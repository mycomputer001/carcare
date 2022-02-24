<template>
  <sidebarceo />
  <div class="min-h-screen w-full">
    <div class="flex justify-center text-3xl mt-5">
      สถิติการล้างรถต่อเดือน
    </div>
    <div class="flex justify-center">
      <chart />
    </div>
    <div class="flex justify-center text-3xl mt-5">
      สถิติการเคลือบสีรถต่อเดือน
    </div>
    <div class="flex justify-center">
      <chart />
    </div>
    <div class="flex justify-center text-3xl mt-5">
      สถิติการทำความสะอาดรถต่อเดือน
    </div>
    <div class="flex justify-center">
      <chart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Chart from '../components/chart.vue'
import Sidebarceo from '../components/sidebarceo.vue'

export default defineComponent({
  name: 'chartview',
  components: { Sidebarceo, Chart }
})
</script>
