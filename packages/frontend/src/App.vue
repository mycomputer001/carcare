<template>
  <nav class="bg-main w-full h-12">
    <div class="flex justify-start items-center">
      <img src="@/assets/1.png" width="85" height="auto" alt="logo">
      <h1 class="text-2xl text-black">
        OKCarCare
      </h1>
    </div>
  </nav>
  <div class="content">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app'
})
</script>

<style scoped>
.content {
  @apply flex flex-row bg-bgall;
}
</style>
