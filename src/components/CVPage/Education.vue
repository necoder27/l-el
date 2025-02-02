<template>
  <CVCard title="Education">
    <div v-for="item in educationItems">
      <strong>>></strong> &nbsp; {{ item.start }} - {{ item.end }} &nbsp; <strong>{{ item.name }}</strong>, <br>
      <div v-for="spec in item.specification">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ spec }}
      </div>
    </div>
  </CVCard>
</template>

<script setup lang="ts">
  import type {IListItem} from "@/interfaces/listItem.interface.ts";
  import CVCard from "@/components/CVPage/CVCard.vue";

  const educationItems: IListItem[] = [
    { name: "Technical University of Vienna", specification: ["Bachelor Computer Science"], start: "2024", end: "today" },
    { name: "HTL Spengergasse", specification: ["Computer Science Bilingual (German, English)", "Graduated with Distinction (Reife- und Diplomprüfung)"], start: "2019", end: "2024" },
    { name: "BG/BRG Perchtoldsdorf", specification: ["Music Specialized Curriculum"], start: "2015", end: "2019" },
  ]
</script>

<style scoped>

</style>
