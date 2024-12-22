<script setup lang="ts">
  import type {IImage} from "@/interfaces/image.interface.ts";

  defineProps<{
    title: string;
    description: string;
    image?: IImage;
  }>();
</script>

<template>
  <div class="flex flex-col w-fit border border-gray-500 p-8 rounded-xl hover:shadow-lg hover:shadow-[#171717] select-none transition duration-300 ease-in-out">
    <img :src="image?.path" :alt="image?.alt" />
    <span class="text-3xl">
      <strong>{{ title }}</strong>
    </span>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>

</style>
