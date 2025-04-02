<template>
  <div class="flex flex-wrap w-[100%] px-6 my-7 justify-between mb-14">
    <ProjectCard title="Netanol"
                 :tags="['Nuxt.js', 'CSS', 'D3.js', 'Docker', 'Agile Project Management', 'Jira Kanban',]"
                 description="<strong>Net</strong>(work)<strong>an</strong>(alyzer)(to)<strong>ol</strong> was my diploma project i worked on with four classmates. i was part of the frontend development team and wrote my diploma thesis about 'Visualization for Frontend and Graph-Based Data'."
                 :links="[{image: {path: GitHubLogo, alt: 'Github Link'}, link: 'https://github.com/TELBC/Netanol'}]"
    />
    <ProjectCard title="Langton's Ant Visualization"
                 :tags="['Python', 'Pygame']"
                 description="Simple visualization of Langton's ant with a random spawn position of the ant, more colors for movement, several color schemes, and diagonal movement."
                 :links="[{image: {path: GitHubLogo, alt: 'Github Link'}, link: 'https://github.com/necoder27/langtons-ant'}]"
    />
    <ProjectCard title="WIP - tabby"
                 :tags="['Python', 'FastAPI', 'Vue.js', 'TypeScript', 'CSS']"
                 description="Dashboard for new browser tabs because I like data. Planned features: greeting, weather, os info, etc."
    />
  </div>
</template>

<script setup lang="ts">
  import ProjectCard from "@/components/ProjectsPage/ProjectCard.vue";
  import GitHubLogo from "@/assets/imgs/logos/github-mark/github-mark-white.png";
</script>

<style scoped>

</style>
