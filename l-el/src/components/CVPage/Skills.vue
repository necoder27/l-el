<template>
  <CVCard title="Skills">
    <div v-for="item in skillList" :key="item.id">
      <strong>>></strong> &nbsp; {{ item.name}}
    </div>
  </CVCard>
</template>

<script setup lang="ts">
  import CVCard from "@/components/CVPage/CVCard.vue";
  import type {ListItem} from "@/interfaces/listItem.interface.ts";

  const skillList: ListItem[] = [
    { id: 0, name: "Vue.js, Nuxt.js, React, TailwindCSS, HTML, CSS", specification: [], start: "", end: "" },
    { id: 1, name: "Python 3, Javascript, Typescript, Java, C#", specification: [], start: "", end: "" },
    { id: 2, name: "MySQL, PLSQL, ColdFusion", specification: [], start: "", end: "" },
    { id: 3, name: "Jetbrains IDEs (PyCharm, IntelliJ, WebStorm, DataGrip, Rider), VS Code", specification: [], start: "", end: "" },
    { id: 4, name: "Postman, Docker Desktop, Figma", specification: [], start: "", end: "" },
  ]
</script>

<style scoped>

</style>
