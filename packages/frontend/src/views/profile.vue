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
      <p>ชื่อ :</p><input type="name" placeholder="ชื่อ" value="Aekkepang" class="rounded ring-black ring-2 w-60">
      <p>นามสกุล :</p><input type="lastname" placeholder="นามสกุล" value="Jantola" class="rounded ring-black ring-2 w-60">
      <p>Email :</p><input type="email" placeholder="Email" value="aek6969@gmail.com" class="rounded ring-black ring-2 w-60">
      <p>เบอร์โทร :</p><input type="tel" placeholder="เบอร์โทร" value="0969869693" class="rounded ring-black ring-2 w-60">
      <router-link to="/profile" class="col-span-2 mx-auto h-min w-max px-2 bg-main rounded font-bold text-2xl mt-4 hover:bg-orange-600">
        แก้ไขข้อมูล
      </router-link>
      <div />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '@/components/sidebar.vue'

export default defineComponent({
  name: 'profile',
  components: { Sidebar }
})
</script>
<style scoped>
p {
  text-align: right;
}
</style>
