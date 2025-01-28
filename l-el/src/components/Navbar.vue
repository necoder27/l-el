<template>
  <div>
    <div class="flex flex-row h-10 w-screen select-none top-0 py-8 md:py-12 text-2xl fixed bg-[#1e1e1e]/75 backdrop-blur-md">
      <div class="w-1/4 lg:w-2/3 text-sm xs:text-base md:text-2xl lg:text-3xl leading-snug flex flex-col lg:flex-row justify-center lg:items-center lg:justify-normal pl-5 md:px-10 lg:px-12">
        Laetitia&nbsp;<span class="text-nowrap">El Badry</span>
      </div>
      <div class="w-fit min-w-1"></div>
      <div class="flex flex-grow flex-nowrap items-center justify-between pr-3 md:pr-5 lg:px-12 text-sm xs:text-base md:text-2xl lg:text-3xl">
        <NavbarLink to="/" text="home" />
        <NavbarLink to="/projects" text="projects" />
        <NavbarLink to="/about" text="about" />
        <NavbarLink to="/cat" text="cat" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import NavbarLink from "@/components/NavbarLink.vue";

  //mx-[2.5vw] w-[95vw]
</script>

<style scoped>

</style>
