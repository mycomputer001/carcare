<template>
  <sidebar />
  <div class="min-h-screen w-full">
    <div class="m-10">
      <v-mdi name="mdi-book-open-page-variant" fill="black" size="50" />
      <div class="inline text-4xl ml-4">
        ข้อมูลบัญชี
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 text-center text-xl mt-10 mx-16">
      <p>ชื่อ :</p><input type="name" placeholder="ชื่อ" v-model="name" class="rounded ring-black ring-2 w-60">
      <p>นามสกุล :</p><input type="lastname" placeholder="นามสกุล" v-model="surname" class="rounded ring-black ring-2 w-60">
      <p>Email :</p><input type="email" placeholder="Email" v-model="email" class="rounded ring-black ring-2 w-60">
      <p>เบอร์โทร :</p><input type="tel" placeholder="เบอร์โทร" v-model="phoneNumber" class="rounded ring-black ring-2 w-60">
      <button class="col-span-2 mx-auto h-min w-max px-2 bg-main rounded font-bold text-2xl mt-4 hover:bg-orange-600" @click="updateProfile">
        แก้ไขข้อมูล
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import ky from 'ky'
import { defineComponent, onMounted, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

import { customers } from '@carcare/common'

import Sidebar from '@/components/sidebar.vue'

export default defineComponent({
  name: 'profile',
  components: { Sidebar },
  setup () {
    const router = useRouter()
    const name = ref('')
    const surname = ref('')
    const phoneNumber = ref('')
    const email = ref('')
    const profileID = ref('')

    const profileList:Ref<Array<customers>> = ref([])
    onMounted(async () => {
      try {
        const profile = await ky.get('http://localhost:4000/profile').json<Array<customers>>()
        profileList.value = [...profileList.value, ...profile]
        name.value = profileList.value[0].customer_name ?? ''
        surname.value = profileList.value[0].customer_surname ?? ''
        phoneNumber.value = profileList.value[0].customer_phone_number ?? ''
        email.value = profileList.value[0].customer_email ?? ''
        profileID.value = profileList.value[0].customer_id ?? ''
        console.log(profileList.value)
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    })

    const updateProfile = async (): Promise<void> => {
      try {
        await ky.patch('http://localhost:4000/profile', {
          json: {
            name: name.value,
            surname: surname.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            profileID: profileID.value
          }
        })

        router.go(0)
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }
    return {
      profileList,
      name,
      surname,
      email,
      phoneNumber,
      updateProfile
    }
  }
})
</script>
<style scoped>
p {
  text-align: right;
}
</style>
