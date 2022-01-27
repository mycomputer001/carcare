<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series" />
  </div>
</template>

<script lang="ts">

import { ApexOptions } from 'apexcharts'
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  name: 'chart',
  setup  () {
    const options: Ref<ApexOptions> = ref({
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    })

    const series = ref([
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ])

    return {
      options,
      series
    }
  }
})
</script>
