<template>
  <RouterLink class="flex justify-center px-0.5 text-lg xs:text-lg md:text-3xl hover:text-gray-500 transition-all duration-300 ease-in-out"
              :to="`/${text}`"
              @click="changePage(text)"
  >
    {{ text }}
  </RouterLink>
</template>

<script setup lang="ts">
  import type {IPageContext} from "@/interfaces/pageContext.interface.ts";
  import {inject} from "vue";

  defineProps<{
    text: string;
  }>();

  const { selectedPage, changePage } = inject<IPageContext>("selectedPage")!;
</script>

<style scoped>

</style>
