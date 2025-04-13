<template>
  <div class="flex flex-wrap w-[100%] px-6 my-7 justify-between mb-14">
    <ProjectCard title="Netanol"
                 :tags="['Nuxt.js', 'CSS', 'D3.js', 'Docker', 'Agile Project Management', 'Jira Kanban',]"
                 description="<strong>Net</strong>(work)<strong>an</strong>(alyzer)(to)<strong>ol</strong> was my diploma project i worked on with four classmates. i was part of the frontend development team and wrote my diploma thesis about 'Visualization for Frontend and Graph-Based Data'."
                 :links="[{image: {path: GitHubLogo, alt: 'Github Link'}, link: 'https://github.com/TELBC/Netanol'}]"
    />
    <ProjectCard title="tabby"
                 :tags="['Python', 'FastAPI', 'Vue.js', 'TypeScript', 'CSS', 'launchd']"
                 description="tabby is a dashboard for new browser tabs featuring a greeting, weather, system info, etc. to display it, i wrote two launchd agents that start the api and vue.js app on boot and made my browser open the localhost link on every new tab. as an alias for localhost, i added 'tabby.dashboard' and bound the app to a custom port to avoid conflicts."
                 :links="[{image: {path: GitHubLogo, alt: 'Github Link'}, link: 'https://github.com/necoder27/tabby'}]"
    />
    <ProjectCard title="Langton's Ant Visualization"
                 :tags="['Python', 'Pygame']"
                 description="simple visualization of langton's ant with a random spawn position of the ant, more colors for movement, several color schemes, warping around window edges, and diagonal movement."
                 :links="[{image: {path: GitHubLogo, alt: 'Github Link'}, link: 'https://github.com/necoder27/langtons-ant'}]"
    />
  </div>
</template>

<script setup lang="ts">
  import ProjectCard from "@/components/ProjectsPage/ProjectCard.vue";
  import GitHubLogo from "@/assets/imgs/logos/github-mark/github-mark-white.png";
</script>

<style scoped>

</style>
