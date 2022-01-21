<template>
  <div class="min-h-screen w-full">
    <div class="grid grid-cols-2 gap-3 text-center text-xl mt-10">
      <div class="col-span-2 mb-2 text-4xl">เข้าสู่ระบบ</div>
      <p>Username :</p><input type="Username" placeholder="Username" class="rounded ring-black ring-2 w-60">
      <p>Password :</p><input type="password" placeholder="Password" class="rounded ring-black ring-2 w-60">
      <router-link to="/firstpage" class="col-span-2 mx-auto h-min w-max px-2 bg-main rounded font-bold text-2xl mt-4 hover:bg-orange-600">เข้าสู่ระบบ</router-link>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login'
})
</script>
<style scoped>
p {
  text-align: right;
}
</style>
