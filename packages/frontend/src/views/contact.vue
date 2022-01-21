<template>
<sidebar></sidebar>
<div class="min-h-screen w-full">
  <div class="text-6xl text-center mt-5 font-bold">โอเคคาร์แคร์</div>
  <div class="text-6xl text-center mb-5 font-bold">OK CarCare</div>
  <div class="text-center text-2xl">ที่อยู่ : 89 ม.2 ต.ทับคล้อ อ.ทับคล้อ จ.พิจิตร</div>
  <div class="text-center text-2xl">โทรศัพท์ : 06423660270</div>
  <div class="text-center text-2xl">อีเมล : OKcarcareservice@gmail.com</div>
  <div class="text-center text-2xl">เว็ปไซต์ : www.okcarcareservice.com</div>
  <div class="text-center text-2xl">Facebook : OKCarCare LineID : @Okcarcare</div>
  <div class="min-w-min mx-auto mt-20">
    <div class="grid grid-cols-3">
      <div class="flex flex-row col-span-3 justify-center gap-1">
        <img src="@/assets/1.png" width="150" height="auto" alt="logo">
        <img src="@/assets/faceb.png" width="100" height="auto" alt="logo">
        <img src="@/assets/line.png" width="100" height="auto" alt="logo">
      </div>
      <div class="flex flex-row col-span-3 justify-center mt-3">
        <img src="@/assets/qrc.png" width="150" height="auto" alt="logo">
      </div>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '../components/sidebar.vue'

export default defineComponent({
  name: 'contact',
  components: { Sidebar }
})
</script>
