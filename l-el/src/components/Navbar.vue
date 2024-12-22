<template>
  <div>
    <div class="flex flex-row h-10 w-screen select-none top-0 py-12 text-2xl fixed bg-[#1e1e1e]/75 backdrop-blur-md">
      <div class="w-1/4 lg:w-2/3 text-[2vh] lg:text-3xl leading-snug flex flex-col lg:flex-row justify-center lg:items-center lg:justify-normal px-5 lg:px-12">
        Laetitia&nbsp;<span class="text-nowrap">El Badry</span>
      </div>
      <div class="flex flex-row items-center justify-between w-3/4 lg:w-2/4 px-5 lg:px-12 text-[2vh] lg:text-3xl">
        <NavbarLink to="/" text="home" />
        <NavbarLink to="/projects" text="projects" />
        <NavbarLink to="/" text="about" />
        <NavbarLink to="/cat" text="cat" />
      </div>
    </div>
    <span class="block bg-white h-[0.05125vh] mt-24 w-full fixed"></span>
  </div>
</template>

<script setup lang="ts">
  import NavbarLink from "@/components/NavbarLink.vue";

  //mx-[2.5vw] w-[95vw]
</script>

<style scoped>

</style>
