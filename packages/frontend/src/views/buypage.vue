<template>
  <sidebar />
  <div class="min-h-screen w-full">
    <div class="min-w-min mx-auto mt-20">
      <div class="grid grid-cols-2 gap-3 text-right text-2xl">
        <div class="">
          ยี่ห้อรถ
        </div>
        <input type="text" class="ring-black ring-2 w-1/2 rounded">
        <div class="">
          รุ่น
        </div>
        <input type="text" class="ring-black ring-2 w-1/2 rounded">
        <div class="">
          ทะเบียน
        </div>
        <input type="text" class="ring-black ring-2 w-1/2 rounded">
        <div class="">
          เบอร์โทร
        </div>
        <input type="text" class="ring-black ring-2 w-1/2 rounded">
        <div class="">
          บริการ
        </div>
        <select id="cars" class="ring-black ring-2 w-1/2 rounded">
          <option value="volvo">
            ล้างรถ
          </option>
          <option value="saab">
            เคลือบสี
          </option>
          <option value="vw">
            ทำความสะอาด
          </option>
          <option value="audi" selected>
            -
          </option>
        </select>
        <div class="w-full justify-end">
          <router-link to="/bill" class="rounded w-min px-2 hover:bg-orange-600 bg-main inline-block">
            ยืนยัน
          </router-link>
        </div>
        <router-link to="/firstpage" class="rounded w-min px-2 hover:bg-orange-600 bg-main inline-block">
          ยกเลิก
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '../components/sidebar.vue'

export default defineComponent({
  name: 'buypage',
  components: { Sidebar }
})
</script>
<style scoped>

</style>
