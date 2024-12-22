<template>
  <CVCard title="Skills">
    <div v-for="item in skillList">
      <strong>>></strong> &nbsp; {{ item.name}}
    </div>
  </CVCard>
</template>

<script setup lang="ts">
  import CVCard from "@/components/CVPage/CVCard.vue";
  import type {IListItem} from "@/interfaces/listItem.interface.ts";

  const skillList: IListItem[] = [
    { name: "Vue.js, Nuxt.js, React, TailwindCSS, HTML, CSS" },
    { name: "Python 3, Javascript, Typescript, Java, C#" },
    { name: "MySQL, PLSQL, ColdFusion" },
    { name: "Jetbrains IDEs (PyCharm, IntelliJ, WebStorm, DataGrip, Rider), VS Code" },
    { name: "Postman, Docker Desktop, Figma" },
  ]
</script>

<style scoped>

</style>
