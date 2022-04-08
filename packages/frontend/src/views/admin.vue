<template>
  <sidebarceo />
  <div class="min-h-screen w-full">
    <div class="text-center text-4xl">
      การจองรถ
    </div>
    <div class="text-lg flex flex-col items-center mt-4 mx-20">
      <div class="grid grid-cols-9 text-center border-2 min-w-full">
        <div>แบรนด์</div>
        <div>รุ่น</div>
        <div>โทรศัพท์</div>
        <div>วันที่รับบริการ</div>
        <div>ทะเบียน</div>
        <div>บริการ</div>
        <div>ราคา</div>
        <div>สถานะตอนนี้</div>
        <div>เปลื่ยนสถานะ</div>
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
          <div class="">
            {{ reserve.reserve_price }}
          </div>
          <div class="">
            {{ reserve.reserve_done }}
          </div>
          <div class="">
            <button @click="changeStatus(reserve.reserve_id,'waiting')" class="underline">
              กำลังรอ
            </button>
            <button @click="changeStatus(reserve.reserve_id,'cleaning')" class="underline">
              กำลังล้าง
            </button>
            <button @click="changeStatus(reserve.reserve_id,'done')" class="underline">
              เสร็จสิ้น
            </button>
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
import { useRouter } from 'vue-router'

import { reserves } from '@carcare/common'

import Sidebarceo from '../components/sidebarceo.vue'

import 'dayjs/locale/th'

export default defineComponent({
  name: 'admin',
  components: { Sidebarceo },
  setup () {
    const router = useRouter()

    const name = ref('')
    const surname = ref('')
    const phoneNumber = ref('')
    const birthdate = ref('')
    const salary = ref('')
    const address = ref('')
    const price = ref('')
    const done = ref('')

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
          reserve_service: reserve.reserve_service,
          reserve_price: reserve.reserve_price,
          reserve_done: reserve.reserve_done
        }

        return ret
      })
    })

    const changeStatus = async (id: number, done: 'waiting'|'cleaning'|'done'): Promise<void> => {
      try {
        const response = await ky.patch('http://localhost:4000/reserves', {
          json: {
            id,
            done
          }
        }).json()

        console.log(response)
        router.go(0)
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

    return {
      name,
      surname,
      phoneNumber,
      birthdate,
      salary,
      address,
      price,
      done,
      reservesList,
      changeStatus
    }
  }
})
</script>
