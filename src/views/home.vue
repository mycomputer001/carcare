<template>
<div class="min-h-screen w-full">
  <div class="grid grid-cols-2 ml-16 mt-32">
    <img src="@/assets/1.png" alt="logo">
    <div class="flex flex-col ">
      <div class="text-7xl text-main font-bold col-span-2">OK Car Care</div>
      <div class="col-span-2 px-2 text-2xl font-bold">บริการล้าง อัด ฉีด ล้างสีดูดฝุ่น</div>
      <div class="col-span-2 px-2 text-2xl font-bold">บริการเคลือบสี ซักเบาะพรม</div>
      <div class="col-span-2 px-2 text-2xl font-bold">บริการขัดภายในรถยนต์ ขัดคราบยางมะตอย</div>
      <div class="col-span-2 flex px-20 gap-8 mt-10">
        <router-link to="/login" class="hover:bg-orange-600 bg-main p-2 rounded-lg text-3xl text-bold w-max">เข้าสู่ระบบ</router-link>
        <router-link to="/register" class="hover:bg-orange-600 bg-main p-2 rounded-lg text-3xl text-bold w-max">สมัครสมาชิก</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'firstoage'
})
</script>
