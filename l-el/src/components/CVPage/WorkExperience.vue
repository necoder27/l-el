<template>
  <CVCard title="Work Experience">
    <div v-for="item in workExperienceItems" :key="item.id">
      <strong>>></strong> &nbsp; <strong>{{ item.name }}</strong> <br>
      <div v-for="spec in item.specification">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ spec }}
      </div>
    </div>
  </CVCard>
</template>

<script setup lang="ts">
  import CVCard from "@/components/CVPage/CVCard.vue";
  import type {ListItem} from "@/interfaces/listItem.interface.ts";

  const workExperienceItems: ListItem[] = [
    { id: 0, name: "Siemens AG Austria", specification: ["Smart Infrastructure Department", "Web Development", "4 week Internship, September 2024"], start: "", end: "" },
    { id: 1, name: "Siemens AG Austria", specification: ["Smart Infrastructure Department", "Web Development", "4 week Internship, August 2022"], start: "", end: "" },
    { id: 2, name: "Kommando Streitkräftebasis (Austrian Military)", specification: ["IT Department", "5 week Internship, July-August 2021"], start: "", end: "" },
  ]
</script>

<style scoped>

</style>
