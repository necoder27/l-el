<template>
  <div class="flex flex-row h-10 w-screen select-none top-0 py-12 text-2xl">
    <div class="w-2/3 flex flex-row items-center px-12">
      Laetitia El Badry
    </div>
    <div class="flex flex-row items-center justify-between w-1/3 px-12">
      <NavbarLink to="/" text="home" />
      <NavbarLink to="/projects" text="projects" />
      <NavbarLink to="/cv" text="cv" />
      <NavbarLink to="/cat" text="cat" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import NavbarLink from "@/components/NavbarLink.vue";
</script>

<style scoped>

</style>
