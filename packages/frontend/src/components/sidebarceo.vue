<template>
  <div class="sidebarceo">
    <div class="h-[70%] flex flex-col justify-start gap-20 items-center mt-4">
      <div>
        <v-mdi name="mdi-account-circle" size="125" fill="#c3c3c3" />
        <div class="text-white">
          Aekkepang Jantola
        </div>
      </div>
      <div class="menu-grid">
        <router-link to="/firstpage">
          <v-mdi name="mdi-car" size="40" fill="#c3c3c3" />
        </router-link>
        <router-link to="/firstpage">
          <div class="text-white hover:text-orange-400">
            สถานะรถ
          </div>
        </router-link>
        <router-link to="/profile">
          <v-mdi name="mdi-account-cog" size="40" fill="#c3c3c3" />
        </router-link>
        <router-link to="/employee">
          <div class="text-white hover:text-orange-400">
            ข้อมูลพนักงาน
          </div>
        </router-link>
        <router-link to="/status">
          <v-mdi name="mdi-chart-areaspline" size="40" fill="#c3c3c3" />
        </router-link>
        <router-link to="/status">
          <div class="text-white hover:text-orange-400">
            สถิติ
          </div>
        </router-link>
        <router-link to="/contact">
          <v-mdi name="mdi-star-shooting-outline" size="40" fill="#c3c3c3" />
        </router-link>
        <router-link to="/contact">
          <div class="text-white hover:text-orange-400">
            รีวิวพนักงาน
          </div>
        </router-link>
        <router-link to="/login">
          <v-mdi name="mdi-door-open" size="40" fill="#c3c3c3" />
        </router-link>
        <router-link to="/login">
          <div class="text-white hover:text-orange-400">
            ออกจากระบบ
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'sidebarceo'
})
</script>
<style scoped>
.sidebarceo {
  @apply w-60 bg-side min-h-screen;
}
.menu-grid {
  @apply w-10/12 grid gap-2 grid-cols-2 mx-3 items-center;
  grid-template-columns: min-content 1fr;
}
</style>
