<template>
  <CVCard title="Languages">
    <div v-for="item in languageItems" :key="item.id">
      <strong>>></strong> &nbsp; {{ item.name }} &nbsp;
      <span v-for="spec in item.specification">( {{ spec }} )</span>
    </div>
  </CVCard>
</template>

<script setup lang="ts">
  import CVCard from "@/components/CVPage/CVCard.vue";
  import type {ListItem} from "@/interfaces/listItem.interface.ts";

  const languageItems: ListItem[] = [
    { id: 0, name: "German", specification: ["Native Language"], start: "", end: "" },
    { id: 1, name: "English", specification: ["fluent"], start: "", end: "" }
  ]
</script>

<style scoped>

</style>
