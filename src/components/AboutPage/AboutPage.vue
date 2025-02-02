<template>
  <div class="flex flex-col items-center justify-center text-justify space-y-20 p-5 mb-16 md:px-12 xl:px-24 pt-0 lg:pt-10">
    <AboutPageDescription />
    <div class="flex flex-col xl:flex-row w-full">
      <AboutPageSkills />
      <AboutPageLinks />
    </div>
  </div>
</template>

<script setup lang="ts">

import AboutPageSkills from "@/components/AboutPage/AboutPageSkills.vue";
import AboutPageDescription from "@/components/AboutPage/AboutPageDescription.vue";
import AboutPageLinks from "@/components/AboutPage/AboutPageLinks.vue";
</script>

<style scoped>

</style>
