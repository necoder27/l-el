<template>
 <div class="flex flex-col space-y-4 w-fit p-8 m-4 border border-gray-500 rounded-xl shadow-lg">
   <span class="text-3xl"><strong>{{ title }}</strong></span>
   <slot></slot>
 </div>
</template>

<script setup lang="ts">
  defineProps< {
    title: string;
  }>();
</script>

<style scoped>

</style>
