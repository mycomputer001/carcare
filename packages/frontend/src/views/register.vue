<template>
  <div class="min-h-screen w-full">
    <div class="grid grid-cols-2 gap-3 text-center text-1xl grow mt-10">
          <div class="col-span-2 mb-2 text-4xl">สมัครสมาชิก</div>
          <p>Username :</p><input type="Username" placeholder="Username" class="rounded ring-black ring-2 w-60">
          <p>Password :</p><input type="password" placeholder="Password" class="rounded ring-black ring-2 w-60">
          <p>ชื่อ :</p><input type="name" placeholder="ชื่อ" class="rounded ring-black ring-2 w-60">
          <p>นามสกุล :</p><input type="lastname" placeholder="นามสกุล" class="rounded ring-black ring-2 w-60">
          <p>Email :</p><input type="email" placeholder="Email" class="rounded ring-black ring-2 w-60">
          <p>เบอร์โทร :</p><input type="tel" placeholder="เบอร์โทร" class="rounded ring-black ring-2 w-60">
          <p>ที่อยู่ :</p><textarea placeholder="ที่อยู่" name="address" id="address" rows="5" class="rounded ring-black ring-2 w-60"></textarea>
          <router-link to="/firstpage" class="hover:bg-orange-600 col-span-2 mx-auto h-min w-max px-2 bg-main rounded font-bold text-2xl mt-4 ">สมัครสมาชิก</router-link>
          <div></div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'register'
})
</script>
<style scoped>
p {
  text-align: right;
}
</style>
