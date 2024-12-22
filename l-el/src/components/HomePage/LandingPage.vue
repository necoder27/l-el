<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen select-none">
    <p class="text-9xl">Laetitia</p>
    <div class="flex flex-row items-center justify-between w-5/12 text-2xl">
      <LandingPageDivider />
      <LandingPageLink text="projects" />
      <LandingPageDivider />
      <LandingPageLink text="about" />
      <LandingPageDivider />
      <LandingPageLink text="cat" />
      <LandingPageDivider />
    </div>
    <p class="text-9xl">El Badry</p>
  </div>
</template>

<script setup lang="ts">
import LandingPageLink from "@/components/HomePage/LandingPageLink.vue";
import LandingPageDivider from "@/components/HomePage/LandingPageDivider.vue";
</script>

<style scoped>

</style>
