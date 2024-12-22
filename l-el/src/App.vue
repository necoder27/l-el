<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
  import Navbar from "@/components/Navbar.vue";
import {provide, ref, watch} from "vue";

  const route = useRoute();
  const selectedPage = ref(route.path.split("/").pop() as string);

  function changePage(newPage: string) {
    selectedPage.value = newPage;
  }

  watch(
    () => route.path,
    (newPath) => { selectedPage.value = newPath.split("/").pop() as string; }
  )

  provide("selectedPage", {selectedPage, changePage});
</script>

<template>
  <div class="flex flex-col h-screen overflow-x-hidden">
    <Navbar v-show="selectedPage != 'home' && selectedPage != ''" />
    <RouterView :class="[(selectedPage != 'home' && selectedPage != '') ? 'mt-36' : 'mt-0']" />
  </div>
</template>

<style scoped>

</style>
