<template>
<sidebar></sidebar>
<div class="min-h-screen w-full">
  <div class="flex justify-center">
    <div class="ring-black ring-4 w-max py-2 px-5 mt-8 text-center rounded-lg text-3xl">ใบเสร็จ</div>
  </div>
  <div class="flex justify-center p-2">
    <div class="grid grid-cols-2 ring-black ring-4 w-max py-2 px-5 mt-8 text-center rounded-lg text-xl gap-5">
      <div class="col-span-2 text-right">วันที่ 01/01/65</div>
      <div class="col-span-2 text-left">OKCarCare</div>
      <div class="col-span-2 text-left">ที่อยู่ร้าน</div>
      <div class="col-span-2 text-left">ทะเบียนรถยนต์</div>
      <div>รายการ</div>
      <div>ราคา</div>
      <div>ล้างรถ</div>
      <div class="text-right">300 บาท</div>
      <div>ส่วนลด</div>
      <div class="text-right">0 บาท</div>
      <div>รวม</div>
      <div class="text-right">300 บาท</div>
      <div class="flex justify-center col-span-2">
        <img src="@/assets/1.png" alt="logo" width="200" height="auto">
      </div>
    </div>
  </div>
  <div class="flex justify-center p-2">
    <router-link to="/status" class="bg-main w-min rounded-lg p-2 text-lg font-bold hover:bg-orange-600">ยืนยัน</router-link>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '@/components/sidebar.vue'

export default defineComponent({
  name: 'bill',
  components: { Sidebar }
})
</script>
