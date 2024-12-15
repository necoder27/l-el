<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Navbar from "@/components/Navbar.vue";
  import {provide, ref} from "vue";

  const selectedPage = ref("home");

  function changePage(newPage: string) {
    selectedPage.value = newPage;
  }

  provide("selectedPage", {selectedPage, changePage});
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar v-if="selectedPage != 'home'" />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
