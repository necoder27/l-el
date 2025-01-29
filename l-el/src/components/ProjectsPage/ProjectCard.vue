<script setup lang="ts">
  import type {IImage} from "@/interfaces/image.interface.ts";

  defineProps<{
    title: string;
    tags: string[];
    description: string;
    image?: IImage;
    link: string;
  }>();
</script>

<template>
  <a :href="link" class="w-full xl:w-[30vw] mb-5 border border-gray-500 border-l-transparent border-t-transparent rounded-xl xl:hover:shadow-xl hover:shadow-black transition duration-300 ease-in-out">
    <div class="flex flex-col justify-between w-full xl:w-[30vw] xl:h-full p-5">
      <div class="flex flex-col space-y-2">
        <img :src="image?.path" :alt="image?.alt" />
        <span class="text-2xl lg:text-3xl underline decoration-gray-500">
        <strong>{{ title }}</strong>
      </span>
        <div class="flex">
          <a href="">
            <img src="@/assets/imgs/socials_logos/github-mark/github-mark-white.png" class="h-5" alt="GitHub Logo">
          </a>
        </div>
        <p class="text-justify lg:line-clamp-4 lg:text-ellipsis lg:overflow-hidden">{{ description }}</p>
      </div>
      <div class="flex flex-wrap">
        <div v-for="tag in tags" class="border border-gray-500 border-l-transparent border-t-transparent text-gray-500 px-2 py-1 rounded-md w-fit mr-2 mt-2">{{ tag }}</div>
      </div>
    </div>
  </a>
</template>

<style scoped>

</style>
