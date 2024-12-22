<script setup lang="ts">
  interface ISkillItem {
    name: string;
    image: string;
  }

  const skillItems: ISkillItem[] = [
    { name: "Python", image: ""},
    { name: "Typescript", image: ""},
    { name: "Javascript", image: ""},
    { name: "HTML", image: ""},
    { name: "CSS", image: ""},
    { name: "Java", image: ""},
    { name: "SQL", image: ""},
    { name: "TailwindCSS", image: ""},
    { name: "Vue.js", image: ""},
  ]
</script>

<template>
  <div class="flex justify-center w-[100vw] border-t-[0.05125vw] border-b-[0.05125vw] border-t-white border-b-white">
    <div class="flex flex-wrap border-l-[0.05125vw] border-r-[0.05125vw] border-l-white border-r-white w-5/6 lg:w-2/3">
      <div v-for="item in skillItems" class="p-4 lg:p-8 text-xl lg:text-3xl">
        > {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
