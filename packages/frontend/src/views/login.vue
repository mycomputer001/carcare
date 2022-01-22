<template>
  <div class="min-h-screen w-full">
    <div class="grid grid-cols-2 gap-3 text-center text-xl mt-10">
      <div class="col-span-2 mb-2 text-4xl">
        เข้าสู่ระบบ
      </div>
      <p>Username :</p><input type="Username" placeholder="Username" class="rounded ring-black ring-2 w-60" v-model="username">
      <p>Password :</p><input type="password" placeholder="Password" class="rounded ring-black ring-2 w-60" v-model="password">
      <button class="col-span-2 mx-auto h-min w-max px-2 bg-main rounded font-bold text-2xl mt-4 hover:bg-orange-600" @click="loginUser">
        เข้าสู่ระบบ
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ky from 'ky'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'login',
  setup () {
    const router = useRouter()

    const username = ref('')
    const password = ref('')

    const loginUser = async (): Promise<void> => {
      try {
        const response = await ky.post('http://localhost:4000/login', {
          json: {
            username: username.value,
            password: password.value
          }
        }).json()

        alert(response)

        router.push('/firstpage')
      } catch (error) {
        alert(error)
      }
    }

    return {
      username,
      password,
      loginUser
    }
  }
})
</script>
<style scoped>
p {
  text-align: right;
}
</style>
