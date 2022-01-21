<template>
<div class="sidebar">
  <div class="h-[70%] flex flex-col justify-between items-center mt-4">
    <div>
      <v-mdi name="mdi-account-circle" size="125" fill="#c3c3c3"></v-mdi>
      <div class="text-white">Aekkepang Jantola</div>
    </div>
    <div class="menu-grid">
      <router-link to="/firstpage"><v-mdi name="mdi-home-variant" size="40" fill="#c3c3c3"></v-mdi></router-link>
      <router-link to="/firstpage"><div class="text-white hover:text-orange-400">กลับหน้าหลัก</div></router-link>
      <router-link to="/profile"><v-mdi name="mdi-account-cog" size="40" fill="#c3c3c3"></v-mdi></router-link>
      <router-link to="/profile"><div class="text-white hover:text-orange-400">ข้อมูลบัญชี</div></router-link>
      <router-link to="/status"><v-mdi name="mdi-car-wash" size="40" fill="#c3c3c3"></v-mdi></router-link>
      <router-link to="/status"><div class="text-white hover:text-orange-400">ตรวจสอบสถานะ</div></router-link>
      <router-link to="/contact"><v-mdi name="mdi-bell-ring" size="40" fill="#c3c3c3"></v-mdi></router-link>
      <router-link to="/contact"><div class="text-white hover:text-orange-400">ติดต่อเรา</div></router-link>
      <router-link to="/login"><v-mdi name="mdi-door-open" size="40" fill="#c3c3c3"></v-mdi></router-link>
      <router-link to="/login"><div class="text-white hover:text-orange-400">ออกจากระบบ</div></router-link>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'sidebar'
})
</script>
<style scoped>
.sidebar {
  @apply w-60 bg-side min-h-screen;
}
.menu-grid {
  @apply w-10/12 grid gap-2 grid-cols-2 mx-3 items-center;
  grid-template-columns: min-content 1fr;
}
</style>
