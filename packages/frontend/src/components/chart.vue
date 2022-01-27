<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series" />
  </div>
</template>

<script lang="ts">

import { ApexOptions } from 'apexcharts'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import { defineComponent, Ref, ref } from 'vue'

import 'dayjs/locale/th'

dayjs.extend(localeData)
dayjs.locale('th')

export default defineComponent({
  name: 'chart',
  setup  () {
    const options: Ref<ApexOptions> = ref({
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: dayjs.months()
      }
    })

    const series = ref([
      {
        name: 'จำนวนรถ',
        data: Array.from<number, number>({ length: 12 }, () => Math.floor(Math.random() * 30))
      }
    ])

    return {
      options,
      series
    }
  }
})
</script>
