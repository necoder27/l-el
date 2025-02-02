<template>
  <div class="flex flex-wrap w-[100%] px-6 my-7 justify-between mb-14">
    <!--<ProjectCard title="Lorem ipsum dolor sit amet"
                 :tags="['html', 'css', 'python']"
                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                 :links="[
                   {
                     image: {
                       path: GitHubLogo,
                       alt: 'GitHub Logo'
                     },
                     link: ''
                   },
                 ]"
    />
    <ProjectCard title="Lorem ipsum"
                 :tags="['java']"
                 description="Lorem ipsum dolor sit amet,"
    />
    <ProjectCard title="Lorem"
                 :tags="['python', 'sql']"
                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    />
    <ProjectCard title="ipsum"
                 :tags="['java', 'vue.js', 'tailwindcss', 'typescript', 'css', 'python', 'css', 'html']"
                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    />-->
    <ProjectCard title="Coming Soon..." :tags="['example']" description="This page is still in development but projects will be added soon." />
  </div>
</template>

<script setup lang="ts">
  import ProjectCard from "@/components/ProjectsPage/ProjectCard.vue";
  import GitHubLogo from "@/assets/imgs/socials_logos/github-mark/github-mark-white.png";
</script>

<style scoped>

</style>
