<template>
  <sidebarceo />
  <div class="min-h-screen w-full">
    <div class="flex justify-center">
      <div class="ring-black ring-2 rounded-lg w-min mt-5 p-3">
        <div class="flex justify-center">
          เพิ่มพนักงาน
        </div>
        <div class="flex justify-center gap-5">
          <input type="text" placeholder="ชื่อพนักงาน" class="ring-black ring-2 w-28 rounded ml-3" v-model="name">
          <input type="text" placeholder="นามสกุล" class="ring-black ring-2 w-28 rounded ml-3" v-model="surName">
          <input type="text" placeholder="เบอร์โทรศัพท์" class="ring-black ring-2 w-28 rounded ml-3" v-model="phoneNumber">
          <input type="text" placeholder="อายุ" class="ring-black ring-2 w-28 rounded ml-3" v-model="birthdate">
          <input type="text" placeholder="เงินเดือน" class="ring-black ring-2 w-28 rounded ml-3" v-model="salary">
        </div>
        <div class="flex justify-center">
          <textarea placeholder="ที่อยู่" class="ring-black ring-2 w-56 h-32 rounded ml-3 col-span-5 mt-5 " v-model="address" />
        </div>
        <div class="col-span-5 flex justify-center mt-5">
          <button class="ring-black ring-2 w-28 rounded bg-white shadow-black shadow-inner hover:bg-side" @click="employeeUser">
            เพิ่มพนักงาน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ky from 'ky'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import Sidebarceo from '../components/sidebarceo.vue'

export default defineComponent({
  name: 'employee',
  components: { Sidebarceo },
  setup () {
    const router = useRouter()

    const name = ref('')
    const surName = ref('')
    const phoneNumber = ref('')
    const birthdate = ref('')
    const salary = ref('')
    const address = ref('')

    const employeeUser = async (): Promise<void> => {
      try {
        const response = await ky.post('http://localhost:4000/employee', {
          json: {
            name: name.value,
            surName: surName.value,
            phoneNumber: phoneNumber.value,
            birthdate: birthdate.value,
            salary: salary.value,
            address: address.value
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
      surName,
      phoneNumber,
      birthdate,
      salary,
      address,
      employeeUser
    }
  }
})
</script>
