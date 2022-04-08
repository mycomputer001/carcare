<template>
  <sidebar />
  <div class="min-h-screen w-full">
    <div class="text-4xl font-bold mt-10 mx-16">
      สถานะ
    </div>
    <template v-for="(reserve,i) of reservesList" :key="reserve.reserve_id">
      <div class="ring-black ring-2 mx-10 mt-5 rounded grid grid-cols-4 p-2">
        <div class="text-2xl font-bold">
          {{ reserve.reserve_license }}
        </div>
        <div class="text-2xl font-bold">
          สมาชิก
        </div>
        <div class="text-2xl font-bold col-span-2">
          รายการบริการ
        </div>
        <v-mdi name="mdi-car" size="100" />
        <div class="text-2xl font-bold">
          {{ reserve.reserve_id }}
        </div>
        <div class="text-2xl font-bold">
          {{ reserve.reserve_service }}
        </div>
        <div class="row-span-2 font-bold text-5xl text-orange-500">
          {{ reserve.reserve_done }}
        </div>
        <div class="text-2xl font-bold col-span-4">
          ราคา {{ reserve.reserve_price }} บาท.
        </div>
        <div class="text-2xl font-bold col-span-4">
          ส่วนลด 0 บ.
        </div>
        <div class="col-span-4 flex justify-center gap-3">
          <router-link to="/status" class="text-right bg-main px-2 text-2xl font-bold rounded-lg hover:bg-orange-600" @click="deleteEmployee(i)">
            ยกเลิก
          </router-link>
          <router-link to="/rate" class="text-right bg-main px-2 text-2xl font-bold rounded-lg hover:bg-orange-600" @click="deleteEmployee2(i)">
            เสร็จสิ้น
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import ky from 'ky'
import { defineComponent, onMounted, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

import { reserves } from '@carcare/common'

import Sidebar from '../components/sidebar.vue'

import 'dayjs/locale/th'

export default defineComponent({
  name: 'status',
  components: { Sidebar },
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

    const deleteEmployee = async (index: number): Promise<void> => {
      try {
        await ky.delete('http://localhost:4000/reserves', {
          searchParams: {
            reserveId: reservesList.value[index].reserve_id
          }
        })

        router.go(0)
        alert('delete reserve done')
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

    const deleteEmployee2 = async (index: number): Promise<void> => {
      try {
        await ky.delete('http://localhost:4000/reserves', {
          searchParams: {
            reserveId: reservesList.value[index].reserve_id
          }
        })

        router.push('/rate')
        alert('done')
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

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

    return {
      name,
      surname,
      phoneNumber,
      birthdate,
      salary,
      address,
      price,
      done,
      deleteEmployee2,
      deleteEmployee,
      reservesList
    }
  }
})
</script>
