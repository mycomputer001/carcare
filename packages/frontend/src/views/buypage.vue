<template>
  <sidebar />
  <div class="min-h-screen w-full">
    <div class="min-w-min mx-auto mt-20">
      <div class="flex justify-center mb-5 text-7xl">
        รายละเอียดการจอง
      </div>
      <div class="grid grid-cols-2 gap-3 text-right text-2xl">
        <div class="">
          ยี่ห้อรถ
        </div>
        <input type="text" placeholder="honda" class="ring-black ring-2 w-1/2 rounded" v-model="brand">
        <div class="">
          รุ่น
        </div>
        <input type="text" placeholder="civid" class="ring-black ring-2 w-1/2 rounded" v-model="model">
        <div class="">
          ทะเบียน
        </div>
        <input type="text" placeholder="xx-xxxx" class="ring-black ring-2 w-1/2 rounded" v-model="license">
        <div class="">
          เบอร์โทร
        </div>
        <input type="text" placeholder="0999999999" class="ring-black ring-2 w-1/2 rounded" v-model="phone">
        <div class="">
          บริการ
        </div>
        <select id="cars" class="ring-black ring-2 w-1/2 rounded" v-model="service">
          <option value="car wash">
            ล้างรถ
          </option>
          <option value="make color">
            เคลือบสี
          </option>
          <option value="clening">
            ทำความสะอาด
          </option>
        </select>
        <div class="">
          วัน
        </div>
        <input type="datetime-local" class="ring-black ring-2 w-1/2 rounded" v-model="date">
        <div class="w-full justify-end">
          <button class="rounded w-min px-2 hover:bg-orange-600 bg-main inline-block" @click="reserveUser">
            ยืนยัน
          </button>
        </div>
        <router-link to="/firstpage" class="rounded w-min px-2 hover:bg-orange-600 bg-main inline-block">
          ยกเลิก
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ky from 'ky'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import Sidebar from '../components/sidebar.vue'

export default defineComponent({
  name: 'buypage',
  components: { Sidebar },
  setup () {
    const router = useRouter()

    const brand = ref('')
    const model = ref('')
    const license = ref('')
    const phone = ref('')
    const service = ref('')
    const date = ref('')

    const reserveUser = async (): Promise<void> => {
      try {
        const response = await ky.post('http://localhost:4000/reserve', {
          json: {
            brand: brand.value,
            model: model.value,
            license: license.value,
            phone: phone.value,
            service: service.value,
            date: date.value
          }
        }).json()

        console.log(response)
        router.push('/bill')
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

    return {
      brand,
      model,
      license,
      phone,
      service,
      date,
      reserveUser
    }
  }
})
</script>
<style scoped>

</style>
