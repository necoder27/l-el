<template>
  <div class="group" @click="changePage(text)">
    <RouterLink :to="`/${text}`">{{ text }}</RouterLink>
    <span v-if="selectedPage != text" class="block max-w-0 group-hover:max-w-full h-0.5 bg-white transition-all ease-in-out duration-500"></span>
    <span v-else class="block max-w-full h-0.5 bg-white"></span>
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import type {IPageContext} from "@/interfaces/pageContext.interface.ts";

  defineProps<{
    to: string;
    text: string;
  }>();

  const { selectedPage, changePage } = inject<IPageContext>("selectedPage")!;
</script>

<style scoped>

</style>
