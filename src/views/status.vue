<template>
<sidebar></sidebar>
<div class="min-h-screen w-full">
  <div class="text-4xl font-bold mt-10 mx-16">สถานะ</div>
  <div class="ring-black ring-2 mx-10 mt-5 rounded grid grid-cols-4 p-2">
    <div class="text-2xl font-bold">ปย-6969</div>
    <div class="text-2xl font-bold">สมาชิก</div>
    <div class="text-2xl font-bold col-span-2">รายการบริการ</div>
    <v-mdi name="mdi-car" size="100"></v-mdi>
    <div class="text-2xl font-bold">099</div>
    <div class="text-2xl font-bold">ล้างรถ</div>
    <div class="row-span-2 font-bold text-6xl text-orange-500">13:00 น.</div>
    <div class="text-2xl font-bold col-span-4">ราคา 300 บ.</div>
    <div class="text-2xl font-bold col-span-4">ส่วนลด 0 บ.</div>
    <div class="col-span-4 flex justify-center gap-3">
      <router-link to="/firstpage" class="text-right bg-main px-2 text-2xl font-bold rounded-lg hover:bg-orange-600">ยกเลิก</router-link>
      <router-link to="/rate" class="text-right bg-main px-2 text-2xl font-bold rounded-lg hover:bg-orange-600">เสร็จสิ้น</router-link>
    </div>
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '../components/sidebar.vue'

export default defineComponent({
  name: 'status',
  components: { Sidebar }
})
</script>
