<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
  import Navbar from "@/components/Navbar.vue";
  import {provide, ref} from "vue";

  const route = useRoute();
  const selectedPage = ref(route.path.split("/").pop() as string);

  function changePage(newPage: string) {
    selectedPage.value = newPage;
  }

  provide("selectedPage", {selectedPage, changePage});
</script>

<template>
  <div class="flex flex-col h-screen overflow-x-hidden">
    <Navbar v-if="selectedPage != 'home'" />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
