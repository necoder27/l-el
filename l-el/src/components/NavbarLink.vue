<template>
  <div class="group" @click="changePage(text)">
    <RouterLink :to="`/${text}`" class="flex flex-row group">
      <span :class="[selectedPage === text ? 'opacity-100' : 'opacity-0',  'group-hover:opacity-100', 'transition-all duration-300 ease-in-out']">
        >&nbsp; <!-- //&nbsp; -->
      </span>
      {{ text }}
    </RouterLink>
    <!-- <span v-if="selectedPage != text" class="block max-w-0 h-0.5 group-hover:max-w-full bg-white transition-all ease-in-out duration-300"></span> -->
    <!--<span v-else class="block max-w-full h-0.5 bg-white"></span> -->
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
