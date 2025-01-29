<template>
  <div class="flex flex-wrap w-[100%] px-6 my-7 justify-between mb-14">
    <ProjectCard title="TestTestTestTestTest Test TestTest"
                 :tags="['html', 'css', 'python']"
                 description="hdjskvnejdkalf< fnjka lnfje fnja nj wjewihfj skfnfnejkfljfnej fjfjdhjskfh fhjkdshfjdskhfdjka fhhfjdksfhdjsfh fhdjksfhjdkhsfdjksfheiufhdj fhjdshfjdks cjkdsjc dkjcns cd cdkscndjskv cdkcvnsdksdk fdsc njskvjcndk cnjdksvn cd djcksv fvfdvfdvfd vndkj"
                 link=""
    />
    <ProjectCard title="Project"
                 :tags="['java']"
                 description="hdjskvnejdkalf< fnjka lnfje fnja nj"
                 link=""
    />
    <ProjectCard title="Yes"
                 :tags="['python', 'sql']"
                 description="hdjskvnejdkalf< fnjka lnfje fnja nj wjewihfj skfnfnejkfljfnej fjfjdhjskfh fhjkdshfjdskhfdjka"
                 link=""
    />
    <ProjectCard title="Nope"
                 :tags="['java', 'vue.js', 'tailwindcss', 'typescript', 'css', 'python', 'css', 'html']"
                 description="hdjskvnejdkalf< fnjka lnfje fnja nj wjewihfj skfnfnejkfljfnej fjfjdhjskfh fhjkdshfjdskhfdjka fhhfjdksfhdjsfh"
                 link=""
    />
  </div>
</template>

<script setup lang="ts">
  import ProjectCard from "@/components/ProjectsPage/ProjectCard.vue";
</script>

<style scoped>

</style>
