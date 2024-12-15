<template>
  <div class="flex flex-col overflow-y-auto overflow-x-hidden">
    <div class="h-screen">
      <LandingPage />
    </div>

    <About />
  </div>
</template>

<script setup lang="ts">
  import LandingPage from "@/components/HomePage/LandingPage.vue";
  import About from "@/components/HomePage/About.vue";
</script>

<style scoped>

</style>
