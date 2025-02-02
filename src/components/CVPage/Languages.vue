<template>
  <CVCard title="Languages">
    <div v-for="item in languageItems">
      <strong>>></strong> &nbsp; {{ item.name }} &nbsp;
      <span v-for="spec in item.specification">( {{ spec }} )</span>
    </div>
  </CVCard>
</template>

<script setup lang="ts">
  import CVCard from "@/components/CVPage/CVCard.vue";
  import type {IListItem} from "@/interfaces/listItem.interface.ts";

  const languageItems: IListItem[] = [
    { name: "German", specification: ["Native Language"] },
    { name: "English", specification: ["fluent"] },
  ]
</script>

<style scoped>

</style>
