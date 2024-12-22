<template>
  <div class="flex flex-wrap p-8">
    <div class="flex flex-col my-4 mx-6 text-4xl">
      <img src="" alt="my photo" class="max-w-60">
      <span>
          Laetitia Fanni El Badry
      </span>
    </div>
    <Education />
    <WorkExperience />
    <Skills />
    <Languages />
  </div>
</template>

<script setup lang="ts">
  import Education from "@/components/CVPage/Education.vue";
  import Languages from "@/components/CVPage/Languages.vue";
  import WorkExperience from "@/components/CVPage/WorkExperience.vue";
  import Skills from "@/components/CVPage/Skills.vue";
</script>

<style scoped>

</style>
