<script setup lang="ts">
  import type {IImage} from "@/interfaces/image.interface.ts";
  import {ref} from "vue";

  defineProps<{
    title: string;
    tags?: string[];
    description: string;
    image?: IImage;
    links?: {
      image: IImage;
      link: string;
    }[];
  }>();

  const expanded = ref('');

  function expandProjectDescription(projectName: string): void {
    if (expanded.value === projectName) expanded.value = '';
    else expanded.value = projectName;
  }
</script>

<template>
  <div class="flex flex-col justify-between w-full lg:w-[45vw] xl:w-[30vw] p-5 mb-5 border border-gray-500 border-l-transparent border-t-transparent rounded-xl xl:hover:shadow-xl hover:shadow-black transition duration-300 ease-in-out"
       @click="expandProjectDescription(title)"
  >
    <div class="flex flex-col space-y-2">
      <img :src="image?.path" :alt="image?.alt" />
      <span class="text-2xl lg:text-3xl underline decoration-gray-500">
        <strong>{{ title }}</strong>
      </span>
      <div class="flex">
        <a v-for="l in links" :href="l.link">
          <img :src="l.image.path" class="h-5" :alt="l.image.alt">
        </a>
      </div>
      <p :class="[expanded === title ? 'line-clamp-none' : 'line-clamp-6 lg:line-clamp-4', 'text-justify lg:text-ellipsis lg:overflow-hidden cursor-pointer']"
         v-html="description"
      >
      </p>
    </div>
    <div class="flex flex-wrap">
      <div v-for="tag in tags" class="border border-gray-500 border-l-transparent border-t-transparent text-gray-300 px-2 py-1 rounded-md w-fit mr-2 mt-2 select-none">{{ tag }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
