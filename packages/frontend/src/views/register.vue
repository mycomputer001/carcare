<template>
  <div class="min-h-screen w-full">
    <div class="grid grid-cols-2 gap-3 text-center text-1xl grow mt-10">
      <div class="col-span-2 mb-2 text-4xl">
        สมัครสมาชิก
      </div>
      <p>Username :</p>
      <input type="Username" placeholder="Username" class="rounded ring-black ring-2 w-60" v-model="username">
      <p>Password :</p>
      <input type="password" placeholder="Password" class="rounded ring-black ring-2 w-60" v-model="password">
      <p>ชื่อ :</p>
      <input type="name" placeholder="ชื่อ" class="rounded ring-black ring-2 w-60" v-model="firstName">
      <p>นามสกุล :</p>
      <input type="lastname" placeholder="นามสกุล" class="rounded ring-black ring-2 w-60" v-model="lastName">
      <p>Email :</p>
      <input type="email" placeholder="Email" class="rounded ring-black ring-2 w-60" v-model="email">
      <p>เบอร์โทร :</p>
      <input type="tel" placeholder="เบอร์โทร" class="rounded ring-black ring-2 w-60" v-model="telephoneNumber">
      <button class="hover:bg-orange-600 col-span-2 mx-auto h-min w-max px-2 bg-main rounded font-bold text-2xl mt-4" @click="customersUser">
        สมัครสมาชิก
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import ky from 'ky'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'register',
  setup () {
    const router = useRouter()

    const username = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const telephoneNumber = ref('')

    const customersUser = async (): Promise<void> => {
      try {
        const response = await ky.post('http://localhost:4000/customers', {
          json: {
            username: username.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            telephoneNumber: telephoneNumber.value
          }
        }).json()

        console.log(response)
        router.push('/firstpage')
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

    return {
      username,
      password,
      firstName,
      lastName,
      email,
      telephoneNumber,
      customersUser
    }
  }
})
</script>
<style scoped>
p {
  text-align: right;
}
</style>
