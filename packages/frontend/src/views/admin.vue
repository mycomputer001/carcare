<template>
  <sidebarceo />
  <div class="min-h-screen w-full">
    <div class="text-center text-4xl">
      การจองรถ
    </div>
    <div class="text-2xl flex flex-col items-center mt-4 mx-20">
      <div class="grid grid-cols-6 text-center border-2 min-w-full">
        <div>แบรนด์</div>
        <div>โมเดล</div>
        <div>โทรศัพท์</div>
        <div>วันที่รับบริการ</div>
        <div>ทะเบียน</div>
        <div>บริการ</div>
        <template v-for="reserve of reservesList" :key="reserve.reserve_id">
          <div class="">
            {{ reserve.reserve_brand }}
          </div>
          <div class="">
            {{ reserve.reserve_model }}
          </div>
          <div class="">
            {{ reserve.reserve_phone_number }}
          </div>
          <div class="">
            {{ reserve.reserve_date }}
          </div>
          <div class="">
            {{ reserve.reserve_license }}
          </div>
          <div class="">
            {{ reserve.reserve_service }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import dayjs from 'dayjs'
import ky from 'ky'
import { defineComponent, onMounted, Ref, ref } from 'vue'

import { reserves } from '@carcare/common'

import Sidebarceo from '../components/sidebarceo.vue'

import 'dayjs/locale/th'

export default defineComponent({
  name: 'admin',
  components: { Sidebarceo },
  setup () {
    const name = ref('')
    const surname = ref('')
    const phoneNumber = ref('')
    const birthdate = ref('')
    const salary = ref('')
    const address = ref('')
    const reservesList: Ref<Array<reserves>> = ref([])

    onMounted(async () => {
      const reserves = await ky.get('http://localhost:4000/reserves').json<Array<reserves>>()
      reservesList.value = [...reservesList.value, ...reserves].map(reserve => {
        const ret: reserves = {
          reserve_id: reserve.reserve_id,
          reserve_brand: reserve.reserve_brand,
          reserve_model: reserve.reserve_model,
          reserve_license: reserve.reserve_license,
          reserve_date: dayjs(reserve.reserve_date).locale('th').format('D-MM-YY HH:mm A'),
          reserve_phone_number: reserve.reserve_phone_number,
          reserve_service: reserve.reserve_service
        }

        return ret
      })
    })

    return {
      name,
      surname,
      phoneNumber,
      birthdate,
      salary,
      address,
      reservesList
    }
  }
})
</script>
