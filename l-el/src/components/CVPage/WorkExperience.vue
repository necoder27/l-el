<template>
  <CVCard title="Work Experience">
    <div v-for="item in workExperienceItems">
      <strong>>></strong> &nbsp; <strong>{{ item.name }}</strong> <br>
      <div v-for="spec in item.specification">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ spec }}
      </div>
    </div>
  </CVCard>
</template>

<script setup lang="ts">
  import CVCard from "@/components/CVPage/CVCard.vue";
  import type {IListItem} from "@/interfaces/listItem.interface.ts";

  const workExperienceItems: IListItem[] = [
    { name: "Siemens AG Austria", specification: ["Smart Infrastructure Department", "Web Development", "4 week Internship, September 2024"] },
    { name: "Siemens AG Austria", specification: ["Smart Infrastructure Department", "Web Development", "4 week Internship, August 2022"] },
    { name: "Kommando Streitkräftebasis (Austrian Military)", specification: ["IT Department", "5 week Internship, July-August 2021"] },
  ]
</script>

<style scoped>

</style>
