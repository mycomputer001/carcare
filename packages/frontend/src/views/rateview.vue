<template>
  <sidebarceo />
  <div class="min-h-screen w-full">
    <div class="text-center text-4xl">
      คะแนนความพึงพอใจ
    </div>
    <div class="text-lg flex flex-col items-center mt-4 mx-20">
      <div class="grid grid-cols-2 text-center border-2 min-w-min">
        <div>คนที่</div>
        <div>ระดับความพอใจ</div>
        <template v-for="rate of ratesList" :key="rate.rate_id">
          <div class="">
            {{ rate.rate_id }}
          </div>
          <div class="">
            {{ rate.rate_points }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import ky from 'ky'
import { defineComponent, onMounted, Ref, ref } from 'vue'

import { rates } from '@carcare/common'

import Sidebarceo from '../components/sidebarceo.vue'

export default defineComponent({
  name: 'rateview',
  components: { Sidebarceo },

  setup () {
    const ratesList: Ref<Array<rates>> = ref([])

    onMounted(async () => {
      const rates = await ky.get('http://localhost:4000/rates').json<Array<rates>>()
      ratesList.value = [...ratesList.value, ...rates].map(rate => {
        const ret: rates = {
          rate_id: rate.rate_id,
          rate_points: rate.rate_points
        }

        return ret
      })
    })

    return {
      ratesList
    }
  }
})
</script>
