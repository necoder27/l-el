<template>
  <div class="flex flex-wrap w-[100%] px-6 my-7 justify-between mb-14">
    <ProjectCard title="Netanol" :tags="['Nuxt.js', 'CSS', 'D3.js', 'Docker', 'Agile Project Management', 'Jira Kanban',]" description="<strong>Net</strong>(work)<strong>an</strong>(alyzer)(to)<strong>ol</strong> was my diploma project i worked on with four classmates. i was part of the frontend development team and wrote my diploma thesis about 'Visualization for Frontend and Graph-Based Data'." :links="[{image: {path: GitHubLogo, alt: 'Github Logo'}, link: 'https://github.com/TELBC/Netanol'}]" />
  </div>
</template>

<script setup lang="ts">
  import ProjectCard from "@/components/ProjectsPage/ProjectCard.vue";
  import GitHubLogo from "@/assets/imgs/logos/github-mark/github-mark-white.png";
</script>

<style scoped>

</style>
