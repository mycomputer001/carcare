<template>
  <sidebar />
  <div class="min-h-screen w-full">
    <div class="min-w-min mx-auto mt-20">
      <div class="grid grid-cols-2 gap-3 text-center text-3xl">
        <img src="@/assets/car1.png" width="300" height="auto" alt="logo" class="mx-auto rounded-full">
        <img src="@/assets/car2.png" width="300" height="auto" alt="logo" class="mx-auto rounded-full">
        <div class="">
          รถยนต์
        </div>
        <div class="">
          จักรยานยนต์
        </div>
        <router-link to="/buypage" class="hover:bg-orange-600 bg-main w-max px-10 mx-auto font-mono rounded-full">
          เลือก
        </router-link>
        <router-link to="/buypage" class="hover:bg-orange-600 bg-main w-max px-10 mx-auto font-mono rounded-full">
          เลือก
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '../components/sidebar.vue'

export default defineComponent({
  name: 'firstpage',
  components: { Sidebar }
})
</script>
<style scoped>

</style>
